"use client";

import { TranslatorCard } from "./translator-card";
import { useTranslator } from "@/hooks/use-translator";

export const MorseTranslator = () => {
  const { actions, states } = useTranslator();

  return (
    <div className="grid flex-1 grid-cols-2 gap-12 max-md:grid-cols-1">
      <TranslatorCard
        disabled={false}
        text={states.inputText}
        placeholder="Text to translate"
        actions={{
          handleChange: actions.handleChange,
          handleCopy: () => actions.handleCopy("input"),
          handleSpeak: () => actions.handleSpeak("input"),
        }}
      />

      <TranslatorCard
        disabled={true}
        text={states.outputText}
        placeholder="Morse code"
        actions={{
          handleChange: actions.handleChange,
          handleCopy: () => actions.handleCopy("output"),
          handleSpeak: () => actions.handleSpeak("output"),
        }}
      />
    </div>
  );
};
