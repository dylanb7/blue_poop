"use client";

import React from "react";
import { HowItWorksTOC } from "../../layout.tsx/toc";
import { ScrollAnchor } from "../scroll-anchor";
import Xarrow, { Xwrapper } from "react-xarrows";
import { MovementCard } from "./track-movements";
import { MealCard } from "./blue-meal";
import { Label } from "~/components/ui/label";

React.useLayoutEffect = React.useEffect;

export const HowItWorks: React.FC = () => {
  return (
    <>
      <div className="flex w-full flex-col justify-start py-16">
        <ScrollAnchor tocItem={HowItWorksTOC} />
        <p className="mb-8 max-w-prose leading-7 [&:not(:first-child)]:mt-6">
          Before starting the blue dye tests participants must complete a 6-8
          hour overnight fast.
          <br />
          If the person completing the test is using a feeding tube muffins can
          be substituted with blue dye added to a meal kit
          <br />
          If a blue dye meal kit was provided to you as part of a study you
          should freeze it until it is time to complete the test.
        </p>
        <Xwrapper>
          <div className="mx-auto flex flex-row items-center justify-between">
            <div className="flex flex-col gap-10">
              <MealCard id="meal-card" />
              <MovementCard
                id="first-brown"
                isBlue={false}
                shownBms={1}
                title="Start Recording Bowel Movements"
                description="The first bowel movement might not be blue yet"
              />
              <MovementCard
                id="first-blue"
                isBlue={true}
                shownBms={1}
                title="First Blue Bowel Movement"
                description="Eventually you should have a blue/green bowel movement"
              />
              <MovementCard
                id="blues-group"
                isBlue={true}
                shownBms={3}
                title="Keep Recording"
                description="The number of blue bowel movements may vary"
              />
              <MovementCard
                id="last-blue"
                isBlue={true}
                shownBms={1}
                title="Last Blue Bowel Movement"
                description="You won't know it until you record a regular colored bowel movement"
              />
              <MovementCard
                id="test-end"
                isBlue={false}
                shownBms={1}
                title="End of test"
                description="The first brown bowel movement after a blue one marks the end of the test. Mark down you're transit time and lag phase"
              />
            </div>
          </div>
          <Xarrow
            start={"meal-card"}
            end={"first-brown"}
            startAnchor={"bottom"}
            endAnchor={"top"}
            color="var(--gradient)"
            showHead={false}
          />
          <Xarrow
            start={"first-brown"}
            end={"first-blue"}
            startAnchor={"bottom"}
            endAnchor={"top"}
            color="var(--gradient)"
            showHead={false}
          />
          <Xarrow
            start={"first-blue"}
            end={"blues-group"}
            startAnchor={"bottom"}
            endAnchor={"top"}
            color="var(--gradient)"
            showHead={false}
          />
          <Xarrow
            start={"blues-group"}
            end={"last-blue"}
            startAnchor={"bottom"}
            endAnchor={"top"}
            color="var(--gradient)"
            showHead={false}
          />
          <Xarrow
            start={"last-blue"}
            end={"test-end"}
            startAnchor={"bottom"}
            endAnchor={"top"}
            color="var(--gradient)"
            showHead={false}
          />
          <div className="hidden lg:flex">
            <Xarrow
              start={"meal-card"}
              end={"first-blue"}
              SVGcanvasProps={{ overflow: "visible" }}
              color="var(--gradient)"
              labels={
                <Label className="z-50 rounded-sm bg-background p-4 text-lg text-muted-foreground">
                  Transit Time
                </Label>
              }
              startAnchor={"left"}
              endAnchor={"left"}
              _cpx1Offset={-100}
              _cpx2Offset={-100}
              curveness={0}
              showHead={false}
              animateDrawing
            />
            <Xarrow
              start={"first-blue"}
              end={"last-blue"}
              SVGcanvasProps={{ overflow: "visible" }}
              color="var(--gradient)"
              labels={
                <Label className="z-50 rounded-sm bg-background p-4 text-lg   text-muted-foreground">
                  Lag Phase
                </Label>
              }
              _cpx1Offset={100}
              _cpx2Offset={100}
              startAnchor={"right"}
              endAnchor={"right"}
              curveness={0.6}
              showHead={false}
              animateDrawing
            />
          </div>
        </Xwrapper>
      </div>
    </>
  );
};
