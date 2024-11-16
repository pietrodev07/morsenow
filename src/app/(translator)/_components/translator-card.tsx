"use client";

import { cn } from "@/lib/utils";
import { ChangeEvent } from "react";
import { Card } from "@/components/ui/card";
import { Copy, Volume2 } from "lucide-react";
import { Button } from "@/components/ui/button";

type TranslatorCardActions = {
  handleSpeak: () => void;
  handleCopy: () => Promise<void>;
  handleChange: (e: ChangeEvent<HTMLTextAreaElement>) => void;
};

type TranslatorCardProps = {
  text: string;
  disabled: boolean;
  placeholder: string;
  actions: TranslatorCardActions;
};

export const TranslatorCard = (props: TranslatorCardProps) => {
  return (
    <Card
      className={cn(
        "p-4 dark:bg-neutral-950/30",
        props.disabled && "bg-gray-50 dark:bg-neutral-950/60"
      )}
    >
      <textarea
        value={props.text}
        disabled={props.disabled}
        placeholder={props.placeholder}
        onChange={props.actions.handleChange}
        className={"h-40 w-full resize-none bg-transparent outline-none"}
      />

      <div className="mt-2 flex items-center justify-between">
        <div className="flex items-center gap-2">
          <Button
            size="icon"
            variant="ghost"
            disabled={!props.text}
            onClick={props.actions.handleSpeak}
          >
            <Volume2 className="h-4 w-4" />
          </Button>

          <Button
            size="icon"
            variant="ghost"
            disabled={!props.text}
            onClick={props.actions.handleCopy}
          >
            <Copy className="h-4 w-4" />
          </Button>
        </div>

        <span className="text-sm text-gray-500">{props.text.length} chars</span>
      </div>
    </Card>
  );
};
