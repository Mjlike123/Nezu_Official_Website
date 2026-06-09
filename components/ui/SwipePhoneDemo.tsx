"use client";

import Image from "next/image";
import { animate, motion, useMotionValue, useTransform } from "framer-motion";
import { useState } from "react";

const swipeCards = [
  {
    src: "/images/swipe-demo/poster-andrew.png",
    alt: "Poster card for Andrew Roberts.",
  },
  {
    src: "/images/swipe-demo/poster-emma.png",
    alt: "Poster card for Emma.",
  },
  {
    src: "/images/swipe-demo/poster-christopher.png",
    alt: "Poster card for Christopher.",
  },
  {
    src: "/images/swipe-demo/poster-olivia.png",
    alt: "Poster card for Olivia Thomas.",
  },
];

function getWrappedCard(index: number) {
  return swipeCards[((index % swipeCards.length) + swipeCards.length) % swipeCards.length];
}

/**
 * iMessage phone mock + Tinder-like swipe deck.
 *
 * 可调参数：
 * - SWIPE_THRESHOLD：拖动超过多少 px 后飞出并切下一张
 * - card box 的 top/width：控制 154:228 海报卡片在手机屏里的位置和大小
 * - x/rotate transform：控制拖拽时旋转幅度
 */
export function SwipePhoneDemo() {
  const [index, setIndex] = useState(0);
  const [isAnimatingOut, setIsAnimatingOut] = useState(false);
  const x = useMotionValue(0);
  const rotate = useTransform(x, [-160, 0, 160], [-10, 0, 10]);

  const SWIPE_THRESHOLD = 90;

  const handleDragEnd = () => {
    const latestX = x.get();

    if (Math.abs(latestX) < SWIPE_THRESHOLD) {
      animate(x, 0, {
        type: "spring",
        stiffness: 420,
        damping: 32,
      });
      return;
    }

    const direction = latestX > 0 ? 1 : -1;
    setIsAnimatingOut(true);

    animate(x, direction * 360, {
      duration: 0.36,
      ease: [0.22, 1, 0.36, 1],
    }).then(() => {
      setIndex((current) => current + 1);
      x.set(0);
      setIsAnimatingOut(false);
    });
  };

  const topCard = getWrappedCard(index);
  const backCards = [2, 1].map((offset) => getWrappedCard(index + offset));

  return (
    <div className="relative mx-auto w-full max-w-[360px] sm:max-w-[400px]">
      <div className="relative mx-auto aspect-[462/1000] w-full">
        <div
          aria-hidden
          className="pointer-events-none absolute size-px overflow-hidden opacity-0"
        >
          {swipeCards.map((card) => (
            <Image
              key={`preload-${card.src}`}
              src={card.src}
              alt=""
              width={230}
              height={340}
              sizes="230px"
              loading="eager"
            />
          ))}
        </div>

        <Image
          src="/images/swipe-demo/iphone-imessage.png"
          alt="A Nezu iMessage conversation mockup."
          fill
          sizes="(min-width: 1024px) 400px, 90vw"
          priority={false}
          className="object-contain"
        />

        {/* Swipe deck overlays the blank area of the iMessage screen. */}
        <div className="absolute left-[140px] top-[340px] z-0 aspect-[154/228] w-[220px] -translate-x-1/2 sm:top-[370px]">
          {backCards.map((card, offsetIndex) => {
            const depth = backCards.length - offsetIndex;
            const targetScale = 1 - depth * 0.035;
            return (
              <motion.div
                key={`${card.src}-${depth}`}
                initial={{
                  y: depth * 16,
                  scale: targetScale - 0.08,
                  opacity: 0.42,
                }}
                animate={{
                  y: depth * 9,
                  scale: targetScale,
                  opacity: 1 - depth * 0.16,
                }}
                transition={{
                  type: "spring",
                  stiffness: 260,
                  damping: 26,
                  mass: 0.9,
                }}
                className="absolute inset-0 overflow-hidden rounded-[22px] bg-brand-blue-soft shadow-[0_10px_28px_rgba(6,26,64,0.16)]"
              >
                <Image
                  src={card.src}
                  alt=""
                  fill
                  sizes="230px"
                  loading="eager"
                  className="object-cover"
                />
              </motion.div>
            );
          })}

          <motion.div
            key={topCard.src}
            drag="x"
            dragConstraints={{ left: 0, right: 0 }}
            dragElastic={0.85}
            onDragEnd={handleDragEnd}
            initial={{ y: 18, scale: 0.94, opacity: 0.86 }}
            animate={{ y: 0, scale: 1, opacity: 1 }}
            transition={{
              type: "spring",
              stiffness: 300,
              damping: 28,
              mass: 0.9,
            }}
            style={{ x, rotate }}
            className="absolute -left-[7px] -top-px bottom-0 right-0 cursor-grab overflow-hidden rounded-[22px] bg-brand-blue-soft shadow-[0_16px_40px_rgba(6,26,64,0.22)] active:cursor-grabbing"
          >
            <Image
              src={topCard.src}
              alt={topCard.alt}
              fill
              sizes="230px"
              loading="eager"
              className="object-cover"
              draggable={false}
            />

          </motion.div>
        </div>

        <motion.div
          aria-hidden
          animate={{ y: [0, -8, 0], x: [0, 4, 0], rotate: [-4, -7, -4] }}
          transition={{ duration: 6.5, repeat: Infinity, ease: "easeInOut" }}
          className="pointer-events-none absolute bottom-[21%] right-[-8%] z-20 w-[34%]"
        >
          <Image
            src="/images/swipe-demo/blue-arrow.png"
            alt=""
            width={150}
            height={121}
            className="h-auto w-full"
          />
        </motion.div>
      </div>

      <div className="mt-3 text-center text-[13px] font-medium text-brand-ink/55">
        Drag the card left or right
      </div>

      <button
        type="button"
        aria-label="Show next intro card"
        onClick={() => {
          if (isAnimatingOut) return;
          setIndex((current) => current + 1);
        }}
        className="mx-auto mt-3 block rounded-full bg-white/70 px-4 py-2 text-[12px] font-semibold text-brand-blue shadow-card-soft transition hover:bg-white"
      >
        Preview next
      </button>
    </div>
  );
}
