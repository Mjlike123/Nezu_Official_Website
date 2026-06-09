import Link from "next/link";
import { Container } from "@/components/ui/Container";
import { Button } from "@/components/ui/Button";
import { LogoMark, LogoLockup } from "@/components/brand/LogoMark";
import { RotatingText } from "@/components/effects/RotatingText";
import { CountUp } from "@/components/effects/CountUp";
import { Accordion } from "@/components/ui/Accordion";
import { SectionHeading } from "@/components/ui/SectionHeading";

export const metadata = {
  title: "Design System · Styleguide",
};

const palette = [
  { name: "brand-blue", value: "#0088ff" },
  { name: "brand-blue-hover", value: "#0073d9" },
  { name: "brand-blue-soft", value: "#d7eff6" },
  { name: "brand-yellow", value: "#ffe600" },
  { name: "brand-yellow-warm", value: "#ffe66d" },
  { name: "brand-neon", value: "#32fffa" },
  { name: "brand-coral", value: "#ff5a3d" },
  { name: "brand-ink", value: "#111111" },
  { name: "brand-room-ink", value: "#061a40" },
  { name: "surface-paper", value: "#ffffff", border: true },
  { name: "surface-cream", value: "#fbfbfa", border: true },
  { name: "surface-mist", value: "#f6f7fb", border: true },
  { name: "success", value: "#34c759" },
  { name: "warning", value: "#ff9500" },
  { name: "danger", value: "#ff3b30" },
];

const radius = [
  { name: "xs", value: 4 },
  { name: "sm", value: 8 },
  { name: "md", value: 12 },
  { name: "lg", value: 18 },
  { name: "xl", value: 24 },
  { name: "bubble", value: 28 },
  { name: "card", value: 32 },
  { name: "pill", value: 50 },
];

const shadows = [
  { name: "card-soft", className: "shadow-card-soft" },
  { name: "card-lift", className: "shadow-card-lift" },
  { name: "image-soft", className: "shadow-image-soft" },
];

export default function Styleguide() {
  return (
    <main className="min-h-dvh bg-surface-cream pb-32">
      {/* Header */}
      <header className="border-b border-neutral-200 bg-white">
        <Container className="flex items-center justify-between py-6">
          <LogoLockup />
          <Link
            href="/"
            className="text-sm font-medium text-neutral-600 hover:text-brand-blue"
          >
            ← Back to Home
          </Link>
        </Container>
      </header>

      <Container className="pt-16">
        <h1 className="font-display text-[48px] font-bold leading-tight tracking-tight text-brand-ink md:text-[64px]">
          Nezu Design System
        </h1>
        <p className="mt-4 max-w-2xl text-base text-neutral-600 md:text-lg">
          Live token preview for colors, typography, radii, shadows, components,
          and motion. Used as a single source of truth for engineering &amp; design.
        </p>
      </Container>

      {/* COLORS */}
      <section className="mt-20">
        <Container>
          <SectionHeading
            title="Colors"
            body="Brand · surfaces · semantic. Source: lib/cn + globals.css @theme."
            align="left"
            size="md"
          />
          <div className="mt-8 grid grid-cols-2 gap-4 sm:grid-cols-3 md:grid-cols-5">
            {palette.map((c) => (
              <div key={c.name} className="flex flex-col gap-2">
                <div
                  className={`h-24 w-full rounded-lg ${
                    c.border ? "border border-neutral-200" : ""
                  }`}
                  style={{ background: c.value }}
                />
                <div>
                  <div className="text-sm font-semibold text-brand-ink">
                    {c.name}
                  </div>
                  <div className="font-mono text-xs uppercase text-neutral-500">
                    {c.value}
                  </div>
                </div>
              </div>
            ))}
          </div>
        </Container>
      </section>

      {/* TYPOGRAPHY */}
      <section className="mt-20">
        <Container>
          <SectionHeading
            title="Typography"
            body="Display = Playfair Display Bold. Sans = Inter + SF Pro fallback."
            align="left"
            size="md"
          />
          <div className="mt-8 space-y-8">
            <Sample label="Display 1 · 100/1.05 · Playfair">
              <p className="font-display text-[100px] leading-[1.05] tracking-tight">
                Gets you.
              </p>
            </Sample>
            <Sample label="Display 2 · 72/1.08 · Playfair">
              <p className="font-display text-[72px] leading-[1.08] tracking-tight">
                Finds them.
              </p>
            </Sample>
            <Sample label="H1 · 48/1.15 · Playfair">
              <p className="font-display text-[48px] leading-[1.15] tracking-tight">
                Send the first text.
              </p>
            </Sample>
            <Sample label="H2 · 36/1.18 · Playfair">
              <p className="font-display text-[36px] leading-[1.18] tracking-tight">
                It&apos;s already working.
              </p>
            </Sample>
            <Sample label="H3 · 24/1.25 · Inter Semibold">
              <p className="text-2xl font-semibold leading-[1.25]">
                Nezu finds the fit.
              </p>
            </Sample>
            <Sample label="Body-LG · 18/1.55 · Inter Regular">
              <p className="text-lg leading-[1.55] text-neutral-700">
                Tell Nezu what you&apos;re looking for. Nezu finds someone real and
                introduces you over iMessage.
              </p>
            </Sample>
            <Sample label="Body · 16/1.55 · Inter Regular">
              <p className="text-base leading-[1.55] text-neutral-700">
                A friend that texts you a friend. Lives in iMessage. No app to
                download.
              </p>
            </Sample>
            <Sample label="Caption · 13/1.4 · Inter Regular">
              <p className="text-[13px] leading-[1.4] text-neutral-500">
                Free to start. No app to download.
              </p>
            </Sample>
            <Sample label="Overline · 11/1.2/700 · uppercase · 0.08em">
              <p className="text-[11px] font-bold uppercase leading-[1.2] tracking-[0.08em] text-brand-blue">
                Found someone
              </p>
            </Sample>
          </div>
        </Container>
      </section>

      {/* RADIUS */}
      <section className="mt-20">
        <Container>
          <SectionHeading title="Radius" align="left" size="md" />
          <div className="mt-8 grid grid-cols-2 gap-6 sm:grid-cols-4 md:grid-cols-8">
            {radius.map((r) => (
              <div key={r.name} className="flex flex-col items-center gap-3">
                <div
                  className="h-20 w-20 bg-brand-blue"
                  style={{ borderRadius: r.value }}
                />
                <div className="text-center">
                  <div className="text-sm font-semibold">{r.name}</div>
                  <div className="font-mono text-xs text-neutral-500">
                    {r.value}px
                  </div>
                </div>
              </div>
            ))}
          </div>
        </Container>
      </section>

      {/* SHADOWS */}
      <section className="mt-20">
        <Container>
          <SectionHeading title="Shadows" align="left" size="md" />
          <div className="mt-8 grid grid-cols-1 gap-6 sm:grid-cols-2 md:grid-cols-4">
            {shadows.map((s) => (
              <div key={s.name} className="flex flex-col items-center gap-3">
                <div
                  className={`flex h-28 w-full items-center justify-center rounded-card bg-white ${s.className}`}
                >
                  <span className="font-mono text-xs text-neutral-500">
                    {s.className}
                  </span>
                </div>
                <div className="text-sm font-semibold">{s.name}</div>
              </div>
            ))}
          </div>
        </Container>
      </section>

      {/* BUTTONS */}
      <section className="mt-20">
        <Container>
          <SectionHeading title="Buttons" align="left" size="md" />
          <div className="mt-8 flex flex-wrap items-center gap-4">
            <Button variant="primary" size="sm">Primary SM</Button>
            <Button variant="primary" size="md">Primary MD</Button>
            <Button variant="primary" size="lg" showArrow>Primary LG</Button>
            <Button variant="secondary" size="md">Secondary</Button>
            <Button variant="ghost" size="md">Ghost</Button>
          </div>
          <div className="mt-6 rounded-card bg-brand-ink p-8">
            <Button variant="paper-on-dark" size="md" showArrow>
              Paper-on-dark
            </Button>
          </div>
        </Container>
      </section>

      {/* LOGO */}
      <section className="mt-20">
        <Container>
          <SectionHeading title="Logo" align="left" size="md" />
          <div className="mt-8 grid grid-cols-1 gap-6 sm:grid-cols-3">
            <div className="flex flex-col items-center gap-4 rounded-card bg-white p-8 shadow-card-soft">
              <LogoMark size={80} />
              <span className="text-sm font-medium">color</span>
            </div>
            <div className="flex flex-col items-center gap-4 rounded-card bg-white p-8 shadow-card-soft">
              <LogoMark size={80} variant="mono-ink" />
              <span className="text-sm font-medium">mono-ink</span>
            </div>
            <div className="flex flex-col items-center gap-4 rounded-card bg-brand-ink p-8">
              <LogoMark size={80} variant="mono-paper" />
              <span className="text-sm font-medium text-white">mono-paper</span>
            </div>
          </div>
        </Container>
      </section>

      {/* MOTION */}
      <section className="mt-20">
        <Container>
          <SectionHeading
            title="Motion"
            body="Hero rotating text · count-up · scroll fade-up."
            align="left"
            size="md"
          />
          <div className="mt-8 space-y-10">
            <div className="rounded-card bg-brand-ink p-10 text-white">
              <div className="text-[11px] font-bold uppercase tracking-wider text-white/60">
                RotatingText
              </div>
              <p className="mt-3 font-display text-[44px] leading-[1.1] sm:text-[64px]">
                Find a{" "}
                <RotatingText
                  className="text-brand-yellow"
                  words={["climbing", "running", "coffee", "ramen"]}
                />{" "}
                buddy.
              </p>
            </div>
            <div className="rounded-card bg-white p-10 shadow-card-soft">
              <div className="text-[11px] font-bold uppercase tracking-wider text-brand-blue">
                CountUp
              </div>
              <div className="mt-3 grid grid-cols-3 gap-8">
                <div>
                  <div className="font-display text-[56px] font-bold leading-none">
                    <CountUp to={1247} />
                  </div>
                  <div className="mt-2 text-sm text-neutral-500">
                    Friendships made
                  </div>
                </div>
                <div>
                  <div className="font-display text-[56px] font-bold leading-none">
                    <CountUp to={94} suffix="%" />
                  </div>
                  <div className="mt-2 text-sm text-neutral-500">
                    Would do it again
                  </div>
                </div>
                <div>
                  <div className="font-display text-[56px] font-bold leading-none">
                    <CountUp to={3} suffix=" days" />
                  </div>
                  <div className="mt-2 text-sm text-neutral-500">
                    Avg match time
                  </div>
                </div>
              </div>
            </div>
          </div>
        </Container>
      </section>

      {/* ACCORDION */}
      <section className="mt-20">
        <Container>
          <SectionHeading title="Accordion" align="left" size="md" />
          <div className="mt-8">
            <Accordion
              items={[
                {
                  q: "How does Nezu work?",
                  a: "Nezu reads your vibe, finds someone real, and opens an iMessage group once both sides say yes.",
                },
                {
                  q: "Do I need to download anything?",
                  a: "No. Nezu lives in iMessage.",
                },
              ]}
            />
          </div>
        </Container>
      </section>
    </main>
  );
}

function Sample({
  label,
  children,
}: {
  label: string;
  children: React.ReactNode;
}) {
  return (
    <div className="flex flex-col gap-2 border-b border-neutral-200 pb-6">
      <div className="font-mono text-xs uppercase tracking-wide text-neutral-500">
        {label}
      </div>
      {children}
    </div>
  );
}
