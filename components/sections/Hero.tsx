"use client";

import Image from "next/image";
import { motion } from "framer-motion";
import { Container } from "@/components/ui/Container";
import { Button } from "@/components/ui/Button";
import { RotatingText } from "@/components/effects/RotatingText";
import { siteContent } from "@/lib/content";

const FADE_UP = {
  hidden: { opacity: 0, y: 28 },
  visible: (i: number = 0) => ({
    opacity: 1,
    y: 0,
    transition: {
      duration: 0.9,
      delay: 0.1 + i * 0.12,
      ease: [0.22, 1, 0.36, 1] as [number, number, number, number],
    },
  }),
};

/**
 * Hero
 * - 暗色照片背景 + 半透明遮罩
 * - 衬线大标题 "Find a [climbing] buddy. Just text us."
 *   "climbing" 用纵向轮播展示更多兴趣类型
 * - 周围漂浮的涂鸦元素（纸飞机、气泡、酒杯）使用 framer-motion 做轻微浮动
 * - 进入页面时所有内容逐层淡入
 */
export function Hero() {
  const { hero } = siteContent;

  return (
    <section
      id="top"
      className="relative isolate min-h-[100svh] overflow-hidden bg-brand-ink bg-cover bg-top text-white"
      style={{
        backgroundImage:
          "linear-gradient(180deg, rgba(0,0,0,0) 0%, rgba(0,0,0,0) 62%, rgba(0,0,0,0.18) 100%), url('/images/hero/hero-people.png')",
      }}
    >
      {/* 漂浮装饰 · 纸飞机（左侧） */}
      <motion.div
        aria-hidden
        initial={{ opacity: 0, x: -20, y: -10 }}
        animate={{ opacity: 1, x: 0, y: 0 }}
        transition={{ duration: 1.1, delay: 0.4, ease: [0.22, 1, 0.36, 1] }}
        className="pointer-events-none absolute left-[4%] top-[34%] hidden h-[180px] w-[240px] md:block lg:left-[8%] lg:h-[230px] lg:w-[300px]"
      >
        <motion.div
          animate={{ y: [0, -10, 0], rotate: [0, 2, 0] }}
          transition={{ duration: 6, repeat: Infinity, ease: "easeInOut" }}
          className="relative h-full w-full"
        >
          <Image
            src="/scribbles/paper-airplane.png"
            alt=""
            fill
            sizes="(min-width: 1024px) 300px, 240px"
            className="object-contain"
          />
        </motion.div>
      </motion.div>

      {/* 漂浮装饰 · 聊天气泡（右侧） */}
      <motion.div
        aria-hidden
        initial={{ opacity: 0, x: 30, y: -10 }}
        animate={{ opacity: 1, x: 0, y: 0 }}
        transition={{ duration: 1.1, delay: 0.55, ease: [0.22, 1, 0.36, 1] }}
        className="pointer-events-none absolute right-[calc(6%_-_49px)] top-[45%] hidden h-[135px] w-[135px] md:block lg:right-[calc(10%_-_49px)] lg:h-[180px] lg:w-[180px]"
      >
        <motion.div
          animate={{ y: [0, -8, 0], rotate: [0, -2, 0] }}
          transition={{
            duration: 7,
            repeat: Infinity,
            ease: "easeInOut",
            delay: 0.5,
          }}
          className="relative h-full w-full"
        >
          <Image
            src="/scribbles/champagne.png"
            alt=""
            fill
            sizes="(min-width: 1024px) 180px, 135px"
            className="object-contain"
          />
        </motion.div>
      </motion.div>

      {/* 漂浮装饰 · 酒杯（中下） */}
      <motion.div
        aria-hidden
        initial={{ opacity: 0, y: 30 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 1.1, delay: 0.7, ease: [0.22, 1, 0.36, 1] }}
        className="pointer-events-none absolute bottom-[calc(20%_-_120px)] left-1/2 hidden h-[120px] w-[140px] -translate-x-1/2 sm:block lg:h-[220px] lg:w-[250px]"
      >
        <motion.div
          animate={{ y: [0, -6, 0], rotate: [0, 3, 0] }}
          transition={{
            duration: 5.5,
            repeat: Infinity,
            ease: "easeInOut",
            delay: 1,
          }}
          className="relative h-full w-full"
        >
          <Image
            src="/scribbles/chat-bubble.png"
            alt=""
            fill
            sizes="(min-width: 1024px) 250px, 140px"
            className="object-contain"
          />
        </motion.div>
      </motion.div>

      {/* 主要内容 */}
      <Container className="relative z-10 flex min-h-[100svh] flex-col items-start justify-start pt-36 pb-20 text-left sm:pt-32 md:items-center md:pt-[180px] md:pb-28 md:text-center lg:pt-[190px]">
        {/* H1 标题，含纵向轮播单词 */}
        <motion.h1
          custom={0}
          initial="hidden"
          animate="visible"
          variants={FADE_UP}
          className="w-full font-display text-[44px] leading-[1.05] tracking-tight drop-shadow-[0_2px_24px_rgba(0,0,0,0.4)] sm:text-[64px] md:w-auto md:text-[80px] lg:text-[100px]"
        >
          {/* Mobile: keep "Find a + rotating word" on one left-aligned line. */}
          <span className="block md:hidden">
            <span className="whitespace-nowrap">
              {hero.leadIn}{" "}
              <RotatingText
                words={hero.rotatingWords}
                interval={3600}
                className="text-brand-yellow"
              />
            </span>
            <span className="block">{hero.trailing}</span>
          </span>

          {/* Desktop/tablet: preserve the original centered composition. */}
          <span className="hidden md:block">
            {hero.leadIn}{" "}
            <RotatingText
              words={hero.rotatingWords}
              interval={3600}
              className="text-brand-yellow"
            />{" "}
            {hero.trailing}
          </span>
          <span className="mt-1 block sm:mt-2">{hero.secondLine}</span>
        </motion.h1>

        {/* 副标题 */}
        <motion.p
          custom={1}
          initial="hidden"
          animate="visible"
          variants={FADE_UP}
          className="mt-6 w-full max-w-[600px] text-base font-medium leading-relaxed text-white/85 sm:mt-8 sm:text-lg md:text-xl"
        >
          {hero.subtitle}
        </motion.p>

        {/* CTA */}
        <motion.div
          custom={2}
          initial="hidden"
          animate="visible"
          variants={FADE_UP}
          className="mt-8 flex w-full max-w-[420px] flex-col items-start gap-4 sm:mt-10 md:items-center"
        >
          <Button
            variant="primary"
            size="lg"
            leftIcon={
              <span className="relative block h-6 w-6 shrink-0">
                <Image
                  src="/images/icons/message-bubble.png"
                  alt=""
                  fill
                  sizes="24px"
                  className="object-contain"
                />
              </span>
            }
            showArrow
            className="w-full"
          >
            {hero.cta}
          </Button>
        </motion.div>

        {/* 底部 footnote */}
        <motion.p
          custom={3}
          initial="hidden"
          animate="visible"
          variants={FADE_UP}
          className="mt-6 w-full text-sm font-medium text-white/70 sm:text-base md:w-auto"
        >
          {hero.footnote}
        </motion.p>

        {/* 滚动提示 */}
        <motion.div
          aria-hidden
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 1.6, duration: 0.8 }}
          className="absolute bottom-6 left-1/2 -translate-x-1/2"
        >
          <motion.div
            animate={{ y: [0, 6, 0] }}
            transition={{ duration: 2, repeat: Infinity, ease: "easeInOut" }}
            className="flex h-10 w-6 items-start justify-center rounded-full border border-white/30 pt-2"
          >
            <div className="h-2 w-1 rounded-full bg-white/60" />
          </motion.div>
        </motion.div>
      </Container>
    </section>
  );
}
