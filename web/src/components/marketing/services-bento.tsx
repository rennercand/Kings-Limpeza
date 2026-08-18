import { Reveal } from "@/components/marketing/reveal";
import { BentoGrid } from "@/components/ui/bento-grid";
import { services } from "@/data/services";

export function ServicesBento() {
  return (
    <section id="servicos" className="content-shell relative z-30 scroll-mt-24 py-20 sm:py-28">
      <Reveal className="mb-10 max-w-2xl">
        <p className="section-kicker">Soluções Kings</p>
        <h2 className="mt-4 text-3xl font-semibold tracking-[-.035em] sm:text-5xl">Cuidado completo, organizado em experiências.</h2>
        <p className="mt-5 leading-7 text-muted-foreground">Uma base visual pronta para evoluir de vitrine para catálogo, carrinho e agendamento dentro do PWA.</p>
      </Reveal>
      <Reveal delay={0.08}><BentoGrid items={services} /></Reveal>
    </section>
  );
}
