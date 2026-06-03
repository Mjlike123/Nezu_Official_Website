import Image from "next/image";
import { Container } from "@/components/ui/Container";
import { AnimateOnScroll } from "@/components/effects/AnimateOnScroll";

/**
 * 蓝色横幅
 * "Making friends is a full-time job. So we took it."
 * - 位于 How it works 和 Stats 之间
 */
export function Banner() {
  return (
    <section className="overflow-visible bg-brand-blue-soft pb-12 md:pb-20">
      <Container className="overflow-visible">
        <AnimateOnScroll>
          <div className="relative overflow-visible rounded-[40px] bg-brand-blue px-6 py-12 text-center md:px-16 md:py-[46px]">
            {/* 左侧浮动 Nezu 气泡图标 */}
            <div
              aria-hidden
              className="pointer-events-none absolute -left-3 -top-6 z-30 h-[74px] w-[100px] -rotate-[15deg] animate-[banner-float_6s_ease-in-out_infinite] sm:-left-4 sm:-top-8 sm:h-[92px] sm:w-[125px]"
            >
              <Image
                src="/images/banner/nezu-bubble-mark.png"
                alt=""
                fill
                sizes="125px"
                className="object-contain"
              />
            </div>

            {/* 右侧浮动黄色曲线 */}
            <div
              aria-hidden
              className="pointer-events-none absolute -right-6 -bottom-6 z-30 h-[88px] w-[200px] animate-[banner-float-delayed_7s_ease-in-out_infinite] sm:-right-10 sm:-bottom-8 sm:h-[131px] sm:w-[298px]"
            >
              <Image
                src="/images/banner/yellow-swoosh.png"
                alt=""
                fill
                sizes="298px"
                className="object-contain"
              />
            </div>

            <h3 className="relative z-20 mx-auto max-w-3xl font-display text-[28px] leading-[1.15] font-bold tracking-tight text-white sm:text-[40px] md:text-[52px]">
              Making friends is a{" "}
              <span className="text-brand-yellow">full-time job.</span>
              <br />
              So <span className="text-brand-yellow">we took it.</span>
            </h3>
            <p className="relative z-20 mt-5 text-center text-[20px] font-normal leading-normal text-white">
              — Nezu manifesto
            </p>
          </div>
        </AnimateOnScroll>
      </Container>
    </section>
  );
}
