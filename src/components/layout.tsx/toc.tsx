import React from "react";
import { cn } from "~/lib/utils";
import { Label } from "../ui/label";

export type TOCItem = {
  name: string;
  id: string;
};

export const TOC: React.FC<{ items: TOCItem[] }> = ({ items }) => {
  const activeItem = useActiveItem(items.map((item) => item.id));
  return (
    <>
      <Label className="text-lg font-semibold">On this page</Label>
      <ul className={"m-0 list-none pt-2"}>
        {items.map((item, index) => {
          return (
            <li key={index} className={cn("mt-0 pt-2")}>
              <a
                href={`#${item.id}`}
                className={cn(
                  "inline-block no-underline transition-colors hover:text-foreground",
                  item.id === activeItem
                    ? "font-medium text-foreground"
                    : "text-muted-foreground",
                )}
              >
                {item.name}
              </a>
            </li>
          );
        })}
      </ul>
    </>
  );
};

export function useActiveItem(itemIds: string[]) {
  const [activeId, setActiveId] = React.useState<string | null>(null);

  React.useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            setActiveId(entry.target.id);
          }
        });
      },
      { rootMargin: `0% 0% -80% 0%` },
    );

    itemIds?.forEach((id) => {
      const element = document.getElementById(id);
      if (element) {
        observer.observe(element);
      }
    });

    return () => {
      itemIds?.forEach((id) => {
        const element = document.getElementById(id);
        if (element) {
          observer.unobserve(element);
        }
      });
    };
  }, [itemIds]);

  return activeId;
}

//index toc items

export const BlueDyeTestTOC: TOCItem = {
  name: "Blue Dye Test",
  id: "blue-dye-test",
};

export const HowItWorksTOC: TOCItem = {
  name: "How It Works?",
  id: "how-it-works",
};

export const MeasuresTOC: TOCItem = {
  name: "Transit Measures",
  id: "measures",
};

export const RecipeTOC: TOCItem = { name: "Recipe", id: "recipe" };

export const NutritionTOC: TOCItem = { name: "Nutrition", id: "nutrients" };

export const TOCItems: TOCItem[] = [
  BlueDyeTestTOC,
  HowItWorksTOC,
  MeasuresTOC,
  RecipeTOC,
  NutritionTOC,
];
