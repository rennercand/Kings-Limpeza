import Image from "next/image";
import Link from "next/link";
import { ArrowUpRight } from "lucide-react";

import { AddToCartButton } from "@/components/cart/add-to-cart-button";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import type { Product } from "@/data/products";
import { formatCurrency } from "@/lib/currency";

export function ProductCard({ product, priority = false }: { product: Product; priority?: boolean }) {
  return (
    <article className="group flex h-full flex-col overflow-hidden rounded-3xl border border-neon/15 bg-card/70 shadow-[0_20px_60px_rgba(0,0,0,.22)] transition-[border-color,transform] duration-300 hover:-translate-y-1 hover:border-neon/35">
      <Link href={`/produto/${product.slug}`} className="relative block aspect-[4/3] overflow-hidden bg-surface" aria-label={`Ver detalhes de ${product.name}`}>
        <Image src={product.image} alt={product.imageAlt} fill priority={priority} sizes="(max-width: 640px) 92vw, (max-width: 1024px) 45vw, 30vw" className="object-cover transition-transform duration-500 group-hover:scale-[1.03]" />
        <div className="absolute inset-0 bg-gradient-to-t from-background/80 via-transparent to-transparent" />
        <Badge variant="outline" className="absolute left-4 top-4 rounded-full border-neon/25 bg-background/80 text-cyan-100 backdrop-blur-md">
          {product.categoryLabel}
        </Badge>
        {product.compareAtPrice ? <Badge className="absolute right-4 top-4 rounded-full">Oferta</Badge> : null}
      </Link>
      <div className="flex flex-1 flex-col p-5 sm:p-6">
        <div className="flex items-center justify-between gap-3 font-mono text-xs text-muted-foreground">
          <span>{product.volume}</span>
          <span>{product.stock > 10 ? "Em estoque" : `Últimas ${product.stock} unidades`}</span>
        </div>
        <h2 className="mt-4 text-xl font-semibold tracking-tight">{product.name}</h2>
        <p className="mt-3 text-sm leading-6 text-muted-foreground">{product.shortDescription}</p>
        <div className="mt-auto pt-6">
          <div className="flex items-end gap-2">
            <span className="text-2xl font-semibold text-cyan-100">{formatCurrency(product.price)}</span>
            {product.compareAtPrice ? <span className="pb-1 text-sm text-muted-foreground line-through">{formatCurrency(product.compareAtPrice)}</span> : null}
          </div>
          <div className="mt-5 grid grid-cols-[1fr_auto] gap-2">
            <AddToCartButton productId={product.id} productName={product.name} className="w-full" />
            <Button asChild size="icon" variant="outline" className="size-11 rounded-full" aria-label={`Abrir ${product.name}`}>
              <Link href={`/produto/${product.slug}`}><ArrowUpRight aria-hidden="true" /></Link>
            </Button>
          </div>
        </div>
      </div>
    </article>
  );
}
