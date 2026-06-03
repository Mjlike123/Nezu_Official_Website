import Link from "next/link";
import { Container } from "@/components/ui/Container";
import { LogoLockup } from "@/components/brand/LogoMark";
import { siteContent } from "@/lib/content";

export function Footer() {
  const { footer, brand } = siteContent;

  return (
    <footer className="border-t border-white/10 bg-brand-ink py-10 text-white">
      <Container>
        <div className="flex flex-col items-start justify-between gap-6 md:flex-row md:items-center">
          <div>
            <LogoLockup variant="mono-paper" size={32} />
            <p className="mt-2 text-sm text-white/60">{brand.slogan}</p>
          </div>

          <div className="flex flex-col items-start gap-4 md:flex-row md:items-center md:gap-8">
            <ul className="flex flex-wrap items-center gap-2">
              {footer.legal.map((item) => {
                const className =
                  "inline-flex items-center text-sm font-semibold text-white/70 transition hover:text-white";

                return (
                  <li key={item.href}>
                    {item.href.startsWith("/") ? (
                      <Link href={item.href} className={className}>
                        {item.label}
                      </Link>
                    ) : (
                      <a href={item.href} className={className}>
                        {item.label}
                      </a>
                    )}
                  </li>
                );
              })}
            </ul>
            <span className="text-sm text-white/50">{footer.copyright}</span>
          </div>
        </div>
      </Container>
    </footer>
  );
}
