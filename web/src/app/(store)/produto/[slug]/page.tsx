import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import { notFound } from "next/navigation";
import { ArrowLeft, CheckCircle2, PackageCheck, ShieldCheck, Truck } from "lucide-react";

import { AddToCartButton } from "@/components/cart/add-to-cart-button";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { getProductBySlug, products } from "@/data/products";
import { formatCurrency } from "@/lib/currency";

interface ProductPageProps {
  params: Promise<{ slug: string }>;
}

export function generateStaticParams() {
  return products.map((product) => ({ slug: product.slug }));
}

export async function generateMetadata({ params }: ProductPageProps): Promise<Metadata> {
  const { slug } = await params;
  const product = getProductBySlug(slug);
  if (!product) return { title: "Produto não encontrado" };
  return { title: product.name, description: product.shortDescription };
}

export default async function ProductPage({ params }: ProductPageProps) {
  const { slug } = await params;
  const product = getProductBySlug(slug);
  if (!product) notFound();

  return (
    <div className="content-shell py-10 sm:py-14 lg:py-20">
      <Button asChild variant="ghost" className="mb-8 -ml-3 min-h-11 rounded-full text-muted-foreground hover:text-foreground">
        <Link href="/catalogo"><ArrowLeft aria-hidden="true" /> Voltar ao catálogo</Link>
      </Button>
      <div className="grid gap-10 lg:grid-cols-[1.05fr_.95fr] lg:items-start lg:gap-16">
        <div className="lg:sticky lg:top-24">
          <div className="neon-border relative aspect-square overflow-hidden rounded-[2rem] border border-neon/15 bg-surface">
            <Image src={product.image} alt={product.imageAlt} fill priority sizes="(max-width: 1024px) 92vw, 48vw" className="object-cover" />
            <div className="absolute inset-0 bg-gradient-to-t from-background/55 via-transparent to-transparent" />
            <Badge variant="outline" className="absolute left-5 top-5 rounded-full border-neon/25 bg-background/80 text-cyan-100 backdrop-blur-md">{product.categoryLabel}</Badge>
          </div>
        </div>

        <div>
          <p className="section-kicker">{product.volume}</p>
          <h1 className="mt-4 text-4xl font-semibold tracking-[-.045em] sm:text-6xl">{product.name}</h1>
          <p className="mt-6 text-base leading-7 text-muted-foreground sm:text-lg">{product.description}</p>

          <div className="mt-8 flex flex-wrap gap-2">
            {product.tags.map((tag) => <Badge key={tag} variant="outline" className="rounded-full border-neon/20 bg-neon/5 px-3 py-1.5 text-slate-200">{tag}</Badge>)}
          </div>

          <div className="mt-10 flex items-end gap-3">
            <span className="text-4xl font-semibold text-cyan-100">{formatCurrency(product.price)}</span>
            {product.compareAtPrice ? <span className="pb-1 text-base text-muted-foreground line-through">{formatCurrency(product.compareAtPrice)}</span> : null}
          </div>
          <p className="mt-2 text-sm text-muted-foreground">ou em condições a definir no checkout</p>

          <AddToCartButton productId={product.id} productName={product.name} className="mt-8 min-h-12 w-full sm:w-auto sm:px-8" />

          <section className="glass-panel mt-10 rounded-3xl p-6 sm:p-8" aria-labelledby="product-benefits">
            <h2 id="product-benefits" className="text-lg font-semibold">O que este produto entrega</h2>
            <ul className="mt-5 grid gap-4 sm:grid-cols-2">
              {product.benefits.map((benefit) => <li key={benefit} className="flex items-center gap-3 text-sm text-slate-300"><CheckCircle2 className="size-4 shrink-0 text-neon" aria-hidden="true" />{benefit}</li>)}
            </ul>
          </section>

          <div className="mt-5 grid gap-3 sm:grid-cols-3">
            {[{ icon: PackageCheck, text: `${product.stock} unidades disponíveis` }, { icon: ShieldCheck, text: "Compra protegida" }, { icon: Truck, text: "Entrega ou retirada" }].map(({ icon: Icon, text }) => (
              <div key={text} className="rounded-2xl border border-neon/10 bg-card/50 p-4 text-sm text-muted-foreground"><Icon className="mb-4 size-5 text-neon" aria-hidden="true" />{text}</div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}
