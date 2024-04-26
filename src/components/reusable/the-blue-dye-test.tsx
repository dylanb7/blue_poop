import { BlueDyeTestTOC } from "../layout.tsx/toc";
import { ScrollAnchor } from "./scroll-anchor";

export const BlueDyeTest: React.FC = () => {
  return (
    <div className="mt-20">
      <ScrollAnchor tocItem={BlueDyeTestTOC} />
      <p className="mt-6 max-w-prose leading-7 [&:not(:first-child)]:mt-6">
        The Blue Dye Meal is designed to be an at home, noninvasive measure of
        GI transit time. Traditional measures of GI transit time require nuclear
        medical imaging. The participant swallows a radioactive tracer and has
        multiple scans over a few hours. While these methods yeild more detailed
        results than the blue dye meal, its possible to get a transit measure
        with just blue dye.
        <br />
        This method was popularized with the{" "}
        <a
          target={"_blank"}
          href="https://zoe.com/post/bluepoopchallenge"
          className="underline"
        >
          #bluepoopchallenge
        </a>
        . The Muffin recipe and procedure detailed on this site were invented by
        Julia Dallman PhD and Baharak Moshiree MD in 2020.
      </p>
    </div>
  );
};
