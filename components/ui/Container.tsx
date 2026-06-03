import { cn } from "@/lib/cn";
import type { ReactNode, ElementType } from "react";

interface ContainerProps {
  children: ReactNode;
  className?: string;
  as?: ElementType;
}

/**
 * 1280px 居中容器
 * - mobile: 20px 内边距
 * - sm+: 32px
 * - lg+: 48px
 */
export function Container({
  children,
  className,
  as: Tag = "div",
}: ContainerProps) {
  return (
    <Tag className={cn("container-page", className)}>
      {children}
    </Tag>
  );
}
