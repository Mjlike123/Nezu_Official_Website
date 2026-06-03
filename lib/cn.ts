import { clsx, type ClassValue } from "clsx";
import { twMerge } from "tailwind-merge";

/**
 * 合并 className，支持条件、数组、对象，并使用 tailwind-merge
 * 处理同类 Tailwind 工具类冲突（后者覆盖前者）。
 */
export function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs));
}
