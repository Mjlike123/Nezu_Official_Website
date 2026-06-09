import Image from "next/image";
import Link from "next/link";
import { Button } from "@/components/ui/Button";
import { Container } from "@/components/ui/Container";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { LogoLockup } from "@/components/brand/LogoMark";
import { RotatingText } from "@/components/effects/RotatingText";

export const metadata = {
  title: "Design System · Nezu",
  description: "Visual showcase for the Nezu design system.",
};

const colors = [
  {
    group: "Brand / 品牌色",
    items: [
      { name: "brand-blue", zh: "品牌湖蓝", value: "#0088ff", usage: "主 CTA、重点高亮、联系卡片" },
      { name: "brand-yellow", zh: "柠檬黄", value: "#ffe600", usage: "Hero 动态词、情绪强调" },
      { name: "brand-ink", zh: "品牌黑", value: "#111111", usage: "主文字、深色背景" },
      { name: "brand-blue-soft", zh: "浅蓝背景", value: "#d7eff6", usage: "浅色区块、图片兜底" },
      { name: "brand-neon", zh: "荧光青", value: "#32fffa", usage: "小面积社交点缀" },
      { name: "brand-coral", zh: "珊瑚色", value: "#ff5a3d", usage: "插画和温暖点缀" },
    ],
  },
  {
    group: "Surface / 承载面",
    items: [
      { name: "surface-paper", zh: "白色纸面", value: "#ffffff", usage: "卡片、法律页内容", border: true },
      { name: "surface-cream", zh: "米白背景", value: "#fbfbfa", usage: "柔和页面底色", border: true },
      { name: "surface-mist", zh: "雾面浅灰", value: "#f6f7fb", usage: "次级浅色区块", border: true },
      { name: "surface-pearl", zh: "珍珠灰", value: "#f5f5f7", usage: "Apple-like 中性背景", border: true },
    ],
  },
];

const typeSamples = [
  {
    label: "Display 1 / 首页大标题",
    className: "font-display text-[64px] leading-[1.05] tracking-tight md:text-[100px]",
    text: "Gets you.",
  },
  {
    label: "Display 2 / 区块标题",
    className: "font-display text-[48px] leading-[1.08] tracking-tight md:text-[72px]",
    text: "Finds them.",
  },
  {
    label: "Body / 正文",
    className: "max-w-2xl text-base leading-[1.55] text-neutral-700 md:text-lg",
    text: "Tell Nezu what you're looking for. Nezu finds someone real and introduces you over iMessage.",
  },
  {
    label: "Caption / 辅助说明",
    className: "text-[13px] font-medium leading-[1.4] text-neutral-500",
    text: "Free to start. No app to download.",
  },
];

const radius = [
  { name: "sm", zh: "小圆角", value: 8 },
  { name: "md", zh: "中圆角", value: 12 },
  { name: "xl", zh: "大圆角", value: 24 },
  { name: "bubble", zh: "气泡圆角", value: 28 },
  { name: "card", zh: "卡片圆角", value: 32 },
  { name: "pill", zh: "胶囊", value: 50 },
];

const principles = [
  "温暖的 iMessage 原生社交助手",
  "蓝色负责行动，黄色负责情绪",
  "Playfair 大标题 + Inter 正文 UI",
  "毛玻璃导航、大圆角卡片、柔和阴影",
  "手绘 doodle 慢速漂浮",
  "移动端优先检查视觉重心",
];

const doItems = [
  "保持页面温暖、社交、手机端优先",
  "优先复用现有组件和 token",
  "图片使用真实朋友感摄影",
  "动效保持慢、轻、有呼吸感",
];

const dontItems = [
  "不要做成 dating app 视觉",
  "不要引入 dashboard / SaaS 语言",
  "不要随意增加新品牌色",
  "不要在只改手机端时影响桌面端",
];

const mobileChecks = [
  "Header 和移动菜单可读性",
  "Hero 标题顶部间距和 CTA 可见性",
  "Swipe phone 卡片是否在手机框内",
  "About 邮箱是否贴边或溢出",
  "Final CTA 装饰图是否遮挡标题",
  "二级页顶部栏是否固定并滚动反色",
];

export default function DesignSystemShowcase() {
  return (
    <main className="min-h-dvh bg-surface-cream text-brand-ink">
      <header className="sticky top-0 z-50 border-b border-black/[0.06] bg-white/80 backdrop-blur-xl">
        <Container className="flex h-16 items-center justify-between">
          <LogoLockup size={28} />
          <div className="flex items-center gap-4">
            <a
              href="/styleguide"
              className="hidden text-sm font-semibold text-neutral-500 transition hover:text-brand-blue sm:inline"
            >
              Styleguide
            </a>
            <Link
              href="/"
              className="rounded-full border border-brand-ink/10 bg-white px-4 py-2 text-sm font-semibold text-brand-ink transition hover:bg-brand-ink/5"
            >
              Back home
            </Link>
          </div>
        </Container>
      </header>

      <section className="relative overflow-hidden bg-brand-ink py-20 text-white md:py-28">
        <div className="pointer-events-none absolute -right-16 top-16 h-56 w-56 rounded-full bg-brand-blue/30 blur-3xl" />
        <div className="pointer-events-none absolute -bottom-20 left-10 h-64 w-64 rounded-full bg-brand-yellow/20 blur-3xl" />
        <Container className="relative z-10">
          <p className="inline-flex -rotate-[5deg] rounded-[8px] bg-brand-blue px-5 py-1 text-[18px] font-semibold">
            Design System / 设计系统
          </p>
          <h1 className="mt-8 max-w-5xl font-display text-[56px] leading-[1.02] tracking-tight md:text-[96px]">
            Nezu should feel warm, social, and iMessage-native.
          </h1>
          <p className="mt-6 max-w-3xl text-lg leading-relaxed text-white/75 md:text-xl">
            这是 `design-system/DESIGN.md` 的可视化展示页，用于快速查看 Nezu 的颜色、字体、组件、图片、动效和移动端设计原则。
          </p>
        </Container>
      </section>

      <section className="py-16 md:py-24">
        <Container>
          <div className="grid gap-4 md:grid-cols-3">
            {principles.map((item) => (
              <div
                key={item}
                className="rounded-card bg-white p-6 shadow-card-soft transition hover:-translate-y-1 hover:shadow-card-lift"
              >
                <div className="mb-4 h-3 w-14 rounded-full bg-brand-yellow" />
                <p className="text-lg font-semibold leading-snug">{item}</p>
              </div>
            ))}
          </div>
        </Container>
      </section>

      <section className="py-16 md:py-24">
        <Container>
          <SectionHeading
            align="left"
            size="md"
            eyebrow="Colors"
            title="颜色系统 / Color Tokens"
            body="蓝色负责行动，黄色负责情绪，黑色负责稳定与高级感。"
          />
          <div className="mt-10 space-y-10">
            {colors.map((group) => (
              <div key={group.group}>
                <h3 className="text-lg font-bold">{group.group}</h3>
                <div className="mt-4 grid grid-cols-1 gap-4 sm:grid-cols-2 lg:grid-cols-3">
                  {group.items.map((color) => (
                    <article key={color.name} className="overflow-hidden rounded-[24px] bg-white shadow-card-soft">
                      <div
                        className={`h-32 ${"border" in color && color.border ? "border-b border-neutral-100" : ""}`}
                        style={{ backgroundColor: color.value }}
                      />
                      <div className="p-5">
                        <div className="flex items-start justify-between gap-3">
                          <div>
                            <h4 className="font-bold">{color.name}</h4>
                            <p className="text-sm text-neutral-500">{color.zh}</p>
                          </div>
                          <code className="rounded-full bg-surface-mist px-3 py-1 text-xs font-semibold">
                            {color.value}
                          </code>
                        </div>
                        <p className="mt-4 text-sm leading-relaxed text-neutral-600">{color.usage}</p>
                      </div>
                    </article>
                  ))}
                </div>
              </div>
            ))}
          </div>
        </Container>
      </section>

      <section className="bg-white py-16 md:py-24">
        <Container>
          <SectionHeading
            align="left"
            size="md"
            eyebrow="Typography"
            title="字体系统 / Type System"
            body="Playfair 负责温度和品牌感，Inter 负责清晰和界面可读性。"
          />
          <div className="mt-10 space-y-8">
            {typeSamples.map((sample) => (
              <div key={sample.label} className="border-b border-neutral-100 pb-8">
                <p className="mb-3 font-mono text-xs uppercase tracking-wider text-neutral-500">
                  {sample.label}
                </p>
                <p className={sample.className}>{sample.text}</p>
              </div>
            ))}
          </div>
        </Container>
      </section>

      <section className="py-16 md:py-24">
        <Container>
          <SectionHeading
            align="left"
            size="md"
            eyebrow="Shape"
            title="圆角和层级 / Radius & Elevation"
            body="Nezu 的形状语言是柔软的大圆角、胶囊按钮和轻量阴影。"
          />
          <div className="mt-10 grid grid-cols-2 gap-5 md:grid-cols-6">
            {radius.map((item) => (
              <div key={item.name} className="rounded-card bg-white p-5 text-center shadow-card-soft">
                <div
                  className="mx-auto h-20 w-20 bg-brand-blue"
                  style={{ borderRadius: item.value }}
                />
                <p className="mt-4 font-bold">{item.name}</p>
                <p className="text-sm text-neutral-500">{item.zh}</p>
                <p className="font-mono text-xs text-neutral-400">{item.value}px</p>
              </div>
            ))}
          </div>
          <div className="mt-8 grid gap-5 md:grid-cols-3">
            <div className="rounded-card bg-white p-6 shadow-card-soft">
              <p className="font-bold">card-soft</p>
              <p className="mt-2 text-sm text-neutral-500">默认白色卡片阴影</p>
            </div>
            <div className="rounded-card bg-white p-6 shadow-card-lift">
              <p className="font-bold">card-lift</p>
              <p className="mt-2 text-sm text-neutral-500">hover 或强调层级</p>
            </div>
            <div className="rounded-card bg-brand-ink p-6 text-white shadow-[0_8px_32px_rgba(0,0,0,0.12)]">
              <p className="font-bold">glass dark</p>
              <p className="mt-2 text-sm text-white/60">深色毛玻璃场景</p>
            </div>
          </div>
        </Container>
      </section>

      <section className="bg-brand-blue-soft py-16 md:py-24">
        <Container>
          <SectionHeading
            align="left"
            size="md"
            eyebrow="Components"
            title="组件样张 / Component Samples"
            body="这些是后续新增功能时应该优先复用的视觉语言。"
          />
          <div className="mt-10 grid gap-6 lg:grid-cols-[1fr_1.2fr]">
            <div className="rounded-card bg-white p-6 shadow-card-soft">
              <h3 className="font-display text-[36px] leading-tight">Buttons / 按钮</h3>
              <div className="mt-6 flex flex-wrap gap-4">
                <Button variant="primary" size="md" showArrow>
                  Message Nezu
                </Button>
                <Button variant="secondary" size="md">
                  Learn more
                </Button>
                <Button variant="ghost" size="md">
                  Ghost
                </Button>
              </div>
              <div className="mt-8 rounded-[24px] bg-brand-ink p-6">
                <Button variant="paper-on-dark" size="md" showArrow>
                  Paper on dark
                </Button>
              </div>
            </div>

            <div className="rounded-card bg-white p-6 shadow-card-soft">
              <h3 className="font-display text-[36px] leading-tight">Glass Header / 毛玻璃导航</h3>
              <div className="mt-6 rounded-[32px] bg-[url('/images/hero/hero-people.png')] bg-cover bg-center p-5">
                <div className="flex h-14 items-center justify-between rounded-[40px] border border-white/20 bg-white/10 px-4 text-white shadow-[0_8px_32px_rgba(0,0,0,0.12)] backdrop-blur-xl">
                  <LogoLockup variant="mono-paper" size={28} />
                  <span className="text-sm font-semibold text-white/80">Top state</span>
                </div>
                <div className="mt-4 flex h-14 items-center justify-between rounded-[40px] border border-black/[0.05] bg-white/95 px-4 text-brand-ink shadow-[0_4px_16px_rgba(0,0,0,0.08)] backdrop-blur-xl">
                  <LogoLockup size={28} />
                  <span className="text-sm font-semibold text-brand-ink/70">Scrolled state</span>
                </div>
              </div>
            </div>
          </div>
        </Container>
      </section>

      <section className="py-16 md:py-24">
        <Container>
          <SectionHeading
            align="left"
            size="md"
            eyebrow="Motion"
            title="动效性格 / Motion Personality"
            body="动效要慢、轻、有呼吸感。它应该增加生命力，而不是抢内容。"
          />
          <div className="mt-10 grid gap-6 lg:grid-cols-2">
            <div className="relative overflow-hidden rounded-card bg-brand-ink p-8 text-white shadow-card-soft">
              <Image
                src="/scribbles/paper-airplane.png"
                alt=""
                width={220}
                height={160}
                className="pointer-events-none absolute right-4 top-4 w-32 animate-[banner-float_6s_ease-in-out_infinite] object-contain opacity-90"
              />
              <p className="font-mono text-xs uppercase tracking-wider text-white/50">Rotating text</p>
              <p className="mt-14 font-display text-[44px] leading-[1.08] md:text-[64px]">
                Find a{" "}
                <RotatingText
                  words={["study", "gym", "travel", "running"]}
                  className="text-brand-yellow"
                />{" "}
                buddy.
              </p>
            </div>
            <div className="rounded-card bg-white p-8 shadow-card-soft">
              <p className="font-mono text-xs uppercase tracking-wider text-brand-blue">Swipe phone demo</p>
              <div className="mt-6 grid gap-4 sm:grid-cols-3">
                {["/images/testimonials/testimonial-cyan.png", "/images/testimonials/testimonial-purple.png", "/images/testimonials/testimonial-yellow.png"].map((src, index) => (
                  <div
                    key={src}
                    className="rounded-[24px] bg-surface-mist p-5 text-center"
                    style={{ transform: `rotate(${(index - 1) * 3}deg)` }}
                  >
                    <Image
                      src={src}
                      alt=""
                      width={80}
                      height={80}
                      className="mx-auto h-20 w-20 rounded-full object-contain"
                    />
                    <p className="mt-4 text-sm font-semibold">slow floating</p>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </Container>
      </section>

      <section className="bg-brand-ink py-16 text-white md:py-24">
        <Container>
          <div className="grid gap-8 lg:grid-cols-2">
            <div>
              <p className="inline-flex -rotate-[5deg] rounded-[8px] bg-brand-blue px-5 py-1 text-[18px] font-semibold">
                Do
              </p>
              <h2 className="mt-6 font-display text-[44px] leading-tight md:text-[64px]">
                该做什么
              </h2>
              <ul className="mt-8 space-y-4">
                {doItems.map((item) => (
                  <li key={item} className="rounded-[24px] bg-white/10 p-5 text-white/85 backdrop-blur">
                    {item}
                  </li>
                ))}
              </ul>
            </div>
            <div>
              <p className="inline-flex -rotate-[5deg] rounded-[8px] bg-white/10 px-5 py-1 text-[18px] font-semibold">
                Don&apos;t
              </p>
              <h2 className="mt-6 font-display text-[44px] leading-tight md:text-[64px]">
                不要做什么
              </h2>
              <ul className="mt-8 space-y-4">
                {dontItems.map((item) => (
                  <li key={item} className="rounded-[24px] bg-white/10 p-5 text-white/85 backdrop-blur">
                    {item}
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </Container>
      </section>

      <section className="py-16 md:py-24">
        <Container>
          <SectionHeading
            align="left"
            size="md"
            eyebrow="Mobile QA"
            title="手机端检查清单"
            body="Nezu 是移动端优先。每次视觉调整后，都要看真实手机预览。"
          />
          <div className="mt-10 grid gap-4 md:grid-cols-2 lg:grid-cols-3">
            {mobileChecks.map((item) => (
              <div key={item} className="rounded-[24px] bg-white p-5 shadow-card-soft">
                <div className="mb-4 flex h-8 w-8 items-center justify-center rounded-full bg-brand-yellow text-sm font-bold">
                  ✓
                </div>
                <p className="font-semibold">{item}</p>
              </div>
            ))}
          </div>
        </Container>
      </section>

      <section className="pb-20">
        <Container>
          <div className="rounded-[40px] bg-white p-8 shadow-card-soft md:p-12">
            <SectionHeading
              align="left"
              size="md"
              title="设计系统文档入口"
              body="这张网页是纯展示页；完整规则仍以 Markdown 文档为准。"
            />
            <div className="mt-8 flex flex-wrap gap-4">
              <code className="rounded-full bg-brand-blue px-5 py-3 text-sm font-semibold text-white shadow-[0_8px_24px_rgba(0,136,255,0.25)]">
                DESIGN.md
              </code>
              <code className="rounded-full border border-brand-ink/10 px-5 py-3 text-sm font-semibold text-brand-ink">
                VIBE-CODING.md
              </code>
            </div>
          </div>
        </Container>
      </section>
    </main>
  );
}
