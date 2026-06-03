"use client";

import {
  animate,
  motion,
  useInView,
  useMotionValue,
  useTransform,
} from "framer-motion";
import { useEffect, useRef } from "react";
import { cn } from "@/lib/cn";

interface CountUpProps {
  /** 目标值 */
  to: number;
  /** 起始值，默认 0 */
  from?: number;
  /** 持续时间（s），默认 2 */
  duration?: number;
  /** 小数位，默认 0 */
  decimals?: number;
  /** 是否使用千分位分隔符，默认 true */
  thousandsSeparator?: boolean;
  /** 数字前缀，例如 "$" */
  prefix?: string;
  /** 数字后缀，例如 "%" 或 " days" */
  suffix?: string;
  className?: string;
}

/**
 * 数字滚动入场动画
 * - 仅在元素进入视口时才触发（once）
 * - 数字本身平滑 ease-out，到目标值后保持显示
 * - 进入时叠加 iOS 风格的 blur + fade + 轻微上移，让数字像从系统滚轮里清晰出来
 * - 自动添加千分位分隔符，支持前/后缀
 */
export function CountUp({
  to,
  from = 0,
  duration = 2,
  decimals = 0,
  thousandsSeparator = true,
  prefix = "",
  suffix = "",
  className,
}: CountUpProps) {
  const ref = useRef<HTMLSpanElement>(null);
  const inView = useInView(ref, { once: true, amount: 0.4 });
  const motionValue = useMotionValue(from);
  const clarity = useMotionValue(0);

  const formatted = useTransform(motionValue, (latest) => {
    const fixed = decimals > 0 ? latest.toFixed(decimals) : Math.round(latest).toString();
    if (!thousandsSeparator) return `${prefix}${fixed}${suffix}`;
    const [intPart, decPart] = fixed.split(".");
    const withCommas = intPart.replace(/\B(?=(\d{3})+(?!\d))/g, ",");
    return `${prefix}${withCommas}${decPart ? `.${decPart}` : ""}${suffix}`;
  });

  const opacity = useTransform(clarity, [0, 0.35, 1], [0, 0.65, 1]);
  const y = useTransform(clarity, [0, 1], [14, 0]);
  const filter = useTransform(
    clarity,
    [0, 0.45, 1],
    ["blur(12px)", "blur(5px)", "blur(0px)"],
  );
  const scale = useTransform(clarity, [0, 1], [0.98, 1]);

  useEffect(() => {
    if (!inView) return;
    const numberControls = animate(motionValue, to, {
      duration,
      ease: [0.22, 1, 0.36, 1],
    });
    const clarityControls = animate(clarity, 1, {
      duration: Math.min(duration * 0.75, 1.6),
      ease: [0.22, 1, 0.36, 1],
    });
    return () => {
      numberControls.stop();
      clarityControls.stop();
    };
  }, [inView, motionValue, clarity, to, duration]);

  return (
    <motion.span
      ref={ref}
      className={cn("inline-block tabular-nums will-change-transform", className)}
      style={{ opacity, y, filter, scale }}
    >
      {formatted}
    </motion.span>
  );
}
