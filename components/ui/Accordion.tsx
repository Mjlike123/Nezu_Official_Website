"use client";

import { motion, AnimatePresence } from "framer-motion";
import { Plus } from "lucide-react";
import { useState } from "react";
import { cn } from "@/lib/cn";

interface AccordionItem {
  q: string;
  a: string;
}

interface AccordionProps {
  items: readonly AccordionItem[];
  /** 是否允许多个同时展开（默认 false） */
  multiple?: boolean;
  className?: string;
}

export function Accordion({ items, multiple = false, className }: AccordionProps) {
  const [openIndices, setOpenIndices] = useState<number[]>([]);

  const toggle = (i: number) => {
    setOpenIndices((prev) => {
      const isOpen = prev.includes(i);
      if (multiple) {
        return isOpen ? prev.filter((x) => x !== i) : [...prev, i];
      }
      return isOpen ? [] : [i];
    });
  };

  return (
    <div className={cn("flex flex-col gap-3", className)}>
      {items.map((item, i) => {
        const isOpen = openIndices.includes(i);
        return (
          <div
            key={i}
            className="overflow-hidden rounded-2xl bg-white shadow-[0_2px_8px_rgba(0,0,0,0.04)] transition-shadow hover:shadow-card-soft"
          >
            <button
              type="button"
              onClick={() => toggle(i)}
              aria-expanded={isOpen}
              className="flex w-full items-center justify-between gap-4 px-6 py-5 text-left text-base font-semibold text-brand-ink md:text-lg"
            >
              <span>{item.q}</span>
              <Plus
                size={20}
                strokeWidth={2.5}
                className={cn(
                  "shrink-0 text-brand-ink transition-transform duration-300",
                  isOpen && "rotate-45 text-brand-blue",
                )}
              />
            </button>
            <AnimatePresence initial={false}>
              {isOpen && (
                <motion.div
                  key="content"
                  initial={{ height: 0, opacity: 0 }}
                  animate={{ height: "auto", opacity: 1 }}
                  exit={{ height: 0, opacity: 0 }}
                  transition={{
                    duration: 0.35,
                    ease: [0.22, 1, 0.36, 1],
                  }}
                >
                  <div className="px-6 pb-5 text-[15px] leading-relaxed text-neutral-600 md:text-base">
                    {item.a}
                  </div>
                </motion.div>
              )}
            </AnimatePresence>
          </div>
        );
      })}
    </div>
  );
}
