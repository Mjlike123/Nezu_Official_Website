"use client";

import { motion, type Variants } from "framer-motion";
import type { ReactNode } from "react";
import { cn } from "@/lib/cn";

type Direction = "up" | "down" | "left" | "right" | "fade";

interface AnimateOnScrollProps {
  children: ReactNode;
  /** 入场方向，默认 'up' */
  direction?: Direction;
  /** 起始位移距离（px），默认 32 */
  distance?: number;
  /** 延迟（s） */
  delay?: number;
  /** 持续时间（s），默认 0.8 */
  duration?: number;
  /** 触发时的可见百分比（0-1），默认 0.2 */
  threshold?: number;
  /** 是否只触发一次，默认 true */
  once?: boolean;
  /** 是否作为 inline 元素 */
  as?: "div" | "span" | "section" | "article" | "li";
  className?: string;
}

/**
 * 滚动入场动画包裹器
 * - 默认 up 方向：从下方 32px 滑入 + 淡入
 * - 用 framer-motion 的 whileInView，性能比 IntersectionObserver 手写好
 * - 尊重 prefers-reduced-motion（globals.css 已统一关闭）
 */
export function AnimateOnScroll({
  children,
  direction = "up",
  distance = 32,
  delay = 0,
  duration = 0.8,
  threshold = 0.2,
  once = true,
  as = "div",
  className,
}: AnimateOnScrollProps) {
  const offset = {
    up: { y: distance, x: 0 },
    down: { y: -distance, x: 0 },
    left: { x: distance, y: 0 },
    right: { x: -distance, y: 0 },
    fade: { x: 0, y: 0 },
  }[direction];

  const variants: Variants = {
    hidden: { opacity: 0, ...offset },
    visible: {
      opacity: 1,
      x: 0,
      y: 0,
      transition: {
        duration,
        delay,
        ease: [0.22, 1, 0.36, 1],
      },
    },
  };

  const MotionTag = motion[as] as typeof motion.div;

  return (
    <MotionTag
      initial="hidden"
      whileInView="visible"
      viewport={{ once, amount: threshold }}
      variants={variants}
      className={cn(className)}
    >
      {children}
    </MotionTag>
  );
}

/**
 * 用于 stagger 子元素的容器
 */
export function StaggerOnScroll({
  children,
  staggerDelay = 0.12,
  delayChildren = 0.1,
  threshold = 0.2,
  once = true,
  className,
}: {
  children: ReactNode;
  staggerDelay?: number;
  delayChildren?: number;
  threshold?: number;
  once?: boolean;
  className?: string;
}) {
  return (
    <motion.div
      initial="hidden"
      whileInView="visible"
      viewport={{ once, amount: threshold }}
      variants={{
        hidden: {},
        visible: {
          transition: {
            staggerChildren: staggerDelay,
            delayChildren,
          },
        },
      }}
      className={cn(className)}
    >
      {children}
    </motion.div>
  );
}

/**
 * 配合 StaggerOnScroll 使用的子元素
 */
export function StaggerItem({
  children,
  direction = "up",
  distance = 24,
  duration = 0.7,
  className,
  as = "div",
}: {
  children: ReactNode;
  direction?: Direction;
  distance?: number;
  duration?: number;
  className?: string;
  as?: "div" | "span" | "li" | "article";
}) {
  const offset = {
    up: { y: distance, x: 0 },
    down: { y: -distance, x: 0 },
    left: { x: distance, y: 0 },
    right: { x: -distance, y: 0 },
    fade: { x: 0, y: 0 },
  }[direction];

  const MotionTag = motion[as] as typeof motion.div;

  return (
    <MotionTag
      variants={{
        hidden: { opacity: 0, ...offset },
        visible: {
          opacity: 1,
          x: 0,
          y: 0,
          transition: { duration, ease: [0.22, 1, 0.36, 1] },
        },
      }}
      className={cn(className)}
    >
      {children}
    </MotionTag>
  );
}
