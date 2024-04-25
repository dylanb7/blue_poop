import { type NextPage } from "next";
import { Aside } from "~/components/layout.tsx/aside";
import { TOC, TOCItems } from "~/components/layout.tsx/toc";
import { HowItWorks } from "~/components/reusable/HowItWorks/how-it-works";
import { NutrientsTable } from "~/components/reusable/nutrition-table";
import { Recipe } from "~/components/reusable/recipe";
import { BlueDyeTest } from "~/components/reusable/the-blue-dye-test";
import { TransitMeasures } from "~/components/reusable/transit-measures";
import { Separator } from "~/components/ui/separator";

const Home: NextPage = () => {
  return (
    <Aside sideComponent={<TOC items={TOCItems} />}>
      <div className="flex flex-col">
        <section>
          <BlueDyeTest />
          <Separator className="my-6" />
        </section>
        <section>
          <HowItWorks />
        </section>
        <section>
          <TransitMeasures />
          <Separator className="my-6" />
        </section>
        <section>
          <Recipe />
        </section>

        <section>
          <Separator className="my-6" />
          <NutrientsTable />
        </section>
      </div>
    </Aside>
  );
};

export default Home;
