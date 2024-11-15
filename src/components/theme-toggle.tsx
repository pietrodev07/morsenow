"use client";

import { useCallback } from "react";
import { Button } from "./ui/button";
import { useTheme } from "next-themes";
import { MoonIcon, SunIcon } from "lucide-react";

export const ThemeToggle = () => {
  const { setTheme, resolvedTheme } = useTheme();

  const toggleTheme = useCallback(() => {
    setTheme(resolvedTheme === "dark" ? "light" : "dark");
  }, [resolvedTheme, setTheme]);

  return (
    <Button
      size="icon"
      variant="ghost"
      onClick={toggleTheme}
      className="fixed bottom-4 right-4 rounded-3xl border bg-gray-100 shadow-xl dark:bg-neutral-950/30"
    >
      <SunIcon className="hidden [html.dark_&]:block" />
      <MoonIcon className="hidden [html.light_&]:block" />
    </Button>
  );
};
