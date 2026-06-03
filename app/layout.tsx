import type { Metadata, Viewport } from "next";
import localFont from "next/font/local";
import { Inter } from "next/font/google";
import "./globals.css";

/**
 * localFont = 加载项目本地字体文件。
 *
 * 这里加载的是 app/fonts/PlayfairDisplay-Bold.ttf，
 * 主要用于大标题等更有品牌感的文字。
 */
const playfair = localFont({
  src: "./fonts/PlayfairDisplay-Bold.ttf",
  // CSS Variable / CSS 变量：给字体起一个全局名字，之后 CSS 里可以用 var(--font-playfair) 调用。
  variable: "--font-playfair",
  // display: "swap" = 字体还没加载完时先显示备用字体，避免页面一开始空白。
  display: "swap",
  weight: "700",
  style: "normal",
});

/**
 * Inter = 从 Google Fonts 加载的正文字体。
 *
 * subsets: ["latin"] 表示只加载英文字母相关字符，文件更小、网页加载更快。
 */
const inter = Inter({
  variable: "--font-inter",
  subsets: ["latin"],
  display: "swap",
  weight: ["400", "500", "600", "700"],
});

/**
 * metadata = 网页的“对外说明书”。
 *
 * 它不会直接显示在页面正文里，但会影响：
 * - 浏览器标签页标题
 * - Google 搜索结果里的标题和描述
 * - 分享到社交平台时展示的标题、描述和图片信息
 *
 * SEO：Search Engine Optimization，搜索引擎优化。
 * Open Graph：社交平台读取网页分享卡片时用的一组信息。
 */
export const metadata: Metadata = {
  metadataBase: new URL("https://nezu.app"),
  title: {
    default: "Nezu — Find a climbing buddy. Just text us.",
    template: "%s · Nezu",
  },
  description:
    "Tell Nezu what you're looking for. Nezu finds someone real and introduces you over iMessage. Free to start. No app to download.",
  // keywords = 搜索关键词，帮助搜索引擎理解网站主题。
  keywords: [
    "Nezu",
    "make friends",
    "iMessage friends",
    "friendship app",
    "social agent",
    "find a buddy",
  ],
  // icons = 浏览器标签页、小书签、手机桌面等位置使用的网站图标。
  icons: {
    icon: [
      { url: "/images/brand/nezu-logo.png", type: "image/png" },
      { url: "/icon.png", type: "image/png" },
    ],
    shortcut: "/images/brand/nezu-logo.png",
    apple: "/apple-icon.png",
  },
  // openGraph = 分享到 iMessage、Slack、Facebook 等平台时的卡片信息。
  openGraph: {
    type: "website",
    title: "Nezu — Find a climbing buddy. Just text us.",
    description:
      "A friend that texts you a friend. Nezu finds real people, asks both sides, and opens the room.",
    siteName: "Nezu",
  },
  // twitter = 分享到 X / Twitter 时的卡片信息。
  twitter: {
    card: "summary_large_image",
    title: "Nezu — Gets you. Finds them.",
    description:
      "A friend that texts you a friend. Lives in iMessage. No app to download.",
  },
};

/**
 * viewport = 移动端显示规则。
 *
 * width: "device-width" 表示页面宽度跟随手机屏幕宽度；
 * initialScale: 1 表示默认不放大也不缩小；
 * themeColor 会影响部分浏览器顶部地址栏的颜色。
 */
export const viewport: Viewport = {
  width: "device-width",
  initialScale: 1,
  themeColor: [
    { media: "(prefers-color-scheme: light)", color: "#fbfbfa" },
    { media: "(prefers-color-scheme: dark)", color: "#111111" },
  ],
};

/**
 * RootLayout = 全站共用的最外层布局。
 *
 * Next.js 会把每个页面都塞进 children 这个位置。
 * 所以这里适合放全站共享的东西，比如：
 * - html 的语言设置
 * - 全局字体
 * - body 的基础颜色、字体、抗锯齿
 *
 * children：可以理解成“当前页面内容”的占位符。
 */
export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html
      // lang="en" 告诉浏览器和搜索引擎：这个网站主要语言是英文。
      lang="en"
      data-scroll-behavior="smooth"
      // 把上面加载的两套字体变量挂到 html 上，让全站 CSS 都能使用。
      className={`${playfair.variable} ${inter.variable}`}
      // suppressHydrationWarning 用来避免某些浏览器插件或主题切换造成的前后端渲染提示。
      suppressHydrationWarning
    >
      {/* body = 网页可见内容的最外层。这里设置全站默认字体、文字颜色和最小高度。 */}
      <body className="min-h-dvh font-sans text-brand-ink antialiased">
        {children}
      </body>
    </html>
  );
}
