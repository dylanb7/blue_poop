import { ScrollArea } from "@radix-ui/react-scroll-area";
import { type ReactNode } from "react";

export const Aside: React.FC<
  React.PropsWithChildren<{ sideComponent: ReactNode; className?: string }>
> = ({ children, sideComponent, className }) => {
  return (
    <div className={className}>
      <div className="container flex-1 items-start md:grid md:grid-cols-[220px_minmax(0,1fr)] md:gap-6 lg:grid-cols-[240px_minmax(0,1fr)] lg:gap-10">
        <aside className=" fixed top-14 z-30 -ml-2 hidden h-[calc(100vh-3.5rem)] w-full shrink-0 border-b md:sticky md:block">
          <ScrollArea className="h-full py-6 pr-6 lg:py-8">
            {sideComponent}
          </ScrollArea>
        </aside>
        {children}
      </div>
    </div>
  );
};
