import { Card, CardHeader, CardTitle, CardDescription } from "@/components/ui/card";

const content = {
  title: "Morse Translator App",
  description: "A simple app to translate text to morse code",
};

export const AppHeaderCard = () => {
  return (
    <Card className="bg-gray-100 font-semibold dark:bg-neutral-950/30">
      <CardHeader>
        <CardTitle>{content.title}</CardTitle>
        <CardDescription>{content.description}</CardDescription>
      </CardHeader>
    </Card>
  );
};
