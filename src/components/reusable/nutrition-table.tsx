import { NutritionTOC } from "../layout.tsx/toc";
import { Label } from "../ui/label";
import { ScrollAnchor } from "./scroll-anchor";

export const NutrientsTable: React.FC = () => {
  const tableHeaders: string[] = [
    "Macros",
    "Egg Whites",
    "Sugar",
    "Jam",
    "Flour",
    "Protein Powder",
    "Butter/Oil",
    "Total",
  ];

  const rows: (number | string | undefined)[][] = [
    ["Carbs", undefined, 45, 100, 38.7, undefined, undefined, 183.7],
    ["Protein", 51, undefined, undefined, 1.6, 10, undefined, 62.6],
    ["Fat", undefined, undefined, undefined, undefined, undefined, 5.1, 5.1],
    ["Fiber", undefined, undefined, undefined, 3.2, undefined, undefined, 3.2],
    [
      "All",
      undefined,
      undefined,
      undefined,
      undefined,
      undefined,
      undefined,
      254.6,
    ],
  ];
  return (
    <>
      <ScrollAnchor
        tocItem={NutritionTOC}
        title="Nutritional Components"
        className="text-nowrap"
      >
        <span className="text-md text-wrap text-muted-foreground">
          &nbsp;·&nbsp;calories/macronutrient
        </span>
      </ScrollAnchor>
      <div className="my-6 w-full overflow-y-auto">
        <table className="w-full">
          <thead>
            <tr className="m-0 border-t p-0 even:bg-muted">
              {tableHeaders.map((header, index) => (
                <th
                  key={index}
                  className="border px-4 py-2 text-left font-bold [&[align=center]]:text-center [&[align=right]]:text-right"
                >
                  {header}
                </th>
              ))}
            </tr>
          </thead>
          <tbody>
            {rows.map((row, index) => (
              <tr key={index} className="m-0 border-t p-0 even:bg-muted">
                {row.map((value, index) => (
                  <td
                    key={index}
                    className="border px-4 py-2 text-left [&[align=center]]:text-center [&[align=right]]:text-right"
                  >
                    {value}
                  </td>
                ))}
              </tr>
            ))}
          </tbody>
        </table>
      </div>
      <div className="mt-8 max-w-prose">
        <Label className="text-xl">Why these nutrients?</Label>
        <p className="mb-8 max-w-prose leading-7 [&:not(:first-child)]:mt-6">
          The Blue Muffin recipe is designed to match the nutritional compostion
          of the consensus baseline meal for Gastric emptying scintigraphy
          (GES).
        </p>
        <blockquote className="mt-6 border-l-2 pl-6 italic">
          The standard scintigraphic meal for GE should consist of an egg-white
          meal (Egg Beaters® or generic equivalent) radiolabeled with 0.5–1 mCi
          99mTc. The meal has a caloric value of 255 kcal (nutritional
          composition: 72% carbohydrate, 24% protein, 2% fat, and 2% fiber).
        </blockquote>
        <p className="my-8 text-xs text-muted-foreground">
          Consensus Recommendations for Gastric Emptying Scintigraphy: A Joint
          Report of the American Neurogastroenterology and Motility Society and
          the Society of Nuclear Medicine
          <br />
          Thomas L. Abell, Michael Camilleri, Kevin Donohoe, William L. Hasler,
          Henry C. Lin, Alan H. Maurer, Richard W. McCallum, Thomas Nowak,
          Martin L. Nusynowitz, Henry P. Parkman, Paul Shreve, Lawrence A.
          Szarka, William J. Snape, Harvey A.
          <br />
          Ziessman Journal of Nuclear Medicine Technology Mar 2008, 36 (1)
          44-54; DOI: 10.2967/jnmt.107.048116
        </p>
      </div>
    </>
  );
};
