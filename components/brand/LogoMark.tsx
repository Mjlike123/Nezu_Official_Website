import { cn } from "@/lib/cn";

interface LogoMarkProps {
  /** size in px, default 32 */
  size?: number;
  /** kept for existing call sites; PNG logo is used for all variants */
  variant?: "color" | "mono-ink" | "mono-paper";
  className?: string;
}

/**
 * Nezu app icon mark.
 * Uses the exported PNG cut from the latest design instead of an inline SVG,
 * so the website matches the Figma icon exactly.
 */
export function LogoMark({
  size = 32,
  variant: _variant = "color",
  className,
}: LogoMarkProps) {
  return (
    <img
      src="/images/brand/nezu-logo.png"
      alt="Nezu"
      width={size}
      height={size}
      className={cn("shrink-0 rounded-[7px] object-cover", className)}
      style={{ width: size, height: size }}
    />
  );
}

/**
 * Logo 横版组合：图形 + Nezu 字标
 */
export function LogoLockup({
  size = 32,
  variant = "color",
  className,
}: LogoMarkProps) {
  const textColor =
    variant === "mono-paper" ? "text-white" : "text-brand-ink";
  return (
    <div className={cn("inline-flex items-center gap-2.5", className)}>
      <LogoMark size={size} variant={variant} />
      <span
        className={cn(
          "font-display text-[28px] leading-none tracking-tight",
          textColor,
        )}
      >
        Nezu
      </span>
    </div>
  );
}
