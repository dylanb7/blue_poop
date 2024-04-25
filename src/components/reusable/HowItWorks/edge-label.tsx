import {
  Card,
  CardDescription,
  CardHeader,
  CardTitle,
} from "~/components/ui/card";

export type EdgeData = {
  id: string;
  text: string;
  description?: string;
};

export const EdgeLabel: React.FC<EdgeData> = ({ text, description, id }) => {
  return (
    <Card id={id} className="max-w-sm">
      <CardHeader>
        <CardTitle>{text}</CardTitle>
        {description && <CardDescription>{description}</CardDescription>}
      </CardHeader>
    </Card>
  );
};
