import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "~/components/ui/card";
import { Poop } from "~/components/icons";

export type MovementData = {
  id: string;
  isBlue: boolean;
  shownBms: number;
  title: string;
  description?: string;
};

export const MovementCard: React.FC<MovementData> = ({
  id,
  isBlue,
  shownBms,
  title,
  description,
}: MovementData) => {
  return (
    <Card className="max-w-md" id={id}>
      <CardHeader>
        <CardTitle>{title}</CardTitle>
        {description && <CardDescription>{description}</CardDescription>}
      </CardHeader>
      <CardContent className="flex flex-wrap items-center justify-center gap-5">
        {[...new Array<number>(shownBms)].map((_, index) => {
          return (
            <Poop
              key={index}
              className={`h-12 w-12 ${isBlue ? "fill-primary" : "fill-yellow-950 dark:fill-yellow-900"}`}
            />
          );
        })}
      </CardContent>
    </Card>
  );
};

/*<Image
              alt={isBlue ? "Blue Poop" : "Poop"}
              key={index}
              src={isBlue ? bluePoop : poop}
              width={400}
              height={400}
              className="h-8 w-8"
            />*/
