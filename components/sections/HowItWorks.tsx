import Image from "next/image";
import { Container } from "@/components/ui/Container";
import { SectionHeading } from "@/components/ui/SectionHeading";
import {
  AnimateOnScroll,
  StaggerOnScroll,
  StaggerItem,
} from "@/components/effects/AnimateOnScroll";
import { siteContent } from "@/lib/content";

/**
 * 照片旁边的手绘漂浮装饰。
 *
 * wrapperClass 控制每张装饰图的位置和大小：
 * - absolute：相对照片外层定位
 * - -top / -right / -bottom / -left：让图片露在照片边缘外
 * - rotate：轻微旋转，更像随手画上去的贴纸
 */
const FLOATING_SCRIBBLES = [
  {
    src: "/scribbles/cheers.png",
    wrapperClass:
      "-bottom-8 -left-8 h-[110px] w-[150px] rotate-[8deg] lg:-bottom-12 lg:-left-10 lg:h-[140px] lg:w-[190px]",
    animationClass: "animate-[how-it-works-float_6s_ease-in-out_infinite]",
  },
  {
    src: "/scribbles/chat-star-blue.png",
    wrapperClass:
      "-bottom-9 -right-8 h-[96px] w-[108px] rotate-[8deg] lg:-bottom-12 lg:-right-12 lg:h-[128px] lg:w-[144px]",
    animationClass:
      "animate-[how-it-works-float-delayed_7s_ease-in-out_infinite]",
  },
  {
    src: "/scribbles/pink-loop.png",
    wrapperClass:
      "-bottom-12 -right-14 h-[118px] w-[224px] rotate-[3deg] lg:-bottom-18 lg:-right-22 lg:h-[158px] lg:w-[300px]",
    animationClass: "animate-[how-it-works-float_6.5s_ease-in-out_infinite]",
  },
  {
    src: "/scribbles/paper-plane-blue.png",
    wrapperClass:
      "-bottom-8 -right-8 h-[86px] w-[120px] -rotate-[8deg] lg:-bottom-12 lg:-right-14 lg:h-[112px] lg:w-[154px]",
    animationClass:
      "animate-[how-it-works-float-delayed_7.5s_ease-in-out_infinite]",
  },
] as const;

/**
 * How it works section
 * "Send the first text. We'll do the rest."
 * - 4 篇 article 卡片，左右交错图文布局
 * - 右侧/左侧视觉使用真实人物图片，替代数字占位
 */
export function HowItWorks() {
  const { howItWorks } = siteContent;

  return (
    <section
      id="how-it-works"
      className="section-padding bg-brand-blue-soft"
    >
      <Container>
        <AnimateOnScroll>
          <SectionHeading
            eyebrow={howItWorks.eyebrow}
            title={
              <>
                Send the first text.{" "}
                <span className="text-brand-blue">We&apos;ll do the rest.</span>
              </>
            }
            size="lg"
            align="center"
          />
        </AnimateOnScroll>

        <StaggerOnScroll
          className="mt-16 flex flex-col gap-12 md:gap-20 lg:mt-24"
        >
          {howItWorks.steps.map((step, i) => {
            const reverse = i % 2 === 1;
            const scribble = FLOATING_SCRIBBLES[i % FLOATING_SCRIBBLES.length];
            return (
              <StaggerItem
                key={step.id}
                as="article"
                direction={reverse ? "left" : "right"}
                className={
                  "grid grid-cols-1 items-center gap-8 md:gap-16 lg:grid-cols-2"
                }
              >
                {/* 文本 */}
                <div
                  className={
                    reverse ? "lg:order-2 lg:pl-8" : "lg:order-1 lg:pr-8"
                  }
                >
                  <h3 className="font-display text-[32px] font-bold tracking-tight text-brand-ink sm:text-[40px] md:text-[52px]">
                    {step.title}
                  </h3>
                  <p className="mt-4 max-w-md text-base leading-relaxed text-neutral-600 sm:text-lg">
                    {step.body}
                  </p>
                </div>

                {/* 视觉图片 */}
                <div
                  className={
                    reverse
                      ? "relative lg:order-1 lg:pr-8"
                      : "relative lg:order-2 lg:pl-8"
                  }
                >
                  {/* 漂浮装饰图：放在照片外层，所以不会被照片圆角裁掉。 */}
                  <div
                    aria-hidden
                    className={`pointer-events-none absolute z-20 hidden sm:block ${scribble.wrapperClass}`}
                  >
                    <div
                      className={`relative h-full w-full ${scribble.animationClass}`}
                    >
                      <Image
                        src={scribble.src}
                        alt=""
                        fill
                        sizes="(min-width: 1024px) 230px, 170px"
                        className="object-contain"
                      />
                    </div>
                  </div>

                  <div className="relative z-10 aspect-[5/4] w-full overflow-hidden rounded-card bg-white shadow-card-soft">
                    <Image
                      src={step.image}
                      alt={step.imageAlt}
                      fill
                      sizes="(min-width: 1024px) 500px, 100vw"
                      className="object-cover transition-transform duration-700 ease-[var(--ease-spring)] hover:scale-[1.03]"
                    />
                  </div>
                </div>
              </StaggerItem>
            );
          })}
        </StaggerOnScroll>
      </Container>
    </section>
  );
}
