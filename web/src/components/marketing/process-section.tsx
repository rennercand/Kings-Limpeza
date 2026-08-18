import { Reveal } from "@/components/marketing/reveal";

const steps = [
  ["01", "Diagnóstico", "Entendemos o veículo, o uso e o resultado esperado."],
  ["02", "Plano de cuidado", "Selecionamos técnicas, produtos e nível de proteção."],
  ["03", "Execução", "Aplicamos o processo com controle e acabamento detalhado."],
  ["04", "Entrega", "Orientamos a manutenção para preservar o resultado."],
] as const;

export function ProcessSection() {
  return (
    <section id="processo" className="content-shell relative z-30 scroll-mt-24 py-20 sm:py-28">
      <Reveal className="text-center">
        <p className="section-kicker">Processo transparente</p>
        <h2 className="mx-auto mt-4 max-w-3xl text-3xl font-semibold tracking-[-.035em] sm:text-5xl">Do primeiro contato à entrega, sem ruído.</h2>
      </Reveal>
      <div className="mt-12 grid gap-4 md:grid-cols-4">
        {steps.map(([number, title, description], index) => (
          <Reveal key={number} delay={index * 0.06} className="glass-panel rounded-2xl p-6">
            <span className="font-mono text-xs text-neon">{number}</span>
            <h3 className="mt-8 text-lg font-semibold">{title}</h3>
            <p className="mt-3 text-sm leading-6 text-muted-foreground">{description}</p>
          </Reveal>
        ))}
      </div>
    </section>
  );
}
