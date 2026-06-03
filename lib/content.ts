/**
 * Nezu 官网文案集中管理
 * - 方便未来接入 i18n / CMS
 * - 所有 UI 文案以英文为准（目标用户为欧美年轻人）
 *
 * 这个文件只放“内容数据”，不负责页面样式。
 * 页面组件会从这里读取文字、图片路径、按钮文案等。
 *
 * 专业词解释：
 * - Content / 文案内容：用户在页面上看到的文字、标题、按钮等。
 * - CMS：Content Management System，内容管理系统；以后可以让非工程同学在后台改文案。
 * - i18n：internationalization，国际化；以后如果要做多语言，会用到这种集中管理方式。
 * - as const：告诉 TypeScript 这些内容是固定配置，减少误改带来的类型问题。
 */

export const siteContent = {
  // brand = 品牌基础信息，Logo 或页脚等位置会用到。
  brand: {
    name: "Nezu",
    slogan: "Your buddy-finding assistant",
    tagline: "Gets you. Finds them.",
  },

  // nav = 顶部导航栏里的菜单项；href 里的 #xxx 会跳到页面对应区块。
  nav: [
    { label: "How it works", href: "#how-it-works" },
    { label: "Why Nezu", href: "#why-nezu" },
    { label: "See it", href: "#see-it" },
    { label: "About", href: "#about" },
  ],

  // hero = 首页首屏内容，也就是用户打开网站第一眼看到的标题、动词轮播、按钮。
  hero: {
    leadIn: "Find a",
    // rotatingWords = 标题里会滚动切换的词，例如 “Find a study buddy.”
    rotatingWords: [
      "study",
      "gym",
      "travel",
      "language",
      "gaming",
      "running",
      "activity",
    ],
    trailing: "buddy.",
    secondLine: "Just text us.",
    subtitle:
      "Tell Nezu what you're looking for. Nezu finds someone real and introduces you over iMessage.",
    cta: "Message Nezu to join",
    footnote: "Free to start. No app to download.",
  },

  // howItWorks = “How it works”步骤区块，解释 Nezu 怎么帮用户找到朋友。
  howItWorks: {
    eyebrow: "How it works",
    title: "Send the first text. We'll do the rest.",
    // steps = 多个步骤卡片；每一项会渲染成一个步骤。
    steps: [
      {
        id: "dinners",
        title: "Tell Nezu Your Vibe.",
        body: "Open iMessage. Describe the friend you want — a 6am running buddy, someone to drag to noise shows, a fellow new-in-town. One text. That's the whole setup.",
        image: "/images/how-it-works/text-vibe.png",
        imageAlt: "A young man texting on his phone from a sunny couch.",
      },
      {
        id: "drinks",
        title: "Nezu Finds The Fit.",
        body: "Nezu reads the corners of the internet where people are just being themselves — and looks for someone who'd land in the same place as you.",
        image: "/images/how-it-works/find-fit.png",
        imageAlt: "Friends laughing together around a dinner table.",
      },
      {
        id: "runs",
        title: "Nezu Breaks The Ice.",
        body: "We send a first message that actually sounds like you. No \"hey.\" No three-day draft. By the time they reply, you're already talking.",
        image: "/images/how-it-works/break-ice.png",
        imageAlt: "Two friends smiling together after a hike.",
      },
      {
        id: "fulltime",
        title: "Meet Up.",
        body: "Coffee, a run, a gallery — we'll even suggest the spot. You just show up.",
        image: "/images/how-it-works/meet-up-cafe.png",
        imageAlt: "Two people smiling over coffee in a cafe.",
      },
    ],
  },

  // stats = 数据证明和用户反馈区块，用来增强可信度。
  stats: {
    eyebrow: "Real Friendships",
    title: "It's already working.",
    // items = 页面上的关键数字；suffix 是数字后面的单位，比如 % 或 days。
    items: [
      { value: 1247, suffix: "", label: "Friendships made" },
      { value: 94, suffix: "%", label: "Would do it again" },
      { value: 3, suffix: " days", label: "Avg match time" },
    ],
    // testimonials = 用户评价；avatar 是每张卡片下方的小圆形切图。
    testimonials: [
      {
        quote:
          "I moved to Brooklyn in January and had been to exactly one coworker party. Nezu found me Maya — also a Bay Area transplant, also a ceramics nerd. We've done four pottery classes together.",
        name: "Sarah, 28",
        avatar: "/images/testimonials/testimonial-cyan.png",
      },
      {
        quote:
          "I wanted someone to train for NYC Marathon with. Nezu found Theo. We've logged 200 miles together. He's at my wedding next year.",
        name: "Diego, 31",
        avatar: "/images/testimonials/testimonial-yellow.png",
      },
      {
        quote:
          "I'm shy. I told Nezu I wanted a friend who'd also rather not talk for the first 20 minutes of a hike. They found her. We've hiked twice.",
        name: "Amy, 26",
        avatar: "/images/testimonials/testimonial-purple.png",
      },
    ],
  },

  // comparison = 对比区块，左边讲 Nezu，右边讲普通 friend apps。
  comparison: {
    eyebrow: "Real Intros",
    title: "There's a better way.",
    nezu: {
      title: "Nezu",
      points: [
        "Lives in iMessage — no install",
        "Zero profile to build",
        "AI does the matching for you",
        "People sourced from real communities",
        "One real intro, set up IRL",
      ],
    },
    others: {
      title: "Friend apps",
      points: [
        "Yet another app to download",
        "30 minutes of onboarding",
        "You swipe through hundreds",
        "Limited to whoever signed up",
        "Endless DMs that go nowhere",
      ],
    },
  },

  // seeIt = 展示产品实际体验的区块，配合图片说明“Nezu 会发来什么”。
  seeIt: {
    eyebrow: "See it",
    title: "Nezu doesn't send profiles. It sends a person.",
    body: "When Nezu finds a good match, it sends you a quick intro — who they are, why you might click, and how to start the conversation. You decide what happens next.",
    // proofs = 展示点列表；每一项通常包含一张图和一句说明。
    proofs: [
      {
        title: "Who they are, not how they photograph",
        body: "",
        image: "/images/see-it/music-hike.png",
        imageAlt: "A person smiling near the coast with activity doodles.",
      },
      {
        title: "A real iMessage group, not yet-another in-app inbox",
        body: "",
        image: "/images/see-it/imessage-notification.png",
        imageAlt: "A Nezu iMessage notification preview.",
      },
      {
        title: "A warm opener so no one's stuck typing \"hey...\"",
        body: "",
        image: "/images/see-it/meet-high-five.png",
        imageAlt: "Two friends high-fiving outside a cafe.",
      },
    ],
  },

  // faq = 常见问题区块；q 是 question（问题），a 是 answer（回答）。
  faq: {
    eyebrow: "FAQ",
    title: "Frequently asked.",
    items: [
      {
        q: "What’s included with Nezu?",
        a: "Nezu helps understand what kind of buddy you’re looking for, finds possible matches, gives you context on why they fit, and helps start the conversation through iMessage.",
      },
      {
        q: "How does matching work?",
        a: "Nezu looks at what you’re looking for, your interests, goals, location preferences, and availability when available. Matches are suggestions — you always decide whether to connect.",
      },
      {
        q: "Are the people Nezu finds real? How do you check?",
        a: "Every match goes through a real-person check — established account history, real activity, no red flags. If a match feels off to you, tell us, and we'll find someone better.",
      },
      {
        q: "What happens if my match says no?",
        a: "You don't have to deal with the no. Nezu just keeps looking and comes back when there's a yes. No \"your match passed\" notification, no awkward update.",
      },
      {
        q: "What if I don't like the match?",
        a: "Tell us why. We adjust and try again. There's no penalty, no awkward back-and-forth, no \"give them a chance.\" If it's not right, we keep looking.",
      },
      {
        q: "Do I need an iPhone?",
        a: "For now, yes — Nezu lives in iMessage. We're working on an Android-friendly version, but iMessage is what makes the whole \"no app\" thing work today.",
      },
      {
        q: "Is my data safe?",
        a: "Everything you tell Nezu stays between you and Nezu. We don't share, publish, or sell your conversations. Nothing identifying about you goes to a match until you both say yes.",
      },
    ],
  },

  // finalCta = 页面接近底部的最终按钮，引导用户完成下一步操作。
  finalCta: {
    title: "Your next friend is one text away.",
    cta: "Message Nezu to join",
  },

  // about = 关于 Nezu 的介绍和联系邮箱。
  about: {
    eyebrow: "About",
    title: "A quieter way to widen your world",
    body: "Nezu lives in iMessage. No new app, no profile to maintain, no faces to swipe through. You just text — and over time, Nezu starts to understand what you care about and who you'd actually enjoy meeting.\n\nThen it goes looking. Asks for consent. Opens a real group chat with a warm first line, and lets you take it from there.\n\nWe think the next layer of social isn't another feed or another bot pretending to be your friend. It's a quiet helper that widens your real-world circle, then disappears.",
    contact: {
      label: "Press · Investors · Partners",
      email: "developer@nezuagent.com",
    },
  },

  // footer = 页脚内容，包含法律链接和版权信息。
  footer: {
    legal: [
      { label: "Privacy", href: "/privacy" },
      { label: "Terms", href: "/terms" },
    ],
    copyright: "© 2026 Nezu",
  },
} as const;

export type SiteContent = typeof siteContent;
