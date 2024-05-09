/**
 * YOU PROBABLY DON'T NEED TO EDIT THIS FILE, UNLESS:
 * 1. You want to modify request context (see Part 1).
 * 2. You want to create a new middleware or type of procedure (see Part 3).
 *
 * TL;DR - This is where all the tRPC server stuff is created and plugged in. The pieces you will
 * need to use are documented accordingly near the end.
 */

import { TRPCError, initTRPC } from "@trpc/server";
import { type CreateNextContextOptions } from "@trpc/server/adapters/next";
import { generateClient } from "aws-amplify/api";
import superjson from "superjson";
import { ZodError } from "zod";
import {
  type AuthSession,
  fetchUserAttributes,
  type FetchUserAttributesOutput,
  fetchAuthSession,
} from "aws-amplify/auth";

interface CreateInnerContextOptions extends Partial<CreateNextContextOptions> {
  session?: AuthSession;
  attributes?: FetchUserAttributesOutput;
}

const createInnerTRPCContext = async (opts: CreateInnerContextOptions) => {
  const client = generateClient();

  const groupsBlob =
    opts.session?.tokens?.accessToken.payload["cognito:groups"];

  const groupArray: string[] = Array.isArray(groupsBlob)
    ? (groupsBlob as string[])
    : [];

  const part = opts.attributes ? opts.attributes["custom:group"] : undefined;

  return {
    client,
    session: opts.session,
    attributes: opts.attributes,
    groups: groupArray,
    partOf: part,
  };
};

export const createTRPCContext = async (opts: CreateNextContextOptions) => {
  const createOptions: CreateInnerContextOptions = { ...opts };

  try {
    const session = await fetchAuthSession();
    createOptions.session = session;
  } catch {}
  try {
    const attributes = await fetchUserAttributes();
    createOptions.attributes = attributes;
  } catch {}

  const innerContext = await createInnerTRPCContext(createOptions);
  return {
    ...innerContext,
    req: opts.req,
    res: opts.res,
  };
};

const t = initTRPC.context<typeof createTRPCContext>().create({
  transformer: superjson,
  errorFormatter({ shape, error }) {
    return {
      ...shape,
      data: {
        ...shape.data,
        zodError:
          error.cause instanceof ZodError ? error.cause.flatten() : null,
      },
    };
  },
});

export const createCallerFactory = t.createCallerFactory;

export const createTRPCRouter = t.router;

export const publicProcedure = t.procedure;

export const protectedProcedure = t.procedure.use(
  async function isAuthed(opts) {
    const { ctx } = opts;

    if (!ctx.session) {
      throw new TRPCError({ code: "UNAUTHORIZED" });
    }
    return opts.next({
      ctx: {
        session: ctx.session,
      },
    });
  },
);

export const studyAdminProcedure = t.procedure.use(
  async function isAdmin(opts) {
    const { ctx } = opts;

    if (!ctx.groups) {
      throw new TRPCError({ code: "UNAUTHORIZED" });
    }
    return opts.next({
      ctx: {
        groups: ctx.groups,
      },
    });
  },
);
