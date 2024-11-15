import { MorseTranslator } from "./_components/translator";
import { AppHeaderCard } from "./_components/app-header-card";

export default function Home() {
  return (
    <main className="mx-auto flex max-w-6xl flex-col gap-8 p-8">
      <AppHeaderCard />
      <MorseTranslator />
    </main>
  );
}
