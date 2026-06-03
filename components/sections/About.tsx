import Image from "next/image";
import { Container } from "@/components/ui/Container";
import { CopyEmailButton } from "@/components/ui/CopyEmailButton";
import { AnimateOnScroll } from "@/components/effects/AnimateOnScroll";
import { siteContent } from "@/lib/content";

export function About() {
  const { about } = siteContent;

  return (
    <section
      id="about"
      className="bg-brand-ink py-[30px] text-white"
    >
      <Container>
        <div className="mx-auto grid min-h-[388px] w-full max-w-[1275px] grid-cols-1 items-center justify-center gap-10 rounded-[40px] py-10 md:grid-cols-2 md:py-0">
          <AnimateOnScroll>
            <div className="max-w-[618px] text-white">
              <h2 className="font-display text-[42px] font-bold leading-none tracking-[-0.02em] text-white sm:text-[52px] md:text-[60px]">
                {about.title}
              </h2>
              <div className="mt-5 space-y-0 text-[14px] leading-normal text-white md:text-[16px] lg:text-[18px]">
                {about.body.split("\n\n").map((paragraph) => (
                  <p key={paragraph}>{paragraph}</p>
                ))}
              </div>
            </div>
          </AnimateOnScroll>

          <AnimateOnScroll delay={0.15}>
            <div
              className="mx-auto flex w-full max-w-[618px] flex-col items-center gap-6 rounded-[24px] bg-[#2197FE] px-8 py-10 text-center transition-transform duration-300 ease-[var(--ease-spring)] hover:-translate-y-1 focus-visible:outline-white md:ml-auto md:px-5"
            >
              <Image
                src="/images/about/contact-faces.png"
                alt=""
                width={178}
                height={64}
                className="h-16 w-[178px] object-contain"
              />
              <div className="flex w-full flex-col items-center">
                <div className="flex w-full flex-col gap-2 text-center font-semibold leading-normal text-brand-yellow">
                  <p className="text-[18px]">{about.contact.label}</p>
                  <CopyEmailButton
                    email={about.contact.email}
                    className="break-all text-[clamp(18px,6vw,26px)] md:text-[30px]"
                  />
                </div>
                <div className="mt-[18px] flex w-full flex-col gap-2 text-center text-[16px] font-medium leading-normal text-white md:text-[18px]">
                  <p>
                    Tell us what you&apos;re working on. We actually read these.
                  </p>
                  <p>Usually replies within 48h</p>
                </div>
              </div>
            </div>
          </AnimateOnScroll>
        </div>
      </Container>
    </section>
  );
}
