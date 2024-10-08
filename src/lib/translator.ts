export const MORSE_CODE: Record<string, string> = {
  A: ".-",
  B: "-...",
  C: "-.-.",
  D: "-..",
  E: ".",
  F: "..-.",
  G: "--.",
  H: "....",
  I: "..",
  J: ".---",
  K: "-.-",
  L: ".-..",
  M: "--",
  N: "-.",
  O: "---",
  P: ".--.",
  Q: "--.-",
  R: ".-.",
  S: "...",
  T: "-",
  U: "..-",
  V: "...-",
  W: ".--",
  X: "-..-",
  Y: "-.--",
  Z: "--..",
  "0": "-----",
  "1": ".----",
  "2": "..---",
  "3": "...--",
  "4": "....-",
  "5": ".....",
  "6": "-....",
  "7": "--...",
  "8": "---..",
  "9": "----.",
  " ": "/",
};

export const textToMorse = (text: string) => {
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
  const context = new window.AudioContext();
  const dot = 60;
  const dash = dot * 3;
  const symbolSpace = dot;
  const letterSpace = dot * 3;
  const wordSpace = dot * 7;

  let startTime = context.currentTime;

  morse.split("").forEach((symbol) => {
    if (symbol === ".") {
      const oscillator = context.createOscillator();
      oscillator.connect(context.destination);
      oscillator.frequency.value = 600;
      oscillator.start(startTime);
      oscillator.stop(startTime + dot / 1000);
      startTime += (dot + symbolSpace) / 1000;
    } else if (symbol === "-") {
      const oscillator = context.createOscillator();
      oscillator.connect(context.destination);
      oscillator.frequency.value = 600;
      oscillator.start(startTime);
      oscillator.stop(startTime + dash / 1000);
      startTime += (dash + symbolSpace) / 1000;
    } else if (symbol === " ") {
      startTime += (letterSpace - symbolSpace) / 1000;
    } else if (symbol === "/") {
      startTime += (wordSpace - symbolSpace) / 1000;
    }
  });
};
