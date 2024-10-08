"use client";

import { Card } from "./ui/card";
import { cn } from "@/lib/utils";
import { ChangeEvent } from "react";
import { Button } from "./ui/button";
import { Copy, Volume2 } from "lucide-react";

type TranslatorCardProps = {
  text: string;
  disabled?: boolean;
  placeholder: string;
  handleSpeak: () => void;
  handleCopy: () => Promise<void>;
  handleChange: (e: ChangeEvent<HTMLTextAreaElement>) => void;
};

export const TranslatorCard = (props: TranslatorCardProps) => {
  return (
    <Card className={cn("p-4", props.disabled && "bg-gray-50")}>
      <textarea
        value={props.text}
        disabled={props.disabled}
        onChange={props.handleChange}
        placeholder={props.placeholder}
        className={cn(
          "w-full h-40 resize-none outline-none",
          props.disabled && "bg-transparent"
        )}
      />

      <div className="flex justify-between mt-2 items-center">
        <div className="flex space-x-2">
          <Button size="icon" variant="ghost" onClick={props.handleSpeak}>
            <Volume2 className="h-4 w-4" />
          </Button>
          <Button size="icon" variant="ghost" onClick={props.handleCopy}>
            <Copy className="h-4 w-4" />
          </Button>
        </div>
        <span className="text-gray-500 text-sm">{props.text.length} chars</span>
      </div>
    </Card>
  );
};
