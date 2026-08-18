import { FinalCta } from "@/components/marketing/final-cta";
import { Hero } from "@/components/marketing/hero";
import { MouseGlow } from "@/components/marketing/mouse-glow";
import { ProcessSection } from "@/components/marketing/process-section";
import { ResultsShowcase } from "@/components/marketing/results-showcase";
import { ServicesBento } from "@/components/marketing/services-bento";
import { SiteFooter } from "@/components/site/site-footer";
import { SiteHeader } from "@/components/site/site-header";

export default function Home() {
  return (
    <>
      <a href="#conteudo-principal" className="sr-only fixed left-4 top-4 z-[100] rounded-md bg-primary px-4 py-3 text-primary-foreground focus:not-sr-only">
        Pular para o conteúdo
      </a>
      <div className="relative min-h-screen overflow-hidden bg-background selection:bg-neon/30">
        <MouseGlow />
        <div className="tech-grid pointer-events-none fixed inset-0" aria-hidden="true" />
        <SiteHeader />
        <main id="conteudo-principal">
          <Hero />
          <ServicesBento />
          <ResultsShowcase />
          <ProcessSection />
          <FinalCta />
        </main>
        <SiteFooter />
      </div>
    </>
  );
}
