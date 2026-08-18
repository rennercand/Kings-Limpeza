"use client";

import Image from "next/image";
import Link from "next/link";
import { ArrowRight, Minus, Plus, ShoppingBag, Trash2 } from "lucide-react";

import { useCart } from "@/components/cart/cart-provider";
import { Button } from "@/components/ui/button";
import { Separator } from "@/components/ui/separator";
import { getProductById } from "@/data/products";
import { formatCurrency } from "@/lib/currency";

export function CartPageClient() {
  const { lines, updateQuantity, removeItem, clearCart } = useCart();
  const detailedLines = lines.flatMap((line) => {
    const product = getProductById(line.productId);
    return product ? [{ ...line, product }] : [];
  });
  const subtotal = detailedLines.reduce((total, line) => total + line.product.price * line.quantity, 0);
  const originalTotal = detailedLines.reduce((total, line) => total + (line.product.compareAtPrice ?? line.product.price) * line.quantity, 0);
  const discount = originalTotal - subtotal;

  if (detailedLines.length === 0) {
    return (
      <section className="glass-panel mx-auto max-w-2xl rounded-[2rem] px-6 py-16 text-center sm:px-12">
        <span className="mx-auto flex size-14 items-center justify-center rounded-2xl border border-neon/20 bg-neon/10 text-neon"><ShoppingBag aria-hidden="true" /></span>
        <h1 className="mt-7 text-3xl font-semibold tracking-tight">Seu carrinho está vazio</h1>
        <p className="mx-auto mt-3 max-w-md leading-7 text-muted-foreground">Explore o catálogo e escolha os produtos ideais para sua rotina de cuidado.</p>
        <Button asChild size="lg" className="mt-8 min-h-12 rounded-full px-6"><Link href="/catalogo">Ver catálogo <ArrowRight aria-hidden="true" /></Link></Button>
      </section>
    );
  }

  return (
    <div className="grid gap-8 lg:grid-cols-[1fr_22rem] lg:items-start">
      <section aria-labelledby="cart-items-title">
        <div className="flex items-end justify-between gap-4">
          <div><p className="section-kicker">Sua seleção</p><h1 id="cart-items-title" className="mt-3 text-4xl font-semibold tracking-[-.04em] sm:text-5xl">Carrinho</h1></div>
          <Button type="button" variant="ghost" onClick={clearCart} className="min-h-11 text-muted-foreground hover:text-destructive"><Trash2 aria-hidden="true" /> Limpar</Button>
        </div>
        <div className="mt-8 space-y-4">
          {detailedLines.map(({ product, quantity }) => (
            <article key={product.id} className="glass-panel grid gap-5 rounded-3xl p-4 sm:grid-cols-[8rem_1fr] sm:p-5">
              <Link href={`/produto/${product.slug}`} className="relative aspect-[4/3] overflow-hidden rounded-2xl bg-surface sm:aspect-square" aria-label={`Abrir ${product.name}`}>
                <Image src={product.image} alt={product.imageAlt} fill sizes="(max-width: 640px) 92vw, 128px" className="object-cover" />
              </Link>
              <div className="flex min-w-0 flex-col justify-between gap-5">
                <div className="flex items-start justify-between gap-4">
                  <div><p className="font-mono text-xs text-neon">{product.volume}</p><h2 className="mt-2 text-lg font-semibold"><Link href={`/produto/${product.slug}`} className="hover:text-neon">{product.name}</Link></h2><p className="mt-2 text-sm text-muted-foreground">{formatCurrency(product.price)} por unidade</p></div>
                  <Button type="button" size="icon" variant="ghost" className="size-11 shrink-0 text-muted-foreground hover:text-destructive" onClick={() => removeItem(product.id)} aria-label={`Remover ${product.name}`}><Trash2 aria-hidden="true" /></Button>
                </div>
                <div className="flex flex-wrap items-center justify-between gap-4">
                  <div className="flex items-center rounded-full border border-neon/15 bg-background/50 p-1" aria-label={`Quantidade de ${product.name}`}>
                    <Button type="button" size="icon" variant="ghost" className="size-10 rounded-full" onClick={() => updateQuantity(product.id, quantity - 1)} aria-label={`Diminuir quantidade de ${product.name}`}><Minus aria-hidden="true" /></Button>
                    <span className="w-10 text-center font-mono text-sm" aria-live="polite">{quantity}</span>
                    <Button type="button" size="icon" variant="ghost" className="size-10 rounded-full" onClick={() => updateQuantity(product.id, quantity + 1)} aria-label={`Aumentar quantidade de ${product.name}`}><Plus aria-hidden="true" /></Button>
                  </div>
                  <p className="text-xl font-semibold text-cyan-100">{formatCurrency(product.price * quantity)}</p>
                </div>
              </div>
            </article>
          ))}
        </div>
      </section>

      <aside className="glass-panel rounded-3xl p-6 lg:sticky lg:top-24" aria-labelledby="cart-summary-title">
        <h2 id="cart-summary-title" className="text-xl font-semibold">Resumo</h2>
        <dl className="mt-6 space-y-4 text-sm">
          <div className="flex justify-between gap-4 text-muted-foreground"><dt>Subtotal</dt><dd>{formatCurrency(originalTotal)}</dd></div>
          {discount > 0 ? <div className="flex justify-between gap-4 text-cyan-200"><dt>Descontos</dt><dd>- {formatCurrency(discount)}</dd></div> : null}
          <div className="flex justify-between gap-4 text-muted-foreground"><dt>Entrega</dt><dd>Calcular depois</dd></div>
        </dl>
        <Separator className="my-6" />
        <div className="flex items-end justify-between gap-4"><span className="text-sm text-muted-foreground">Total parcial</span><strong className="text-2xl text-cyan-100">{formatCurrency(subtotal)}</strong></div>
        <Button asChild size="lg" className="mt-7 min-h-12 w-full rounded-full"><Link href="/checkout">Continuar para entrega <ArrowRight aria-hidden="true" /></Link></Button>
        <Button asChild variant="ghost" className="mt-2 min-h-11 w-full rounded-full text-muted-foreground"><Link href="/catalogo">Continuar comprando</Link></Button>
        <p className="mt-5 text-xs leading-5 text-muted-foreground">O estoque será confirmado de forma transacional quando o backend do pedido for conectado.</p>
      </aside>
    </div>
  );
}
