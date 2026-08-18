import type { Metadata } from "next";
import { PackageCheck, ShieldCheck, Truck } from "lucide-react";

import { CatalogClient } from "@/components/catalog/catalog-client";
import { products } from "@/data/products";

export const metadata: Metadata = {
  title: "Catálogo",
  description: "Produtos automotivos, residenciais e acessórios selecionados pela Kings.",
};

const assurances = [
  { icon: ShieldCheck, title: "Curadoria técnica", text: "Produtos selecionados para uso seguro e resultado consistente." },
  { icon: PackageCheck, title: "Estoque organizado", text: "Disponibilidade preparada para evoluir para dados em tempo real." },
  { icon: Truck, title: "Entrega flexível", text: "Retirada ou entrega com cálculo configurável no checkout." },
] as const;

export default function CatalogPage() {
  return (
    <div className="content-shell py-12 sm:py-16 lg:py-20">
      <header className="max-w-3xl">
        <p className="section-kicker">Catálogo Kings</p>
        <h1 className="mt-4 text-4xl font-semibold tracking-[-.045em] sm:text-6xl">Performance para cada etapa do cuidado.</h1>
        <p className="mt-6 max-w-2xl text-base leading-7 text-muted-foreground sm:text-lg">Encontre produtos para detalhamento automotivo, manutenção residencial e acessórios de acabamento.</p>
      </header>

      <div className="mt-10"><CatalogClient products={products} /></div>

      <section className="mt-20 grid gap-4 md:grid-cols-3" aria-label="Vantagens da Kings">
        {assurances.map(({ icon: Icon, title, text }) => (
          <article key={title} className="glass-panel rounded-2xl p-6">
            <Icon className="size-5 text-neon" aria-hidden="true" />
            <h2 className="mt-6 font-semibold">{title}</h2>
            <p className="mt-2 text-sm leading-6 text-muted-foreground">{text}</p>
          </article>
        ))}
      </section>
    </div>
  );
}
