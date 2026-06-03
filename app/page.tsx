import { Header } from "@/components/sections/Header";
import { Hero } from "@/components/sections/Hero";
import { HowItWorks } from "@/components/sections/HowItWorks";
import { Banner } from "@/components/sections/Banner";
import { Stats } from "@/components/sections/Stats";
import { Comparison } from "@/components/sections/Comparison";
import { SeeIt } from "@/components/sections/SeeIt";
import { FAQ } from "@/components/sections/FAQ";
import { FinalCta } from "@/components/sections/FinalCta";
import { About } from "@/components/sections/About";
import { Footer } from "@/components/sections/Footer";

/**
 * 首页入口文件
 *
 * 你可以把这个文件理解成「首页目录」：
 * - Header：顶部导航栏
 * - main：页面主体内容，里面按从上到下的顺序放各个区块
 * - Footer：底部信息栏
 *
 * 专业词解释：
 * - Component / 组件：一块可复用的页面积木，例如 <Hero /> 是首页第一屏。
 * - JSX：这里这种像 HTML 的写法，React 会把它转换成真实网页。
 * - Fragment / 空标签 <>...</>：只负责包住多个组件，不会在网页里多生成一层元素。
 */
export default function HomePage() {
  return (
    <>
      {/* Header = 页面顶部导航栏，通常包含 Logo、菜单、按钮。 */}
      <Header />

      {/* main = 网页主要内容区域；搜索引擎和读屏软件会把它当作页面核心内容。 */}
      <main>
        {/* Hero = 首屏主视觉，用户打开网站第一眼看到的标题、介绍和主按钮。 */}
        <Hero />

        {/* HowItWorks = “怎么使用”区块，用步骤解释产品流程。 */}
        <HowItWorks />

        {/* Banner = 横幅区块，用来承接上一段内容或强调一句核心卖点。 */}
        <Banner />

        {/* Stats = 数据和用户反馈区块，用数字增强可信度。 */}
        <Stats />

        {/* Comparison = 对比区块，说明 Nezu 和传统交友 App 的区别。 */}
        <Comparison />

        {/* SeeIt = 展示效果区块，用图片和说明让用户看到产品体验。 */}
        <SeeIt />

        {/* FAQ = 常见问题区块，回答用户可能担心的问题。 */}
        <FAQ />

        {/* FinalCta = 页面底部的最终行动号召，引导用户点击或联系。 */}
        <FinalCta />

        {/* About = 关于我们区块，解释 Nezu 的理念和联系信息。 */}
        <About />
      </main>

      {/* Footer = 页脚，通常放版权、隐私政策、联系方式等。 */}
      <Footer />
    </>
  );
}
