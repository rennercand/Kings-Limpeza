import { BrandMark } from "@/components/site/brand-mark";
import { siteConfig } from "@/config/site";

export function SiteFooter() {
  return (
    <footer className="relative z-30 border-t border-white/5 py-10">
      <div className="content-shell flex flex-col items-center justify-between gap-6 sm:flex-row">
        <BrandMark />
        <p className="text-center text-xs text-muted-foreground sm:text-right">
          © {new Date().getFullYear()} {siteConfig.name}. Design preview para evolução do produto.
        </p>
      </div>
    </footer>
  );
}
