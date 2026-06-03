import { cn } from "@/lib/cn";
import { ArrowRight } from "lucide-react";
import type { ButtonHTMLAttributes, ReactNode } from "react";

type Variant = "primary" | "secondary" | "ghost" | "paper-on-dark";
type Size = "sm" | "md" | "lg";

interface ButtonProps extends ButtonHTMLAttributes<HTMLButtonElement> {
  variant?: Variant;
  size?: Size;
  leftIcon?: ReactNode;
  rightIcon?: ReactNode;
  /** 是否在右侧自动加 arrow icon，默认 true */
  showArrow?: boolean;
  children: ReactNode;
}

const variantStyles: Record<Variant, string> = {
  primary:
    "bg-brand-blue text-white border border-white/20 backdrop-blur-sm hover:bg-brand-blue-hover focus-visible:ring-brand-blue shadow-[0_8px_24px_rgba(0,136,255,0.25)] hover:shadow-[0_12px_32px_rgba(0,136,255,0.35)]",
  secondary:
    "bg-white text-brand-blue border border-brand-blue/20 hover:border-brand-blue hover:bg-brand-blue/5 focus-visible:ring-brand-blue",
  ghost:
    "bg-transparent text-brand-ink hover:bg-brand-ink/5 focus-visible:ring-brand-ink",
  "paper-on-dark":
    "bg-white text-brand-ink border border-white/10 hover:bg-white/95 focus-visible:ring-white",
};

const sizeStyles: Record<Size, string> = {
  sm: "h-10 px-4 text-sm gap-1.5",
  md: "h-12 px-6 text-base gap-2",
  lg: "h-[52px] px-6 text-base gap-2 sm:h-[72px] sm:px-10 sm:text-lg sm:gap-2.5",
};

export function Button({
  variant = "primary",
  size = "md",
  leftIcon,
  rightIcon,
  showArrow = false,
  className,
  children,
  type = "button",
  ...rest
}: ButtonProps) {
  return (
    <button
      type={type}
      className={cn(
        "group inline-flex items-center justify-center rounded-pill font-semibold font-sans whitespace-nowrap",
        "transition-all duration-300 ease-[var(--ease-spring)]",
        "focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-offset-2",
        "disabled:opacity-50 disabled:cursor-not-allowed disabled:pointer-events-none",
        "active:scale-[0.98]",
        variantStyles[variant],
        sizeStyles[size],
        className,
      )}
      {...rest}
    >
      {leftIcon ? <span className="shrink-0">{leftIcon}</span> : null}
      <span>{children}</span>
      {rightIcon ?? (showArrow ? (
        <ArrowRight
          className="shrink-0 transition-transform duration-300 group-hover:translate-x-0.5"
          size={size === "lg" ? 20 : size === "md" ? 18 : 16}
          strokeWidth={2.5}
        />
      ) : null)}
    </button>
  );
}
