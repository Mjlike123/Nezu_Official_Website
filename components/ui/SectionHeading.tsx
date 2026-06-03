import { cn } from "@/lib/cn";
import type { ReactNode } from "react";

interface SectionHeadingProps {
  eyebrow?: string;
  /** 主标题，可以传字符串或 JSX（用于高亮某个词） */
  title: ReactNode;
  /** 标题下方的描述文本 */
  body?: ReactNode;
  /** 居中（默认）还是左对齐 */
  align?: "center" | "left";
  /** 标题字号档位 */
  size?: "md" | "lg" | "xl";
  /** 标题颜色覆盖（用于深色背景） */
  tone?: "ink" | "paper";
  className?: string;
}

const sizeMap = {
  md: "text-[32px] leading-[1.1] sm:text-[40px] md:text-[44px]",
  lg: "text-[40px] leading-[1.05] sm:text-[52px] md:text-[64px]",
  xl: "text-[48px] leading-[1.05] sm:text-[64px] md:text-[80px]",
};

export function SectionHeading({
  eyebrow,
  title,
  body,
  align = "center",
  size = "lg",
  tone = "ink",
  className,
}: SectionHeadingProps) {
  return (
    <div
      className={cn(
        "flex flex-col",
        align === "center" ? "items-center text-center" : "items-start text-left",
        className,
      )}
    >
      {eyebrow ? (
        <span
          className={cn(
            "-rotate-[5deg] mb-4 inline-flex items-center justify-center rounded-[8px] px-5 py-0.5 text-[20px] font-normal leading-normal tracking-normal",
            tone === "paper"
              ? "bg-white/10 text-white"
              : "bg-brand-blue text-white",
          )}
        >
          {eyebrow}
        </span>
      ) : null}
      <h2
        className={cn(
          "font-display font-bold tracking-tight",
          sizeMap[size],
          tone === "paper" ? "text-white" : "text-brand-ink",
        )}
      >
        {title}
      </h2>
      {body ? (
        <p
          className={cn(
            "mt-4 max-w-2xl text-base sm:text-lg",
            tone === "paper" ? "text-white/80" : "text-neutral-600",
          )}
        >
          {body}
        </p>
      ) : null}
    </div>
  );
}
