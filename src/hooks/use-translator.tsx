import { ChangeEvent, useEffect, useState } from "react";
import { playMorseCode, speakText, textToMorse } from "@/lib/translator";

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

  const handleCopy = async (type: "input" | "output") => {
    const text = type === "input" ? inputText : outputText;
    await navigator.clipboard.writeText(text);
  };

  const handleSpeak = (type: "input" | "output") => {
    if (type === "input") speakText(inputText);
    else playMorseCode(outputText);
  };

  return {
    actions: { handleChange, handleCopy, handleSpeak },
    state: { inputText, outputText },
  };
};
