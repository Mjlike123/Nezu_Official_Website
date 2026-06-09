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
 * 对比 Nezu vs 其他社交 app
 * "There's a better way."
 */
export function Comparison() {
  const { comparison } = siteContent;

  return (
    <section
      id="why-nezu"
      className="section-padding bg-brand-blue-soft"
    >
      <Container>
        <AnimateOnScroll>
          <SectionHeading
            eyebrow={comparison.eyebrow}
            title={
              <>
                There&apos;s a <span className="text-brand-blue">better way.</span>
              </>
            }
            size="lg"
          />
        </AnimateOnScroll>

        <div className="mt-12 grid grid-cols-1 gap-5 md:mt-16 md:grid-cols-2">
          {/* Nezu */}
          <AnimateOnScroll direction="right">
            <div className="h-full rounded-card bg-brand-blue p-8 text-white shadow-card-soft md:p-10">
              <h3 className="font-display text-[40px] font-bold tracking-tight text-brand-yellow md:text-[48px]">
                {comparison.nezu.title}
              </h3>
              <ul className="mt-8 space-y-4">
                {comparison.nezu.points.map((point) => (
                  <li key={point} className="flex items-start gap-3">
                    <span className="relative mt-0.5 block h-6 w-6 shrink-0">
                      <Image
                        src="/images/icons/check.png"
                        alt=""
                        fill
                        sizes="24px"
                        className="object-contain"
                      />
                    </span>
                    <span className="text-base font-medium md:text-[17px]">
                      {point}
                    </span>
                  </li>
                ))}
              </ul>
            </div>
          </AnimateOnScroll>

          {/* Others */}
          <AnimateOnScroll direction="left" delay={0.1}>
            <div className="h-full rounded-card bg-white p-8 text-brand-ink shadow-card-soft md:p-10">
              <h3 className="font-display text-[40px] font-bold tracking-tight text-neutral-400 md:text-[48px]">
                {comparison.others.title}
              </h3>
              <ul className="mt-8 space-y-4">
                {comparison.others.points.map((point) => (
                  <li key={point} className="flex items-start gap-3">
                    <span className="relative mt-0.5 block h-6 w-6 shrink-0">
                      <Image
                        src="/images/icons/x.png"
                        alt=""
                        fill
                        sizes="24px"
                        className="object-contain"
                      />
                    </span>
                    <span className="text-base font-medium text-neutral-600 md:text-[17px]">
                      {point}
                    </span>
                  </li>
                ))}
              </ul>
            </div>
          </AnimateOnScroll>
        </div>
      </Container>
    </section>
  );
}
