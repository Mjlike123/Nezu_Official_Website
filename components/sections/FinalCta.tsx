import Image from "next/image";
import { Container } from "@/components/ui/Container";
import { Button } from "@/components/ui/Button";
import { AnimateOnScroll } from "@/components/effects/AnimateOnScroll";
import { siteContent } from "@/lib/content";

/**
 * Final CTA banner before footer / about
 * "Your next friend is one text away."
 */
export function FinalCta() {
  const { finalCta } = siteContent;

  return (
    <section className="bg-brand-ink py-8 md:py-[30px]">
      <Container>
        <AnimateOnScroll>
          <div className="relative mx-auto flex min-h-[520px] w-full max-w-[1275px] flex-col items-center justify-center overflow-visible rounded-[80px] px-6 py-20 text-center sm:rounded-[140px] md:min-h-[680px] md:rounded-[300px] md:px-24 md:py-24 lg:min-h-[765px] lg:rounded-[400px] lg:px-[226px]">
            {/* 大照片背景 */}
            <div className="absolute inset-0 overflow-hidden rounded-[80px] sm:rounded-[140px] md:rounded-[300px] lg:rounded-[400px]">
              <Image
                src="/images/cta/friends-hillside.png"
                alt=""
                fill
                sizes="(min-width: 1280px) 1275px, 100vw"
                quality={90}
                className="absolute inset-0 object-cover"
              />
              <div
                className="absolute inset-0 bg-black/20"
                aria-hidden
              />
            </div>
            <Image
              src="/images/cta/pink-paper-plane.png"
              alt=""
              width={578}
              height={445}
              aria-hidden
              className="pointer-events-none absolute left-[-4px] top-[-6px] z-10 w-[195px] max-w-[300px] animate-[banner-float_6s_ease-in-out_infinite] object-contain opacity-95 sm:left-[-5%] sm:w-[44%] md:left-[4%] md:top-[14%] md:w-[28%] md:max-w-[360px] lg:left-[7%] lg:top-[17%] lg:w-[24%]"
            />

            <h2 className="relative z-10 mx-auto max-w-4xl font-display text-[40px] leading-[1.08] font-bold tracking-tight text-white sm:text-[52px] md:text-[60px]">
              {finalCta.title}
            </h2>
            <div className="relative z-10 mt-8 flex w-full max-w-[420px] justify-center">
              <Button
                variant="primary"
                size="lg"
                showArrow
                className="w-full"
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
              >
                {finalCta.cta}
              </Button>
            </div>
            <p className="relative z-10 mt-5 text-center text-[13px] text-white/80">
              Free to start. No app to download.
            </p>
          </div>
        </AnimateOnScroll>
      </Container>
    </section>
  );
}
