import "./globals.css";
import type { Metadata } from "next";
import { PropsWithChildren } from "react";
import { Bricolage_Grotesque } from "next/font/google";

const font = Bricolage_Grotesque({
  subsets: ["latin"],
  weight: "600",
  style: "normal",
});

export const metadata: Metadata = {
  title: "Morse Translator App",
  description: "A simple app to translate text to morse code",
};

export default function RootLayout({ children }: PropsWithChildren) {
  return (
    <html lang="en">
      <body className={font.className}>{children}</body>
    </html>
  );
}
