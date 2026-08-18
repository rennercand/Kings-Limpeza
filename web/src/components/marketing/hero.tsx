import Image from "next/image";
import { ArrowRight, CheckCircle2, Sparkles } from "lucide-react";

import { Reveal } from "@/components/marketing/reveal";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { siteConfig } from "@/config/site";

export function Hero() {
  return (
    <section id="inicio" className="content-shell relative z-30 grid min-h-[calc(100svh-4.5rem)] items-center gap-12 py-16 lg:grid-cols-[1.05fr_.95fr] lg:py-20">
      <Reveal className="max-w-3xl">
        <Badge variant="outline" className="mb-7 gap-2 rounded-full border-neon/25 bg-neon/5 px-3 py-1.5 text-cyan-200">
          <span className="size-2 rounded-full bg-neon" /> Agenda aberta para esta semana
        </Badge>
        <p className="section-kicker">Performance em cada detalhe</p>
        <h1 className="mt-5 text-5xl font-semibold leading-[.95] tracking-[-.055em] sm:text-6xl lg:text-8xl">
          Seu carro em um novo <span className="text-gradient">nível de brilho.</span>
        </h1>
        <p className="mt-7 max-w-2xl text-base leading-7 text-slate-300 sm:text-lg">
          Estética automotiva de alta performance e uma curadoria de produtos que protegem, renovam e valorizam cada superfície.
        </p>
        <div className="mt-9 flex flex-col gap-3 sm:flex-row">
          <Button asChild size="lg" className="min-h-12 rounded-full px-6">
            <a href={siteConfig.whatsappUrl}>Solicitar orçamento <ArrowRight aria-hidden="true" /></a>
          </Button>
          <Button asChild size="lg" variant="outline" className="min-h-12 rounded-full border-neon/20 bg-white/3 px-6 hover:bg-neon/10">
            <a href="#servicos">Conhecer serviços</a>
          </Button>
        </div>
        <ul className="mt-9 flex flex-wrap gap-x-6 gap-y-3 text-sm text-slate-400">
          {["Atendimento consultivo", "Produtos premium", "Acabamento técnico"].map((item) => (
            <li key={item} className="flex items-center gap-2"><CheckCircle2 className="size-4 text-neon" aria-hidden="true" />{item}</li>
          ))}
        </ul>
      </Reveal>

      <Reveal delay={0.12} className="relative mx-auto w-full max-w-xl lg:max-w-none">
        <div className="neon-border glass-panel relative aspect-[4/5] overflow-hidden rounded-[2rem] sm:aspect-[5/4] lg:aspect-[4/5]">
          <Image
            src="https://images.unsplash.com/photo-1503376780353-7e6692767b70?auto=format&fit=crop&w=1800&q=90"
            alt="Carro esportivo preto com reflexos de luz após detalhamento automotivo"
            fill priority sizes="(max-width: 1024px) 92vw, 45vw" className="object-cover"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-background via-transparent to-blue-950/20" />
          <div className="glass-panel absolute inset-x-4 bottom-4 flex items-center gap-4 rounded-2xl p-4 sm:inset-x-6 sm:bottom-6">
            <span className="flex size-11 shrink-0 items-center justify-center rounded-xl bg-neon/10 text-neon"><Sparkles aria-hidden="true" /></span>
            <div><p className="text-sm font-medium">Resultado de alto impacto</p><p className="mt-1 text-xs text-muted-foreground">Proteção, profundidade e acabamento espelhado.</p></div>
          </div>
        </div>
      </Reveal>
    </section>
  );
}
