# Nezu Design System

This folder is the source of truth for Nezu's visual rules, interaction feel, and design-to-code collaboration notes.

这个文件夹是 Nezu 官网的设计系统中心，用来统一视觉规范、交互动效、组件规则和 AI 辅助开发时的设计判断。

## Files / 文件说明

- `DESIGN.md` — Canonical design tokens, component rules, layout rules, motion rules, and do/don't guidance.
  中文：完整设计规范，包括颜色、字体、圆角、间距、组件、动效、响应式和 Do/Don't。
- `VIBE-CODING.md` — Designer-friendly workflow for using browser preview + natural-language prompts to evolve the site without breaking the visual system.
  中文：给 UI 设计师看的 vibe coding 协作指南，说明如何用自然语言和浏览器预览持续调整页面。

## How To Use / 使用方式

Visual showcase page / 可视化展示页：

```text
/design-system
```

运行项目后，在浏览器打开 `http://localhost:3000/design-system`，可以看到设计系统的纯展示网页。

Before designing or implementing a new section:

1. Read `DESIGN.md`.
2. Reuse existing colors, type scale, radii, shadows, motion timing, and component patterns.
3. Put content changes in `lib/content.ts` when possible.
4. Put visual section changes in `components/sections/`.
5. Put reusable primitives in `components/ui/`.

For AI-assisted coding, reference this folder in the prompt:

```text
Follow the Nezu design system in design-system/DESIGN.md.
Keep the visual experience consistent with the existing homepage.
```

中文提示词示例：

```text
请遵循 design-system/DESIGN.md 里的 Nezu 设计系统。
保持视觉体验和当前首页一致，只调整我指出的模块。
```

## Design Principle / 设计原则

Nezu should feel like a warm iMessage-native social helper: playful, human, soft, trustworthy, and lightly animated. The system is Apple-like in polish, but more expressive through blue, yellow, rounded cards, doodles, and friendly photography.

中文：Nezu 应该像一个温暖的 iMessage 原生社交助手。它需要友好、轻松、柔软、可信、有一点点动效生命力。整体质感接近 Apple 的干净和克制，但通过蓝色、黄色、大圆角卡片、手绘 doodle 和真实朋友照片，显得更年轻、更有人味。
