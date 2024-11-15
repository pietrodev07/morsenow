import { MORSE_CODE } from "@/morse";

export const textToMorse = (text: string): string => {
  return text
    .toUpperCase()
    .split("")
    .map((char) => MORSE_CODE[char] || char)
    .join(" ");
};

export const speakText = (text: string) => {
  const utterance = new SpeechSynthesisUtterance(text);
  window.speechSynthesis.speak(utterance);
};

export const playMorseCode = (morse: string) => {
  const context = new AudioContext();
  const DOT_DURATION = 0.06;
  const DASH_DURATION = DOT_DURATION * 3;
  const SYMBOL_SPACE = DOT_DURATION;
  const LETTER_SPACE = DOT_DURATION * 3;
  const WORD_SPACE = DOT_DURATION * 7;

  let startTime = context.currentTime;

  const playTone = (duration: number) => {
    const oscillator = context.createOscillator();
    oscillator.connect(context.destination);
    oscillator.frequency.value = 600;
    oscillator.start(startTime);
    oscillator.stop(startTime + duration);
    startTime += duration + SYMBOL_SPACE;
  };

  morse.split("").forEach((symbol) => {
    if (symbol === ".") {
      playTone(DOT_DURATION);
    } else if (symbol === "-") {
      playTone(DASH_DURATION);
    } else if (symbol === " ") {
      startTime += LETTER_SPACE - SYMBOL_SPACE;
    } else if (symbol === "/") {
      startTime += WORD_SPACE - SYMBOL_SPACE;
    }
  });
};
