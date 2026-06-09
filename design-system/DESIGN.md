---
version: alpha
name: Nezu-design-system
description: A warm iMessage-native friendship website system anchored by bright lake blue, lemon yellow, soft black, large serif display type, Apple-like glass navigation, rounded cards, friendly photography, and slow floating doodles. The system should feel human, light, social, and trustworthy rather than like a conventional dating app or SaaS dashboard.

colors:
  brand-blue: "#0088ff"
  brand-blue-hover: "#0073d9"
  brand-blue-soft: "#d7eff6"
  brand-yellow: "#ffe600"
  brand-yellow-warm: "#ffe66d"
  brand-neon: "#32fffa"
  brand-coral: "#ff5a3d"
  brand-ink: "#111111"
  brand-room-ink: "#061a40"
  surface-paper: "#ffffff"
  surface-cream: "#fbfbfa"
  surface-mist: "#f6f7fb"
  surface-pearl: "#f5f5f7"
  surface-night: "#111827"
  apple-blue: "#007aff"
  apple-graphite: "#1d1d1f"
  neutral-50: "#fafafa"
  neutral-100: "#e5e5ea"
  neutral-200: "#d1d1d6"
  neutral-300: "#c7c7cc"
  neutral-400: "#aeaeb2"
  neutral-500: "#8e8e93"
  neutral-600: "#636366"
  neutral-700: "#48484a"
  neutral-800: "#2c2c2e"
  neutral-900: "#1d1d1f"
  success: "#34c759"
  warning: "#ff9500"
  danger: "#ff3b30"

typography:
  display-1:
    fontFamily: "Playfair Display Bold, Georgia, serif"
    fontSize: 100px
    fontWeight: 700
    lineHeight: 1.05
    letterSpacing: -0.02em
  display-2:
    fontFamily: "Playfair Display Bold, Georgia, serif"
    fontSize: 72px
    fontWeight: 700
    lineHeight: 1.08
    letterSpacing: -0.02em
  display-3:
    fontFamily: "Playfair Display Bold, Georgia, serif"
    fontSize: 56px
    fontWeight: 700
    lineHeight: 1.1
    letterSpacing: -0.02em
  h1:
    fontFamily: "Playfair Display Bold, Georgia, serif"
    fontSize: 48px
    fontWeight: 700
    lineHeight: 1.15
    letterSpacing: -0.015em
  h2:
    fontFamily: "Playfair Display Bold, Georgia, serif"
    fontSize: 36px
    fontWeight: 700
    lineHeight: 1.18
    letterSpacing: -0.012em
  h3:
    fontFamily: "Inter, -apple-system, BlinkMacSystemFont, SF Pro Text, sans-serif"
    fontSize: 24px
    fontWeight: 700
    lineHeight: 1.25
    letterSpacing: -0.005em
  body-lg:
    fontFamily: "Inter, -apple-system, BlinkMacSystemFont, SF Pro Text, sans-serif"
    fontSize: 18px
    fontWeight: 400
    lineHeight: 1.55
    letterSpacing: 0
  body-md:
    fontFamily: "Inter, -apple-system, BlinkMacSystemFont, SF Pro Text, sans-serif"
    fontSize: 16px
    fontWeight: 400
    lineHeight: 1.55
    letterSpacing: 0
  body-sm:
    fontFamily: "Inter, -apple-system, BlinkMacSystemFont, SF Pro Text, sans-serif"
    fontSize: 14px
    fontWeight: 400
    lineHeight: 1.5
    letterSpacing: 0
  caption:
    fontFamily: "Inter, -apple-system, BlinkMacSystemFont, SF Pro Text, sans-serif"
    fontSize: 13px
    fontWeight: 500
    lineHeight: 1.4
    letterSpacing: 0
  overline:
    fontFamily: "Inter, -apple-system, BlinkMacSystemFont, SF Pro Text, sans-serif"
    fontSize: 11px
    fontWeight: 600
    lineHeight: 1.2
    letterSpacing: 0.08em
  button:
    fontFamily: "Inter, -apple-system, BlinkMacSystemFont, SF Pro Text, sans-serif"
    fontSize: 16px
    fontWeight: 600
    lineHeight: 1
    letterSpacing: 0

rounded:
  xs: 4px
  sm: 8px
  md: 12px
  lg: 18px
  xl: 24px
  bubble: 28px
  card: 32px
  pill: 50px
  full: 9999px

spacing:
  xxs: 4px
  xs: 8px
  sm: 12px
  md: 16px
  lg: 24px
  xl: 32px
  xxl: 48px
  section-mobile: 56px
  section-desktop: 96px

shadows:
  card-soft: "0 8px 24px rgba(6, 26, 64, 0.08)"
  card-lift: "0 16px 48px rgba(6, 26, 64, 0.12)"
  image-soft: "0 12px 40px rgba(6, 26, 64, 0.12)"
  glow-yellow: "0 0 32px rgba(255, 230, 0, 0.4)"

motion:
  ease-spring: "cubic-bezier(0.22, 1, 0.36, 1)"
  ease-smooth: "cubic-bezier(0.4, 0, 0.2, 1)"
  slow-float: "5.5s-7s ease-in-out infinite"
  reveal: "0.8s-1.1s ease-spring"

components:
  button-primary:
    backgroundColor: "{colors.brand-blue}"
    textColor: "#ffffff"
    typography: "{typography.button}"
    rounded: "{rounded.pill}"
    heightMobile: 52px
    heightDesktop: 72px
    shadow: "0 8px 24px rgba(0,136,255,0.25)"
  glass-header:
    backgroundColorTop: "rgba(255,255,255,0.10)"
    backgroundColorScrolled: "rgba(255,255,255,0.95)"
    blur: "backdrop-blur-xl"
    rounded: 40px
    height: 56px
  section-heading:
    displayFont: "{typography.display-2}"
    eyebrowBackground: "{colors.brand-blue}"
    eyebrowText: "#ffffff"
    eyebrowRotation: "-5deg"
  rounded-card:
    backgroundColor: "{colors.surface-paper}"
    rounded: "{rounded.card}"
    shadow: "{shadows.card-soft}"
  testimonial-card:
    backgrounds: ["#CCF9FF", "#FFF9CC", "#F5C9FD"]
    rounded: "{rounded.card}"
    padding: 24px
  legal-card:
    backgroundColor: "{colors.surface-paper}"
    textColor: "{colors.brand-ink}"
    rounded: 32px
    shadow: "{shadows.card-soft}"
---

## 中文速览 / Chinese Quick Reference

这份文档是 Nezu 官网的视觉系统规范，用来保证之后新增页面、组件、动效、图片和文案时，整体体验仍然像同一个品牌。

### 核心气质

Nezu 是一个 **温暖的 iMessage 原生社交助手**。视觉上要像 Apple 一样干净、有质感，但比 Apple 更年轻、更友好、更有人情味。

关键词：

- 温暖、轻松、真实朋友感
- iMessage 原生，而不是传统 App
- 蓝色负责行动，黄色负责情绪
- 大圆角、毛玻璃、柔和阴影
- 手绘 doodle 和慢速漂浮动效
- 移动端优先

### 中文 Token 对照

| Token | 中文含义 | 使用场景 |
|---|---|---|
| `brand-blue` | 品牌湖蓝 | 主按钮、重点高亮、联系卡片 |
| `brand-yellow` | 柠檬黄 | Hero 动态词、情绪强调、装饰 |
| `brand-ink` | 品牌黑 | 主要文字、深色背景 |
| `brand-blue-soft` | 浅蓝背景 | 浅色区块、图片加载兜底 |
| `surface-paper` | 白色纸面 | 卡片、法律页内容 |
| `surface-cream` | 米白背景 | 柔和页面底色 |
| `font-display` | 展示字体 | Hero 和大标题，使用 Playfair |
| `font-sans` | 正文字体 | 正文、按钮、导航，使用 Inter |
| `rounded-card` | 大卡片圆角 | 首页卡片、数据区块 |
| `rounded-pill` | 胶囊圆角 | 按钮、导航条 |
| `card-soft` | 柔和阴影 | 白色卡片、统计卡片 |
| `ease-spring` | 弹性缓动 | 按钮 hover、导航切换、卡片动效 |

### 给设计师的判断标准

如果一个新设计看起来像下面这些方向，通常是对的：

- 像短信里的朋友介绍，而不是陌生人匹配 App。
- 像一个温暖帮手，而不是冷冰冰的 AI 工具。
- 手机端阅读舒服，文字不贴边。
- 动效慢、轻、呼吸感强，不抢内容。
- 装饰图形是点缀，不是主角。

如果一个设计开始像 SaaS dashboard、dating app、企业官网、强销售页，就需要收回来。

## Overview / 概览

Nezu's visual system is a warm, social, iMessage-native marketing system. It should feel like a friendly helper that lives inside the user's daily messaging environment, not a heavy productivity dashboard and not a conventional dating app.

The brand is built on five recurring signals:

- **Lake blue** as the action and trust color.
- **Lemon yellow** as the emotional highlight.
- **Soft black** as the premium grounding surface.
- **Large serif display type** for warmth and personality.
- **Rounded glass, rounded cards, and floating doodles** for a human, playful rhythm.

The system is Apple-like in polish: glass nav, high-quality photography, smooth motion, white rounded surfaces, and iMessage references. But it is more expressive than Apple through scribbles, sticker-like labels, bright testimonial icons, and oversized social imagery.

## Brand Voice / 品牌语气

Nezu should feel:

- Warm, not corporate.
- Playful, not childish.
- Helpful, not robotic.
- Social, not dating-app coded.
- Premium, but still casual.
- Mobile-first and text-message-native.

Use language and UI that feels like a trusted friend introducing another friend. Avoid language that sounds like enterprise SaaS, productivity tooling, or generic AI automation.

中文标注：文案和界面都要像“朋友帮你介绍朋友”，不要像企业软件、效率工具或泛泛的 AI 自动化产品。

## Colors / 颜色

### Brand Core / 品牌主色

- **Brand Blue** (`{colors.brand-blue}` — #0088ff): Primary CTA, active navigation emphasis, blue contact card, section highlights.
- **Brand Blue Hover** (`{colors.brand-blue-hover}` — #0073d9): Hover and pressed states for primary CTAs.
- **Brand Blue Soft** (`{colors.brand-blue-soft}` — #d7eff6): Soft section backgrounds and image fallback backgrounds.
- **Brand Yellow** (`{colors.brand-yellow}` — #ffe600): Hero keyword highlight, emotional callouts, decorative emphasis.
- **Brand Yellow Warm** (`{colors.brand-yellow-warm}` — #ffe66d): Sticker-like warmth and yellow illustration accents.
- **Brand Neon** (`{colors.brand-neon}` — #32fffa): Small social/accent moments. Use sparingly.
- **Brand Coral** (`{colors.brand-coral}` — #ff5a3d): Social warmth, illustration accents, not a primary action color.
- **Brand Ink** (`{colors.brand-ink}` — #111111): Primary text and dark page surfaces.
- **Brand Room Ink** (`{colors.brand-room-ink}` — #061a40): Deep blue shadow tone for cards and phone mockups.

中文标注：蓝色是行动和信任；黄色是情绪和惊喜；黑色是高级感和稳定底色。

### Surfaces / 背景与承载面

- **Surface Paper** (`{colors.surface-paper}` — #ffffff): Cards, legal content, white glass state.
- **Surface Cream** (`{colors.surface-cream}` — #fbfbfa): Soft neutral page floor.
- **Surface Mist** (`{colors.surface-mist}` — #f6f7fb): Secondary light sections.
- **Surface Pearl** (`{colors.surface-pearl}` — #f5f5f7): Apple-like neutral background.
- **Surface Night** (`{colors.surface-night}` — #111827): Dark alternate surface.
- **Brand Ink** is also used as a full-width footer and CTA section floor.

### Text / 文字颜色

- Use `brand-ink` for primary text on light surfaces.
- Use `white` for primary text on dark/photo surfaces.
- Use `white/70`, `white/80`, or neutral grays for secondary copy.
- Use `brand-blue` and `brand-yellow` as semantic emphasis, not as body text colors.

### Color Rhythm / 色彩节奏

Do not make every section bright. The homepage should alternate:

1. Dark/photo hero.
2. White or cream explanatory content.
3. Blue/yellow brand interruption.
4. Soft blue proof section.
5. Dark CTA/footer close.

This rhythm keeps the page social and lively without becoming noisy.

## Typography / 字体

### Font Families / 字体家族

Nezu uses a two-font system:

- **Display:** Playfair Display Bold, used for hero and major section headlines.
- **UI/body:** Inter with Apple/SF Pro fallback, used for body copy, nav, buttons, labels, FAQ, and legal text.

The serif display font gives the brand warmth and humanity. Inter keeps the UI modern and clear.

中文标注：大标题用 Playfair，负责品牌温度；正文和 UI 用 Inter，负责清晰、现代和可读性。

### Hierarchy / 层级

| Token | Size | Weight | Line Height | Use |
|---|---:|---:|---:|---|
| `{typography.display-1}` | 100px | 700 | 1.05 | Desktop hero headline |
| `{typography.display-2}` | 72px | 700 | 1.08 | Large section headline |
| `{typography.display-3}` | 56px | 700 | 1.1 | Medium section headline |
| `{typography.h1}` | 48px | 700 | 1.15 | Mobile hero / legal h1 base |
| `{typography.h2}` | 36px | 700 | 1.18 | Section h2 fallback |
| `{typography.h3}` | 24px | 700 | 1.25 | Card title / legal h3 |
| `{typography.body-lg}` | 18px | 400 | 1.55 | Large supporting text |
| `{typography.body-md}` | 16px | 400 | 1.55 | Default body copy |
| `{typography.body-sm}` | 14px | 400 | 1.5 | Footer, captions, nav |
| `{typography.caption}` | 13px | 500 | 1.4 | UI captions, footnotes |

### Typography Principles / 字体原则

- Headlines should feel large, warm, and editorial.
- Use tight tracking on display type.
- Body copy should be medium-length and friendly; avoid dense paragraphs on the homepage.
- On mobile, prioritize line breaks that preserve the message. The hero keeps "Find a + rotating word" together.
- Do not introduce another display font.

## Layout / 布局

### Container / 页面容器

Use the `container-page` utility:

- Full width with centered max-width.
- Max width: 1280px.
- Horizontal padding: 20px mobile, 32px small screens, 48px desktop.

### Section Spacing / 区块间距

Use `section-padding` for standard sections:

- 56px vertical padding on mobile.
- 96px vertical padding on desktop.

Hero and Final CTA are exceptions because they rely on full-screen or large capsule compositions.

### Grid / 栅格

- Mobile: single column first.
- Tablet/desktop: two-column layouts for explanatory content.
- Stats/testimonials: 1-up mobile, 3-up desktop.
- Keep visual center of gravity slightly higher on mobile to avoid content feeling buried.

### Whitespace Philosophy / 留白原则

Nezu should have generous breathing room, but not feel empty. Mobile spacing needs special care:

- Keep text away from card edges.
- Avoid email/buttons touching blue or dark card edges.
- For decorative images, prefer partial off-canvas placement only when it still feels intentional.

## Shapes & Radius / 形状与圆角

| Token | Value | Use |
|---|---:|---|
| `{rounded.sm}` | 8px | Eyebrow labels, small logo corners |
| `{rounded.md}` | 12px | Small UI surfaces |
| `{rounded.xl}` | 24px | Contact cards and phone card corners |
| `{rounded.bubble}` | 28px | Mobile dropdown menu |
| `{rounded.card}` | 32px | Standard homepage cards |
| `{rounded.pill}` | 50px | Buttons and nav pill |
| `{rounded.full}` | 9999px | Avatars, circular icons |

Large rounded geometry is part of the brand. Avoid sharp cards except where an image asset already provides its own shape.

## Elevation & Glass / 层级与毛玻璃

### Glass Header / 毛玻璃顶部栏

Use the glass header pattern for primary and secondary navigation:

- Fixed top.
- 56px high.
- Rounded 40px.
- `backdrop-blur-xl`.
- Top of page: transparent white on dark/photo with white text.
- Scrolled state: white/95 with brand ink text and subtle shadow.

### Shadows / 阴影

Use shadows lightly:

- `card-soft` for white cards and stat containers.
- Blue CTA shadow for primary action buttons.
- Strong shadows are allowed only for phone/card mockups where physical layering is part of the storytelling.

Do not use heavy generic drop shadows across every section.

## Components / 组件

### Logo Lockup / Logo 组合

Logo lockup combines the PNG app mark and Playfair "Nezu" wordmark.

- Use color logo on light/white glass.
- Use mono-paper text on dark/photo/glass.
- Default header mark size: 28px.
- Logo mark keeps rounded 7px corners.

### Button / 按钮

Primary CTA:

- Blue background.
- White text.
- Pill shape.
- Strong but soft blue shadow.
- Arrow icon optional, usually enabled for hero and final CTA.
- Large button: 52px mobile, 72px desktop.

Secondary CTA:

- White surface.
- Blue text.
- Subtle blue border.

Use one main CTA per major conversion area. Do not stack multiple primary buttons.

中文标注：主按钮要像“明确行动入口”，不要像普通标签。一个转化区域通常只保留一个最强 CTA。

### Section Heading / 区块标题

Section headings use:

- Rotated blue eyebrow label.
- Playfair display headline.
- Optional highlighted words in brand blue.
- Center alignment by default; left alignment only for editorial split sections.

Eyebrow labels should feel like stickers, not corporate overlines.

### Cards / 卡片

Standard card:

- White or pastel background.
- 32px radius.
- 24-32px internal padding.
- Soft shadow when on light or blue section floors.

Testimonial cards:

- Pastel fills: cyan, yellow, purple.
- Small circular avatar cutouts.
- Text remains brand ink.

Contact/About card:

- Brand blue background.
- Yellow emphasis text.
- White body copy.
- Needs extra horizontal padding on mobile to avoid edge pressure.

中文标注：卡片要柔软、有呼吸感。移动端尤其要避免文字贴边或按钮压到边缘。

### Hero / 首屏

Hero is the emotional first impression:

- Full-screen-ish photo background.
- Dark overlay for text contrast.
- Left-aligned on mobile, centered from tablet/desktop.
- Playfair headline with yellow rotating keyword.
- Doodles appear from tablet/desktop and float slowly.
- CTA should be immediately reachable on mobile.

Do not overload hero with extra cards, stats, or secondary navigation.

### Swipe Phone Demo / 手机划卡演示

The phone demo in `See it` is a product-feel artifact:

- iMessage phone mockup remains the frame.
- Swipe cards are draggable on x-axis.
- Blue arrow doodle floats slowly.
- Card images should preload/eager-load to avoid white flash.
- Fallback card background uses soft blue.

Keep this section playful. Do not turn it into a technical product dashboard.

### Legal Page / 二级法律页

Legal pages should still feel branded:

- Dark page background.
- Fixed glass header.
- Header switches to white surface and black text on scroll.
- Content is a large white rounded article card.
- Body typography should be readable and conservative.

### Footer / 页脚

Footer closes on dark ink:

- White/soft text.
- Logo lockup.
- Legal links.
- Compact, not overly decorative.

## Imagery / 图片

### Photography / 摄影

Use real, warm, social photography:

- People in natural light.
- Friends talking, hiking, coffee, music, shared activity.
- Avoid stock-photo corporate poses.
- Avoid dating-app glamour portraits.

### Product Imagery / 产品图

Product visuals should communicate "iMessage-native":

- iMessage frame.
- SMS-like intro context.
- Swipe demo as playful preview.
- No heavy dashboard UI.

### Doodles & Stickers / 手绘装饰与贴纸感

Doodles are a signature layer:

- Paper planes.
- Chat bubbles.
- Cheers / champagne.
- Swooshes and arrows.

They should float slowly and feel hand-placed. Do not add too many in one viewport.

## Motion / 动效

### Motion Personality / 动效性格

Motion should feel calm, soft, and alive:

- Slow floating decorative elements.
- Gentle scroll reveal.
- Slight card lift on hover.
- Swipe animation with spring and natural momentum.

### Timing / 时间节奏

- Reveal: 0.8s-1.1s.
- Float: 5.5s-7s infinite ease-in-out.
- Button hover: 300ms spring.
- Card swipe exit: around 0.36s.

### Accessibility / 可访问性

Respect `prefers-reduced-motion`. Existing global CSS reduces animation duration when the user requests reduced motion.

## Responsive Behavior / 响应式

| Breakpoint | Behavior |
|---|---|
| Mobile `<640px` | Single column, left-aligned hero, hamburger menu, larger card padding checks, simplified decorative visibility |
| Small `>=640px` | Larger hero title, some decorative elements can appear |
| Medium `>=768px` | Center hero composition, desktop legal/header spacing, richer section layout |
| Large `>=1024px` | Two-column sections, full nav, more decorative positioning |

### Mobile QA Checklist / 手机端检查清单

Always check:

- Header menu readability on hero and after scroll.
- Hero title top spacing and CTA visibility.
- Email/contact text not touching blue card edges.
- Swipe phone card position inside phone mockup.
- Final CTA decorative paper plane not covering the headline.
- Legal page header stays fixed and switches tone on scroll.

## Content Rules / 内容规则

Most website copy should live in `lib/content.ts`.

Use `lib/content.ts` for:

- Navigation labels.
- Hero text.
- How-it-works cards.
- Stats and testimonials.
- Comparison points.
- See-it proof cards.
- FAQ items.
- Final CTA.
- About and contact copy.
- Footer links.

Use route files for long legal documents:

- `app/privacy/page.tsx`
- `app/terms/page.tsx`

## Implementation Rules / 实现规则

- Prefer existing components before creating new ones.
- Use `components/sections/` for page-specific blocks.
- Use `components/ui/` only when the pattern is reusable.
- Use `cn()` for conditional Tailwind classes.
- Prefer Tailwind utilities and tokens from `app/globals.css`.
- Keep image assets in `public/images/` or `public/scribbles/`.
- When replacing same-path images, clear `.next/dev/cache/images` if the preview still shows old files.

## Do's and Don'ts / 该做与不要做

### Do / 该做

- Keep the page warm, social, and mobile-first.
- Use blue for actions and structural brand moments.
- Use yellow for emotional emphasis, not everywhere.
- Keep large rounded cards and pill buttons.
- Use Playfair for major headlines.
- Use Inter for all UI and body text.
- Add subtle slow movement to decorative doodles.
- Verify every visual change on mobile.
- Keep copy human and conversational.

### Don't / 不要做

- Don't make it look like a dating app.
- Don't introduce a dashboard/SaaS visual language.
- Don't add too many accent colors.
- Don't use sharp rectangular cards for homepage sections.
- Don't make every decorative image animated.
- Don't use heavy shadows on every card.
- Don't hardcode content in components if it belongs in `lib/content.ts`.
- Don't change desktop layout when the request only targets mobile.

## Vibe Coding Guidance / Vibe Coding 指南

When using AI to change the UI, describe design intent in visual language:

- "Make this feel lighter."
- "Give this more breathing room on mobile."
- "Keep desktop unchanged, only adjust small screens."
- "Make the motion slower and more floaty."
- "This should feel like Apple glass."
- "Avoid white flash during image switching."

Then ask the AI to map the design intent to existing tokens and components. The AI should not invent a new visual style unless the design system is intentionally being updated.

中文标注：你作为 UI 设计师，不需要描述代码怎么写。只要描述“哪里感觉不对”和“希望变成什么感觉”，AI 负责翻译成代码。但每次都要强调范围：只改手机端、只改这个模块、桌面保持不变等。

## Known Gaps / 已知缺口

- Exact Figma variable names are not yet mapped one-to-one into code tokens.
- Some decorative asset sizes are tuned manually per section.
- This website currently optimizes for marketing pages, not a full product web app.
- Legal page content is structured but not yet connected to a CMS.
- Component variants are documented based on current implementation; future sections may require expanding this file.
