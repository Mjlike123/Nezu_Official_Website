"use client";

import Image from "next/image";
import { Container } from "@/components/ui/Container";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { CountUp } from "@/components/effects/CountUp";
import {
  AnimateOnScroll,
  StaggerOnScroll,
  StaggerItem,
} from "@/components/effects/AnimateOnScroll";
import { siteContent } from "@/lib/content";

/**
 * It's already working.
 * - 3 个核心数据，进入视口时滚动到目标值
 * - 数据卡片下方放 3 条用户故事 / testimonial
 */
export function Stats() {
  const { stats } = siteContent;

  return (
    <section className="section-padding bg-brand-blue-soft">
      <Container>
        <AnimateOnScroll>
          <SectionHeading
            eyebrow={stats.eyebrow}
            title={
              <>
                It&apos;s already <span className="text-brand-blue">working.</span>
              </>
            }
            size="lg"
          />
        </AnimateOnScroll>

        {/* 数据卡片 */}
        <AnimateOnScroll delay={0.1}>
          <div className="mx-auto mt-12 grid w-full grid-cols-1 overflow-hidden rounded-card bg-white shadow-card-soft sm:grid-cols-3 lg:mt-16">
            {stats.items.map((item) => (
              <div
                key={item.label}
                className="flex flex-col items-center justify-center bg-white px-6 py-10 sm:py-12"
              >
                <div className="font-sans text-[44px] leading-none font-bold tracking-tight text-brand-ink sm:text-[56px] md:text-[64px]">
                  <CountUp
                    to={item.value}
                    suffix={item.suffix}
                    duration={2.2}
                  />
                </div>
                <div className="mt-3 text-sm font-medium text-neutral-500 sm:text-base">
                  {item.label}
                </div>
              </div>
            ))}
          </div>
        </AnimateOnScroll>

        {/* Testimonials */}
        <StaggerOnScroll
          className="mt-12 grid grid-cols-1 gap-5 md:mt-16 md:grid-cols-3"
        >
          {stats.testimonials.map((t, i) => {
            const tones = [
              "bg-[#CCF9FF]",
              "bg-[#FFF9CC]",
              "bg-[#F5C9FD]",
            ];
            return (
              <StaggerItem
                key={i}
                as="article"
                className={`rounded-card p-6 ${tones[i % 3]}`}
              >
                <p className="text-[15px] leading-relaxed text-brand-ink sm:text-base">
                  {t.quote}
                </p>
                <div className="mt-6 flex items-center gap-3">
                  <Image
                    src={t.avatar}
                    alt=""
                    width={40}
                    height={40}
                    className="h-10 w-10 rounded-full object-contain"
                  />
                  <span className="text-sm font-medium text-brand-ink">
                    {t.name}
                  </span>
                </div>
              </StaggerItem>
            );
          })}
        </StaggerOnScroll>
      </Container>
    </section>
  );
}
