"use client";

import { useEffect, useRef, useState } from "react";
import { cn } from "@/lib/cn";

interface CopyEmailButtonProps {
  email: string;
  className?: string;
}

async function copyText(text: string) {
  if (navigator.clipboard?.writeText) {
    await navigator.clipboard.writeText(text);
    return;
  }

  const textarea = document.createElement("textarea");
  textarea.value = text;
  textarea.setAttribute("readonly", "");
  textarea.style.position = "fixed";
  textarea.style.opacity = "0";
  document.body.appendChild(textarea);
  textarea.select();
  document.execCommand("copy");
  document.body.removeChild(textarea);
}

export function CopyEmailButton({
  email,
  className,
}: CopyEmailButtonProps) {
  const [copied, setCopied] = useState(false);
  const timeoutRef = useRef<number | null>(null);

  useEffect(() => {
    return () => {
      if (timeoutRef.current) {
        window.clearTimeout(timeoutRef.current);
      }
    };
  }, []);

  return (
    <span className="relative inline-flex justify-center">
      <button
        type="button"
        aria-label={copied ? `Copied ${email}` : `Copy ${email}`}
        title={copied ? "Copied" : "Click to copy"}
        onClick={async () => {
          await copyText(email);
          setCopied(true);
          if (timeoutRef.current) {
            window.clearTimeout(timeoutRef.current);
          }
          timeoutRef.current = window.setTimeout(() => setCopied(false), 1400);
        }}
        className={cn(
          "cursor-pointer appearance-none bg-transparent p-0 text-inherit underline decoration-solid underline-offset-[3px] transition-opacity hover:opacity-80",
          className,
        )}
      >
        {email}
      </button>
      <span
        role="status"
        aria-live="polite"
        className={cn(
          "pointer-events-none absolute -top-11 left-1/2 -translate-x-1/2 rounded-full bg-brand-ink px-3 py-1.5 text-sm font-semibold text-white opacity-0 shadow-card-soft transition-all duration-200",
          copied && "-translate-y-1 opacity-100",
        )}
      >
        {copied ? "Copied!" : ""}
      </span>
    </span>
  );
}
