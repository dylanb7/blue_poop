import { cn } from "~/lib/utils";
import { type TOCItem } from "../layout.tsx/toc";
import { Label } from "../ui/label";

export const ScrollAnchor: React.FC<
  React.PropsWithChildren<{
    tocItem: TOCItem;
    title?: string;
    className?: string;
  }>
> = ({ tocItem, title, className, children }) => {
  return (
    <Label
      className={cn(
        "font-heading mt-12 scroll-m-20 pb-2 text-2xl tracking-tight first:mt-0",
        className,
      )}
      id={tocItem.id}
    >
      <a
        className="subheading-anchor font-medium underline underline-offset-4"
        aria-label="Link to section"
        href={`#${tocItem.id}`}
      >
        <span className="icon icon-link"></span>
      </a>
      {title ?? tocItem.name}
      {children}
    </Label>
  );
};
