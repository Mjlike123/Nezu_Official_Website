# Nezu Vibe Coding Guide

This guide is for designers using AI-assisted coding to evolve the Nezu website while keeping the visual experience consistent.

这份文档是给 UI 设计师使用的。它说明如何用“设计感觉 + 浏览器预览 + 自然语言指令”来让 AI 帮你改页面，同时不破坏 Nezu 的整体视觉系统。

## What Vibe Coding Means Here / 在这个项目里，Vibe Coding 是什么

For Nezu, vibe coding means the designer controls the feeling:

- visual rhythm
- spacing
- mobile composition
- brand warmth
- motion personality
- image choice
- perceived polish

The AI translates that design judgment into code.

You do not need to describe React, TypeScript, Tailwind, or Framer Motion details. Describe what feels wrong and what should feel better.

中文标注：你不需要懂 React、TypeScript、Tailwind 或 Framer Motion。你只需要判断页面“哪里感觉不对”，然后描述你希望它“变成什么感觉”。AI 负责把这些设计判断翻译成代码。

## Good Design Prompts / 好的设计提示词

Use prompts like:

```text
Only adjust mobile. Keep desktop unchanged.
The hero title feels too close to the top. Add more breathing room.
```

```text
This card feels cramped on small phones. Increase left and right padding.
Keep the text readable and avoid overflow.
```

```text
This doodle should feel alive but not distracting. Add a slow floating animation.
```

```text
This menu should feel like Apple glass: white, translucent, blurred, with dark readable text.
```

```text
The swipe card flashes white during switching. Make the transition feel smoother.
```

```text
Replace this image but keep the same layout and visual rhythm.
```

中文示例：

```text
只改手机端，桌面端保持不变。这个模块现在有点挤，左右留白加大一点。
```

```text
这个装饰图太抢眼了，让它更轻一点，动效更慢一点。
```

```text
这里需要更像 Apple 的毛玻璃：白色半透明、模糊、黑色文字清晰可读。
```

```text
这个切换有白闪，帮我让过渡更顺滑，但不要改变整体布局。
```

## Always Specify Scope / 一定要说明修改范围

When asking for a UI change, say which surfaces should change:

- mobile only
- desktop only
- all breakpoints
- this section only
- this component everywhere

Examples:

```text
Only change the mobile position of this illustration.
```

```text
Apply this to all copy buttons site-wide.
```

```text
Keep the large-screen version unchanged.
```

中文标注：每次提需求时尽量说明“只改手机端 / 只改桌面端 / 全站生效 / 只改这个模块 / 这个组件所有地方都改”。这能避免 AI 误改其他页面。

## Design Language To Use / 可以使用的设计语言

Helpful words:

- warmer
- lighter
- softer
- more premium
- more playful
- less cramped
- more breathing room
- less distracting
- more Apple-like
- more iMessage-native
- more human
- slower / calmer motion
- stronger CTA
- better visual hierarchy

Avoid vague prompts like:

```text
Make it better.
```

Instead say:

```text
The CTA is not visually dominant enough. Make the button feel more primary without changing the section layout.
```

中文标注：不要只说“优化一下”。尽量描述具体感受，例如“太挤”“不够轻”“按钮不够主”“动效太抢”“手机端贴边”。

## Browser Preview Workflow / 浏览器预览工作流

1. Run the site.

```bash
npm run dev
```

2. Open local preview.

```text
http://localhost:3000
```

3. For phone preview, use the network URL printed by Next.js.

```text
http://10.x.x.x:3000
```

4. Inspect the page visually.

5. Give AI a design-level instruction.

6. Refresh and compare.

7. Repeat until the composition feels right.

中文标注：真实页面就是最终设计稿。不要只看静态截图，要在浏览器和手机上预览，再判断节奏、间距、动效和图片是否舒服。

## Image Replacement Workflow / 图片替换流程

When replacing images:

1. Put image files in the correct `public/images/` folder.
2. Prefer keeping the same path if the image is a direct replacement.
3. If the image aspect ratio changed, adjust `width`, `height`, or class sizing in the component.
4. If the old image still appears, clear Next image cache:

```bash
rm -rf .next/dev/cache/images
```

5. Hard refresh the browser.

中文标注：如果替换同名图片后还看到旧图，通常是 Next 图片缓存。清缓存后再强刷浏览器。

## Mobile QA / 手机端检查

Always check mobile after visual edits:

- 375px wide phone
- 390px wide phone
- 430px wide phone

Check these areas carefully:

- Header and mobile menu.
- Hero title and CTA.
- How-it-works image cards.
- Swipe phone demo.
- Testimonial cards.
- Final CTA image overlay.
- About contact card and email.
- Privacy / Terms fixed header.

中文标注：这个项目是移动端优先。很多视觉问题只会在手机上暴露，比如文字贴边、图片过大、装饰图遮挡、导航不清晰。

## Common Nezu Patterns / Nezu 常用视觉模式

### Glass Navigation / 毛玻璃导航

Use this when the UI floats over dark/photo surfaces:

- translucent white background
- backdrop blur
- pill shape
- white text on dark backgrounds
- black text after scrolling onto light surfaces

### Sticker Eyebrows / 贴纸式小标题

Section labels should feel like stickers:

- blue fill
- white text
- slight rotation
- rounded corners

### Doodles / 手绘装饰

Doodles should:

- support the feeling of social warmth
- float slowly
- not compete with the headline
- be hidden on mobile if they crowd content

### Cards / 卡片

Cards should:

- use large radius
- have enough internal padding
- feel soft, not rigid
- avoid edge-to-edge text on mobile

## What Not To Ask AI To Do / 不建议让 AI 做什么

Avoid asking for:

- a completely new color palette
- a new font system
- sharp/rectangular corporate cards
- dashboard-style UI
- unrelated refactors
- desktop and mobile changes when only one is needed

If a design request intentionally changes the system, update `DESIGN.md` too.

中文标注：如果只是局部优化，不要让 AI 重做颜色、字体、组件体系。除非你真的想升级设计系统，否则应该优先沿用 `DESIGN.md`。

## Collaboration Rule / 协作规则

When in doubt, preserve the existing Nezu feeling:

```text
Warm iMessage-native social helper.
Apple-like polish.
Playful doodles.
Blue action, yellow emotion.
Large serif headlines.
Soft rounded cards.
Mobile-first spacing.
```

中文总结：

```text
温暖的 iMessage 原生社交助手。
Apple-like 的精致感。
轻微手绘感和慢速动效。
蓝色负责行动，黄色负责情绪。
大标题用衬线字体。
卡片柔软、大圆角、有呼吸感。
手机端优先检查。
```
