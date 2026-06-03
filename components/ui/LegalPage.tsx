"use client";

import Link from "next/link";
import { useEffect, useState } from "react";
import { Container } from "@/components/ui/Container";
import { LogoLockup } from "@/components/brand/LogoMark";
import { cn } from "@/lib/cn";

export type LegalBlock =
  | { type: "paragraph"; text: string }
  | { type: "subheading"; text: string }
  | { type: "list"; items: string[] };

export interface LegalSection {
  title: string;
  paragraphs?: string[];
  bullets?: string[];
  blocks?: LegalBlock[];
}

interface LegalPageProps {
  title: string;
  lastUpdated?: string;
  intro?: string[];
  sections: LegalSection[];
}

export function LegalPage({
  title,
  lastUpdated,
  intro = [],
  sections,
}: LegalPageProps) {
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const updateHeaderTone = () => {
      setScrolled(window.scrollY > 24);
    };

    updateHeaderTone();
    window.addEventListener("scroll", updateHeaderTone, { passive: true });

    return () => {
      window.removeEventListener("scroll", updateHeaderTone);
    };
  }, []);

  const renderBlocks = (section: LegalSection) => {
    if (section.blocks) {
      return section.blocks.map((block, index) => {
        if (block.type === "subheading") {
          return (
            <h3
              key={`${block.text}-${index}`}
              className="pt-2 text-xl font-bold leading-snug text-brand-ink md:text-2xl"
            >
              {block.text}
            </h3>
          );
        }

        if (block.type === "list") {
          return (
            <ul key={`${section.title}-list-${index}`} className="list-disc space-y-2 pl-5">
              {block.items.map((item) => (
                <li key={item}>{item}</li>
              ))}
            </ul>
          );
        }

        return <p key={`${block.text}-${index}`}>{block.text}</p>;
      });
    }

    return (
      <>
        {section.paragraphs?.map((paragraph) => (
          <p key={paragraph}>{paragraph}</p>
        ))}
        {section.bullets ? (
          <ul className="list-disc space-y-2 pl-5">
            {section.bullets.map((item) => (
              <li key={item}>{item}</li>
            ))}
          </ul>
        ) : null}
      </>
    );
  };

  return (
    <main id="page-top" className="min-h-screen bg-brand-ink pb-8 pt-24 text-white md:pb-12 md:pt-28">
      <header className="fixed left-0 right-0 top-3 z-50 pointer-events-none md:top-5">
        <div className="container-page">
          <div
            className={cn(
              "pointer-events-auto flex h-14 items-center justify-between rounded-[40px] border px-4 backdrop-blur-xl transition-all duration-300 ease-[var(--ease-spring)] md:px-6",
              scrolled
                ? "border-black/[0.05] bg-white/95 text-brand-ink shadow-[0_4px_16px_rgba(0,0,0,0.08)]"
                : "border-white/20 bg-white/10 text-white shadow-[0_8px_32px_rgba(0,0,0,0.12)]",
            )}
          >
            <Link href="/" className="flex items-center" aria-label="Back to Nezu home">
              <LogoLockup variant={scrolled ? "color" : "mono-paper"} size={28} />
            </Link>
            <Link
              href="/"
              className={cn(
                "rounded-full border px-4 py-2 text-sm font-semibold transition sm:px-5",
                scrolled
                  ? "border-brand-ink/10 bg-white/70 text-brand-ink hover:bg-brand-ink/5"
                  : "border-white/15 bg-white/[0.08] text-white/80 hover:bg-white/12 hover:text-white",
              )}
            >
              Back home
            </Link>
          </div>
        </div>
      </header>

      <Container>
        <div className="mx-auto max-w-4xl">
          <article className="rounded-[32px] bg-white px-6 py-8 text-brand-ink shadow-card-soft md:px-10 md:py-12">
            <header>
              <h1 className="font-display text-[40px] font-bold leading-tight tracking-tight text-brand-ink md:text-[64px]">
                {title}
              </h1>
              {lastUpdated ? (
                <p className="mt-3 text-sm font-medium text-neutral-500">
                  Last Updated: {lastUpdated}
                </p>
              ) : null}
            </header>

            {intro.length > 0 ? (
              <div className="mt-8 space-y-4 text-base leading-relaxed text-neutral-700 md:text-lg">
                {intro.map((paragraph) => (
                  <p key={paragraph}>{paragraph}</p>
                ))}
              </div>
            ) : null}

            <div className="mt-10 space-y-10">
              {sections.map((section) => (
                <section key={section.title}>
                  <h2 className="font-display text-[28px] font-bold leading-tight tracking-tight text-brand-ink md:text-[36px]">
                    {section.title}
                  </h2>
                  <div className="mt-4 space-y-4 text-base leading-relaxed text-neutral-700 md:text-lg">
                    {renderBlocks(section)}
                  </div>
                </section>
              ))}
            </div>
          </article>
        </div>
      </Container>
    </main>
  );
}
