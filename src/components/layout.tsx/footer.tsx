import dayjs from "dayjs";
import type React from "react";

export const Footer: React.FC = () => {
  return (
    <footer className="mb-52 pt-6 md:px-8 md:py-0">
      <div className="container flex flex-col items-center justify-between gap-4 md:h-24 md:flex-row">
        <p className="w-full text-balance text-center text-sm leading-loose text-muted-foreground">
          {`© ${dayjs().format("YYYY")} Symplify LLC`}
        </p>
      </div>
    </footer>
  );
};
