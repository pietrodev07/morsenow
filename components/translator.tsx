"use client";

import { TranslatorCard } from "./translator-card";
import { useTranslator } from "@/hooks/use-translator";

export default function MorseTranslator() {
  const { actions, state } = useTranslator();

  return (
    <div className="grid grid-cols-2 max-md:grid-cols-1 gap-12 flex-1">
      <TranslatorCard
        text={state.inputText}
        placeholder="Text to translate"
        handleChange={actions.handleChange}
        handleCopy={() => actions.handleCopy("input")}
        handleSpeak={() => actions.handleSpeak("input")}
      />

      <TranslatorCard
        disabled={true}
        text={state.outputText}
        placeholder="Morse code"
        handleChange={actions.handleChange}
        handleCopy={() => actions.handleCopy("output")}
        handleSpeak={() => actions.handleSpeak("output")}
      />
    </div>
  );
}
