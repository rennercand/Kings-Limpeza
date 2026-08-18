import { Menu, MessageCircle } from "lucide-react";

import { BrandMark } from "@/components/site/brand-mark";
import { Button } from "@/components/ui/button";
import { Sheet, SheetContent, SheetHeader, SheetTitle, SheetTrigger } from "@/components/ui/sheet";
import { siteConfig } from "@/config/site";

export function SiteHeader() {
  return (
    <header className="sticky top-0 z-50 border-b border-white/5 bg-background/70 backdrop-blur-xl">
      <div className="content-shell flex h-[4.5rem] items-center justify-between">
        <a href="#inicio" aria-label="Kings Produtos de Limpeza — início"><BrandMark /></a>
        <nav className="hidden items-center gap-7 md:flex" aria-label="Navegação principal">
          {siteConfig.nav.map((item) => (
            <a key={item.href} href={item.href} className="text-sm text-slate-300 transition-colors hover:text-neon">{item.label}</a>
          ))}
        </nav>
        <div className="hidden md:block">
          <Button asChild className="min-h-11 rounded-full px-5 shadow-[0_0_28px_rgba(34,211,238,.12)]">
            <a href={siteConfig.whatsappUrl}><MessageCircle aria-hidden="true" /> Falar no WhatsApp</a>
          </Button>
        </div>
        <Sheet>
          <SheetTrigger asChild className="md:hidden">
            <Button size="icon" variant="outline" aria-label="Abrir menu"><Menu aria-hidden="true" /></Button>
          </SheetTrigger>
          <SheetContent className="border-neon/15 bg-background/95 px-6">
            <SheetHeader><SheetTitle className="sr-only">Menu principal</SheetTitle></SheetHeader>
            <div className="mt-12 flex flex-col gap-6">
              {siteConfig.nav.map((item) => (
                <a key={item.href} href={item.href} className="text-lg text-slate-200">{item.label}</a>
              ))}
              <Button asChild className="mt-4 min-h-12"><a href={siteConfig.whatsappUrl}>Falar no WhatsApp</a></Button>
            </div>
          </SheetContent>
        </Sheet>
      </div>
    </header>
  );
}
