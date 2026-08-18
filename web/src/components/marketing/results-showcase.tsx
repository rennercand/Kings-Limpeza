import Image from "next/image";
import { Gauge, Shield, Sparkles } from "lucide-react";

import { Reveal } from "@/components/marketing/reveal";

const metrics = [
  { icon: Sparkles, value: "+90%", label: "mais profundidade visual" },
  { icon: Shield, value: "9H", label: "proteção cerâmica" },
  { icon: Gauge, value: "3 anos", label: "de durabilidade estimada" },
];

export function ResultsShowcase() {
  return (
    <section id="resultados" className="content-shell relative z-30 scroll-mt-24 py-20 sm:py-28">
      <div className="grid items-center gap-10 lg:grid-cols-2 lg:gap-16">
        <Reveal className="neon-border relative aspect-[4/3] overflow-hidden rounded-3xl">
          <Image src="https://images.unsplash.com/photo-1544829099-b9a0c07fad1a?auto=format&fit=crop&w=1600&q=90" alt="Detalhe do acabamento brilhante de um carro esportivo" fill sizes="(max-width: 1024px) 92vw, 48vw" className="object-cover" />
          <div className="absolute inset-0 bg-gradient-to-tr from-background/50 via-transparent to-neon/10" />
        </Reveal>
        <Reveal delay={0.08}>
          <p className="section-kicker">Resultado visível</p>
          <h2 className="mt-4 text-3xl font-semibold tracking-[-.035em] sm:text-5xl">Tecnologia que você percebe na primeira luz.</h2>
          <p className="mt-6 leading-7 text-muted-foreground">Cada etapa combina diagnóstico, técnica e produtos selecionados para entregar brilho consistente sem comprometer a integridade das superfícies.</p>
          <div className="mt-9 grid gap-3 sm:grid-cols-3">
            {metrics.map(({ icon: Icon, value, label }) => (
              <div key={label} className="glass-panel rounded-2xl p-4">
                <Icon className="size-5 text-neon" aria-hidden="true" />
                <p className="mt-5 text-xl font-semibold">{value}</p>
                <p className="mt-1 text-xs leading-5 text-muted-foreground">{label}</p>
              </div>
            ))}
          </div>
        </Reveal>
      </div>
    </section>
  );
}
