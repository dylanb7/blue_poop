import type React from "react";

import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "~/components/ui/card";
import { Label } from "~/components/ui/label";

import { Muffin } from "~/components/icons";
import { RecipeTOC } from "~/components/layout.tsx/toc";

export const MealCard: React.FC<{ id: string }> = ({ id }) => {
  return (
    <>
      <Card className="max-w-md" id={id}>
        <CardHeader>
          <CardTitle>Eat Blue Meal</CardTitle>
          <CardDescription>When meal is finished record time</CardDescription>
        </CardHeader>
        <CardContent>
          <div className="flex flex-row items-center justify-center gap-6">
            <Muffin className="h-16 w-16 fill-primary " />
            <Muffin className="h-16 w-16 fill-primary " />
          </div>
        </CardContent>
        <CardFooter className="w-prose flex flex-col items-start justify-start">
          <Label>Where do I get my meal?</Label>
          <p className="pt-3 text-sm text-muted-foreground">
            If you are participating in a study your meal kit will be shipped to
            you. If you want to try the muffins on your own the{" "}
            <a href={`#${RecipeTOC.id}`} className="font-semibold underline">
              recipe
            </a>{" "}
            is down below.
          </p>
        </CardFooter>
      </Card>
    </>
  );
};
