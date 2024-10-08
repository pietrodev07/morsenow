import * as CD from "@/components/ui/card";
import MorseTranslator from "@/components/translator";

export default function Home() {
  return (
    <main className="flex flex-col gap-8 p-8 max-w-6xl mx-auto ">
      <CD.Card className="bg-gray-100">
        <CD.CardHeader>
          <CD.CardTitle>Morse Translator App</CD.CardTitle>
          <CD.CardDescription>
            A simple app to translate text to morse code
          </CD.CardDescription>
        </CD.CardHeader>
      </CD.Card>

      <MorseTranslator />
    </main>
  );
}
