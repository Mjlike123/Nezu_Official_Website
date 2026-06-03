import Image from "next/image";
import { Container } from "@/components/ui/Container";
import {
  AnimateOnScroll,
  StaggerOnScroll,
  StaggerItem,
} from "@/components/effects/AnimateOnScroll";
import { SwipePhoneDemo } from "@/components/ui/SwipePhoneDemo";
import { siteContent } from "@/lib/content";
import meetHighFiveImage from "@/public/images/see-it/meet-high-five.png";

/**
 * See it section
 * "Nezu doesn't send profiles. It sends a person."
 * - 左文案 + 右手机 mock（模拟 iMessage 内的 Tinder-like 划卡交互）
 * - 下方三个 proof 卡片（用真实故事 + 图片占位）
 */
export function SeeIt() {
  const { seeIt } = siteContent;

  return (
    <section id="see-it" className="section-padding bg-brand-blue-soft">
      <Container>
        <AnimateOnScroll>
          <div className="grid grid-cols-1 items-center gap-12 lg:grid-cols-2 lg:gap-16">
            <div>
              <h2 className="font-display text-[40px] font-bold leading-[1.16] tracking-[-0.01em] text-brand-ink sm:text-[52px] md:text-[64px]">
                Nezu doesn’t show you profiles.
                <br />
                It introduces you to{" "}
                <span className="text-brand-blue">someone real.</span>
              </h2>
              <p className="mt-6 max-w-md text-base leading-relaxed text-neutral-600 md:text-lg">
                {seeIt.body}
              </p>
            </div>

            <SwipePhoneDemo />
          </div>
        </AnimateOnScroll>

        {/* Proof 卡片 */}
        <StaggerOnScroll
          className="mt-16 grid grid-cols-1 gap-5 md:grid-cols-3 lg:mt-20"
        >
          {seeIt.proofs.map((proof, i) => (
            <StaggerItem
              key={i}
              as="article"
              className="flex flex-col items-center gap-6 rounded-[24px] px-0 py-[30px] text-center"
            >
              <div className="relative h-[220px] w-full max-w-[420px] overflow-hidden md:h-[240px]">
                <Image
                  src={
                    proof.image === "/images/see-it/meet-high-five.png"
                      ? meetHighFiveImage
                      : proof.image
                  }
                  alt={proof.imageAlt}
                  fill
                  sizes="(min-width: 768px) 33vw, 100vw"
                  className="object-contain transition-transform duration-700 ease-[var(--ease-spring)] hover:scale-[1.03]"
                />
              </div>
              <div>
                <h4 className="text-center text-[18px] font-medium leading-normal text-brand-ink">
                  {proof.title}
                </h4>
                {proof.body ? (
                  <p className="mt-2 text-sm leading-relaxed text-neutral-600">
                    {proof.body}
                  </p>
                ) : null}
              </div>
            </StaggerItem>
          ))}
        </StaggerOnScroll>
      </Container>
    </section>
  );
}
