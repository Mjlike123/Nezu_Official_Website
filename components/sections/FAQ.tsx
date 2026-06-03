import { Container } from "@/components/ui/Container";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { Accordion } from "@/components/ui/Accordion";
import { AnimateOnScroll } from "@/components/effects/AnimateOnScroll";
import { siteContent } from "@/lib/content";

export function FAQ() {
  const { faq } = siteContent;

  return (
    <section id="faq" className="section-padding bg-surface-cream">
      <Container>
        <AnimateOnScroll>
          <SectionHeading
            eyebrow={faq.eyebrow}
            title={faq.title}
            size="lg"
          />
        </AnimateOnScroll>
        <AnimateOnScroll delay={0.15}>
          <div className="mx-auto mt-12 max-w-3xl lg:mt-16">
            <Accordion items={faq.items} />
          </div>
        </AnimateOnScroll>
      </Container>
    </section>
  );
}
