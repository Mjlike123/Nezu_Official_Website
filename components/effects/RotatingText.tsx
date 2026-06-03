"use client";

import { AnimatePresence, motion } from "framer-motion";
import { useEffect, useState } from "react";
import { cn } from "@/lib/cn";

interface RotatingTextProps {
  words: readonly string[];
  /**
   * 单词切换间隔（毫秒）
   * - 数值越小：切换越快
   * - 数值越大：每个词停留越久
   * - 例：1800 偏快 / 2200 当前默认 / 3000 更慢更稳
   */
  interval?: number;
  /**
   * 单个字母从进入到稳定的动画时长（秒）
   * - 数值越小：字母更干脆
   * - 数值越大：字母更丝滑、更慢
   * - 注意：整词总时长还会叠加下面的 staggerChildren 错帧延迟
   */
  duration?: number;
  /** 外部传入的 className，通常用来控制颜色，例如 text-brand-yellow */
  className?: string;
}

/**
 * 纵向轮播文字
 * - 用最长单词预留宽度，避免布局抖动
 * - 每个字母错帧从下进入、向上退出
 * - 给 descender（g / y / j）预留底部空间，避免裁切
 * - 自动尊重 prefers-reduced-motion
 */
export function RotatingText({
  words,
  // 每个词停留 4.4 秒后切到下一个词。
  interval = 10000,
  // 单个字母进入动画 1.05 秒。你可以先调这个，最影响“慢/快”的体感。
  duration = 1.05,
  className,
}: RotatingTextProps) {
  const [index, setIndex] = useState(0);

  useEffect(() => {
    if (words.length <= 1) return;
    const id = setInterval(() => {
      setIndex((i) => (i + 1) % words.length);
    }, interval);
    return () => clearInterval(id);
  }, [words.length, interval]);

  const longest = words.reduce(
    (acc, w) => (w.length > acc.length ? w : acc),
    "",
  );
  // 热更新或手动删减 words 时，旧 index 可能超过新数组长度。
  // 这里不主动 setState，只用 fallback 避免 currentWord 变成 undefined 后 split 报错。
  const currentWord = words[index] ?? words[0] ?? "";

  return (
    <span
      className={cn(
        "inline-flex items-baseline gap-[0.06em] align-baseline",
        className,
      )}
      aria-live="polite"
    >
      <span aria-hidden className="select-none">
        [
      </span>
      <span
        className={cn(
          // pb / pt / -mb 是为了给 g、y、j 这种下伸字母留空间。
          // 如果字母还被裁切：增大 pb-[0.18em]，例如 pb-[0.24em]。
          // 如果文字整体看起来偏低：调 top-[0.04em] 或 -mb 的值。
          "relative inline-block overflow-hidden align-baseline pb-[0.18em] pt-[0.04em] -mb-[0.18em]",
        )}
      >
        {/* 占位用最长单词预留宽度，inert/不可见 */}
        <span
          aria-hidden
          className="invisible block whitespace-nowrap select-none"
        >
          {longest}
        </span>
        {/* mode="sync" 让新词在旧词退出的同时开始进入，避免 wait 模式造成明显留空。 */}
        <AnimatePresence mode="sync" initial={false}>
          <motion.span
            key={currentWord}
            aria-hidden
            initial="hidden"
            animate="visible"
            exit="exit"
            variants={{
              hidden: {},
              visible: {
                transition: {
                  // 字母进入错帧间隔（秒）。
                  // 数值越大：字母一个个出来的感觉越明显。
                  // 数值越小：更接近整词一起出来。
                  staggerChildren: 0.042,
                  // 整个单词开始进入前的等待时间（秒）。
                  // 通常保持很小，避免切换后空太久。
                  delayChildren: 0.03,
                },
              },
              exit: {
                transition: {
                  // 字母退出错帧间隔（秒）。
                  // 这里比进入快很多，让旧词更快让位给新词，减少两个词之间的空窗。
                  staggerChildren: 0.015,
                  // -1 表示从最后一个字母开始退出。
                  // 改成 1 则从第一个字母开始退出。
                  staggerDirection: -1,
                },
              },
            }}
            // 全端 justify-center：让当前词在最长单词预留宽度内居中。
            // top 用来和外层 pt/pb 对齐。
            // 如果字母竖向位置不对，优先微调这里，例如 top-[0.02em] / top-[0.08em]。
            className="absolute inset-x-0 top-[0.04em] flex justify-center whitespace-nowrap will-change-transform"
          >
            {currentWord.split("").map((char, charIndex) => (
              <motion.span
                key={`${currentWord}-${char}-${charIndex}`}
                variants={{
                  hidden: {
                    // 进入起点：字母从下方 105% 位置出现。
                    // 增大到 120%：滑入距离更长；减小到 70%：更克制。
                    y: "105%",
                    // 进入前透明度。
                    opacity: 0,
                    // 进入前轻微旋转角度（度）。
                    // 设为 0 可以去掉字母的摇摆感。
                    rotate: 4,
                    // 进入前模糊。设为 blur(0px) 可以去掉模糊感。
                    filter: "blur(2px)",
                  },
                  visible: {
                    // 稳定位置：0% 表示回到正常基线。
                    y: "0%",
                    opacity: 1,
                    rotate: 0,
                    filter: "blur(0px)",
                    transition: {
                      // 单个字母进入动画时长，来自组件参数 duration。
                      duration,
                      // 进入缓动曲线：前快后慢，有弹性感但不夸张。
                      // 想更干脆可改为 [0.4, 0, 0.2, 1]。
                      ease: [0.22, 1, 0.36, 1],
                    },
                  },
                  exit: {
                    // 退出终点：字母向上离开 70%。
                    // 绝对值越大，向上飞得越远。
                    y: "-70%",
                    opacity: 0,
                    // 退出时轻微反向旋转。设为 0 更稳。
                    rotate: -1,
                    // 退出时轻微模糊。
                    filter: "blur(1px)",
                    transition: {
                      // 退出动画时长 = 进入时长的 45%，让新词能紧跟着出现。
                      // 如果仍觉得有空窗：继续减小到 duration * 0.3。
                      // 如果觉得太急：增大到 duration * 0.6。
                      duration: duration * 0.45,
                      // 退出缓动曲线：更快离场。
                      ease: [0.55, 0, 0.1, 1],
                    },
                  },
                }}
                // inline-block 是关键：每个字母都要能独立做 transform。
                className="inline-block will-change-transform"
              >
                {char === " " ? "\u00A0" : char}
              </motion.span>
            ))}
          </motion.span>
        </AnimatePresence>
        <span className="sr-only">{currentWord}</span>
      </span>
      <span aria-hidden className="select-none">
        ]
      </span>
    </span>
  );
}
