import { toast } from "./use-toast";
import { ChangeEvent, useEffect, useState } from "react";
import { playMorseCode, speakText, textToMorse } from "@/lib/translator";

type ModeType = "input" | "output";

const toastTexts = {
  text: "Text copied successfully!",
  morse: "Morse code copied successfully!",
};

export const useTranslator = () => {
  const [inputText, setInputText] = useState("");
  const [outputText, setOutputText] = useState("");

  useEffect(() => {
    const translate = () => setOutputText(textToMorse(inputText));
    const timeoutId = setTimeout(translate, 300);
    return () => clearTimeout(timeoutId);
  }, [inputText]);

  const handleChange = (e: ChangeEvent<HTMLTextAreaElement>) => {
    setInputText(e.target.value);
  };

  const handleCopy = async (type: ModeType) => {
    const isInput = type === "input";
    const text = isInput ? inputText : outputText;
    await navigator.clipboard.writeText(text);

    const toastTitle = isInput ? toastTexts.text : toastTexts.morse;
    toast({ variant: "success", title: toastTitle });
  };

  const handleSpeak = (type: ModeType) => {
    if (type == "input") {
      speakText(inputText);
    } else {
      playMorseCode(outputText);
    }
  };

  return {
    actions: { handleChange, handleCopy, handleSpeak },
    states: { inputText, outputText },
  };
};
