import { createTRPCRouter, protectedProcedure } from "~/server/api/trpc";
import * as queries from "../../../graphql/queries";
import { z } from "zod";
import {
  type Response,
  type BlueDyeResponse,
  type DetailResponse,
  type SubUser,
} from "../../../API";

export type UserStudyData = {
  responses: Response[];
  detailResponses: DetailResponse[];
  blueDyeResponses: BlueDyeResponse[];
};

export type SubUserGroup = {
  group: string;
  users: SubUser[];
};

export const usersRouter = createTRPCRouter({
  subUsersByGroup: protectedProcedure
    .input(
      z.object({
        group: z.string(),
        amount: z.number(),
        cursor: z.string().nullish(),
      }),
    )
    .query(async ({ ctx, input }) => {
      const ret = await ctx.client.graphql({
        query: queries.listSubUsers,
        variables: {
          filter: {
            group: {
              eq: input.group,
            },
          },
          limit: input.amount,
          nextToken: input.cursor,
        },
      });

      const { items, nextToken } = ret.data.listSubUsers;
      return {
        subUsers: items,
        nextCursor: nextToken,
      };
    }),

  groups: protectedProcedure.query(({ ctx }) => {
    if (ctx.partOf) return [...ctx.groups, ctx.partOf];
    return ctx.groups;
  }),

  entriesBySubUser: protectedProcedure
    .input(z.object({}))
    .query(async ({ ctx }) => {
      const gqlDocument = /* GraphQL */ `query FetchStamps(\$subId: ID!) {
      $fetchResponses(
        filter: { 
          subUserId: { 
            eq: \$subId 
          }, 
          detailResponseID: {
            attributeExists: false
          },
        }) {
        items {
          id
          stamp
          type
          qid
          textResponse
          selected
          numeric
          all_selected
        }
      }
      $fetchDetails(
        filter: { 
          subUserId: { 
            eq: \$subId 
          },
          
        }) {
        items {
          id
          stamp
          type
          description
          subUserId
          responses {
            items {
              id
              stamp
              type
              qid
              textResponse
              selected
              numeric
              all_selected
            }
          } 
        }
      }
      $fetchBlueResponses(
        filter: { 
          subUserId: { 
            eq: \$subId 
          }, 
        }) {
        items {
          id
          stamp
          finishedEating
          subUserId
          logs {
            items {
              id
              isBlue
              response {
                id
                stamp
                type
                description
                subUserId
                responses {
                  items {
                    id
                    stamp
                    type
                    qid
                    textResponse
                    selected
                    numeric
                    all_selected
                  }
                } 
              }
            }
          }
        }
      }
    }`;
    }),

  responsesBySubUser: protectedProcedure
    .input(
      z.object({
        subId: z.string(),
        cursor: z.string().nullish(),
        amount: z.number(),
      }),
    )
    .query(async ({ ctx, input }) => {
      const ret = await ctx.client.graphql({
        query: queries.listResponses,
        variables: {
          filter: { subUserId: { eq: input.subId } },
          nextToken: input.cursor,
        },
      });

      const { items, nextToken } = ret.data.listResponses;
      return {
        responses: items,
        nextCursor: nextToken,
      };
    }),

  detailsBySubUser: protectedProcedure
    .input(
      z.object({
        subId: z.string(),
        cursor: z.string().nullish(),
        amount: z.number(),
      }),
    )
    .query(async ({ ctx, input }) => {
      const ret = await ctx.client.graphql({
        query: queries.listDetailResponses,
        variables: {
          filter: { subUserId: { eq: input.subId } },
          nextToken: input.cursor,
        },
      });

      const { items, nextToken } = ret.data.listDetailResponses;

      return {
        responses: items,
        nextCursor: nextToken,
      };
    }),
});
