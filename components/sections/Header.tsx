"use client";

import { useEffect, useState } from "react";
import { AnimatePresence, motion } from "framer-motion";
import { Menu, X } from "lucide-react";
import { LogoLockup } from "@/components/brand/LogoMark";
import { siteContent } from "@/lib/content";
import { cn } from "@/lib/cn";

/**
 * 顶部导航
 * - 固定在顶部，不随页面滚走
 * - Hero 内：透明毛玻璃 + 白字
 * - 滚过 Hero 后：Figma 参考的白底黑字 pill 导航
 * - 移动端：Logo + 汉堡菜单
 */
export function Header() {
  const [open, setOpen] = useState(false);
  const [pastHero, setPastHero] = useState(false);
  const { nav } = siteContent;

  useEffect(() => {
    const updateHeaderTone = () => {
      const hero = document.getElementById("top");
      const threshold = hero ? hero.offsetHeight - 80 : window.innerHeight - 80;
      setPastHero(window.scrollY >= threshold);
    };

    updateHeaderTone();
    window.addEventListener("scroll", updateHeaderTone, { passive: true });
    window.addEventListener("resize", updateHeaderTone);

    return () => {
      window.removeEventListener("scroll", updateHeaderTone);
      window.removeEventListener("resize", updateHeaderTone);
    };
  }, []);

  return (
    <header className="fixed left-0 right-0 top-3 z-50 pointer-events-none md:top-5">
      <div className="container-page">
        <div
          className={cn(
            "pointer-events-auto flex h-14 items-center justify-between rounded-[40px] border px-4 backdrop-blur-xl transition-all duration-300 ease-[var(--ease-spring)] md:px-6",
            pastHero
              ? "border-black/[0.05] bg-white/95 text-brand-ink shadow-[0_4px_16px_rgba(0,0,0,0.08)]"
              : "border-white/20 bg-white/10 text-white shadow-[0_8px_32px_rgba(0,0,0,0.12)]",
          )}
        >
          <a href="#top" className="flex items-center" aria-label="Nezu home">
            <LogoLockup
              variant={pastHero ? "color" : "mono-paper"}
              size={28}
            />
          </a>

          {/* desktop nav */}
          <nav className="hidden items-center gap-8 md:flex" aria-label="Primary">
            {nav.map((item) => (
              <a
                key={item.href}
                href={item.href}
                className={cn(
                  "text-[14px] font-bold tracking-[-0.02em] transition-colors",
                  pastHero
                    ? "text-brand-ink hover:text-brand-blue"
                    : "text-white/90 hover:text-white",
                )}
              >
                {item.label}
              </a>
            ))}
          </nav>

          {/* mobile hamburger */}
          <button
            type="button"
            className={cn(
              "md:hidden inline-flex h-10 w-10 items-center justify-center rounded-full transition-colors",
              pastHero
                ? "bg-transparent text-brand-ink hover:bg-transparent"
                : "bg-transparent text-white hover:bg-transparent",
            )}
            onClick={() => setOpen((v) => !v)}
            aria-label={open ? "Close menu" : "Open menu"}
            aria-expanded={open}
          >
            {open ? <X size={20} /> : <Menu size={20} />}
          </button>
        </div>
      </div>

      {/* mobile dropdown */}
      <AnimatePresence>
        {open ? (
          <motion.div
            key="mobile-menu"
            initial={{ opacity: 0, y: -12, scale: 0.96 }}
            animate={{ opacity: 1, y: 0, scale: 1 }}
            exit={{ opacity: 0, y: -10, scale: 0.97 }}
            transition={{
              type: "spring",
              stiffness: 420,
              damping: 28,
              mass: 0.8,
            }}
            className={cn(
              "pointer-events-auto mx-5 mt-2 origin-top overflow-hidden rounded-[28px] bg-white/85 shadow-card-soft backdrop-blur-xl md:hidden",
            )}
          >
            <nav className="px-5 py-6" aria-label="Mobile">
              <motion.ul
                initial="hidden"
                animate="visible"
                exit="hidden"
                variants={{
                  hidden: {},
                  visible: {
                    transition: {
                      staggerChildren: 0.045,
                      delayChildren: 0.04,
                    },
                  },
                }}
                className="flex flex-col gap-1"
              >
                {nav.map((item) => (
                  <motion.li
                    key={item.href}
                    variants={{
                      hidden: { opacity: 0, x: -8 },
                      visible: {
                        opacity: 1,
                        x: 0,
                        transition: {
                          type: "spring",
                          stiffness: 420,
                          damping: 30,
                        },
                      },
                    }}
                  >
                    <a
                      href={item.href}
                      onClick={() => setOpen(false)}
                      className={cn(
                        "flex items-center justify-between rounded-lg px-3 py-3 text-base font-medium text-brand-ink transition-colors hover:bg-brand-ink/5",
                      )}
                    >
                      {item.label}
                      <span
                        className="text-brand-ink/35"
                        aria-hidden
                      >
                        →
                      </span>
                    </a>
                  </motion.li>
                ))}
              </motion.ul>
            </nav>
          </motion.div>
        ) : null}
      </AnimatePresence>
    </header>
  );
}
