import { MeasuresTOC } from "../layout.tsx/toc";
import { Label } from "../ui/label";
import { ScrollAnchor } from "./scroll-anchor";

export const TransitMeasures: React.FC = () => {
  return (
    <div className=" my-5 flex w-full max-w-prose flex-col justify-start gap-3">
      <ScrollAnchor tocItem={MeasuresTOC} />

      <Label className={"text-sm font-semibold"}>Transit Time</Label>
      <code className="relative rounded bg-muted px-[0.3rem] py-[0.2rem] font-mono text-sm font-semibold">
        &nbsp;&nbsp;First Blue Bowel Movement Time
        <br />- Blue Meal Finish Time
        <br />= Transit Time
      </code>
      <Label className={"text-sm font-semibold"}>Lag Phase</Label>
      <code className="relative rounded bg-muted px-[0.3rem] py-[0.2rem] font-mono text-sm font-semibold">
        &nbsp;&nbsp;Last Blue Bowel Movement Time
        <br />- First Blue Bowel Movement Time
        <br />= Lag Phase
      </code>
    </div>
  );
};
