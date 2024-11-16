"use client";

import * as T from "@/components/ui/toast";
import { useToast } from "@/hooks/use-toast";

export function Toaster() {
  const { toasts } = useToast();

  return (
    <T.ToastProvider>
      {toasts.map(function ({ id, title, description, action, ...props }) {
        return (
          <T.Toast key={id} {...props}>
            <div className="grid gap-1">
              {title && <T.ToastTitle>{title}</T.ToastTitle>}
              {description && <T.ToastDescription>{description}</T.ToastDescription>}
            </div>
            {action}
            <T.ToastClose />
          </T.Toast>
        );
      })}
      <T.ToastViewport />
    </T.ToastProvider>
  );
}
