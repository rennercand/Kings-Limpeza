import { ArrowUpRight, MessageCircle } from "lucide-react";

import { Reveal } from "@/components/marketing/reveal";
import { Button } from "@/components/ui/button";
import { siteConfig } from "@/config/site";

export function FinalCta() {
  return (
    <section id="contato" className="content-shell relative z-30 scroll-mt-24 py-20 sm:py-28">
      <Reveal className="glass-panel neon-border relative overflow-hidden rounded-[2rem] p-8 sm:p-12 lg:p-16">
        <div className="absolute -right-24 -top-24 size-72 rounded-full bg-neon/10 blur-3xl" aria-hidden="true" />
        <div className="relative flex flex-col items-start justify-between gap-9 lg:flex-row lg:items-end">
          <div className="max-w-3xl">
            <p className="section-kicker">Seu próximo nível começa aqui</p>
            <h2 className="mt-4 text-3xl font-semibold tracking-[-.04em] sm:text-5xl">Pronto para devolver presença ao seu carro?</h2>
            <p className="mt-5 max-w-2xl leading-7 text-muted-foreground">Fale com a Kings, receba uma recomendação personalizada e acompanhe a evolução do pedido pelo PWA.</p>
          </div>
          <Button asChild size="lg" className="min-h-12 shrink-0 rounded-full px-6">
            <a href={siteConfig.whatsappUrl}><MessageCircle aria-hidden="true" /> Conversar agora <ArrowUpRight aria-hidden="true" /></a>
          </Button>
        </div>
      </Reveal>
    </section>
  );
}
