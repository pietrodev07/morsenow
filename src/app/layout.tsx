import "@/styles/globals.css";
import { Metadata } from "next";
import { PropsWithChildren } from "react";
import { siteConfig } from "@/config/site";
import { Bricolage_Grotesque } from "next/font/google";
import { Providers } from "@/components/theme-provider";
import { ThemeToggle } from "@/components/theme-toggle";

const font = Bricolage_Grotesque({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: siteConfig.name,
  robots: siteConfig.robots,
  keywords: siteConfig.keywords,
  description: siteConfig.description,
  metadataBase: siteConfig.metadataBase,
  applicationName: siteConfig.applicationName,
};

export default function RootLayout({ children }: PropsWithChildren) {
  return (
    <html lang="en" className={font.className} suppressHydrationWarning>
      <body>
        <Providers>
          {children}
          <ThemeToggle />
        </Providers>
      </body>
    </html>
  );
}
