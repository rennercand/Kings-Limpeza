"use client";

import type { FormEvent } from "react";
import { useState } from "react";
import Link from "next/link";
import { ArrowLeft, CheckCircle2, MapPin, PackageCheck, Truck } from "lucide-react";

import { useCart } from "@/components/cart/cart-provider";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { RadioGroup, RadioGroupItem } from "@/components/ui/radio-group";
import { Separator } from "@/components/ui/separator";
import { Textarea } from "@/components/ui/textarea";
import { getProductById } from "@/data/products";
import { formatCurrency } from "@/lib/currency";

export function CheckoutClient() {
  const { lines } = useCart();
  const [delivery, setDelivery] = useState("entrega");
  const [submitted, setSubmitted] = useState(false);
  const detailedLines = lines.flatMap((line) => {
    const product = getProductById(line.productId);
    return product ? [{ ...line, product }] : [];
  });
  const subtotal = detailedLines.reduce((total, line) => total + line.product.price * line.quantity, 0);

  function handleSubmit(event: FormEvent<HTMLFormElement>) {
    event.preventDefault();
    setSubmitted(true);
  }

  if (detailedLines.length === 0) {
    return (
      <section className="glass-panel mx-auto max-w-xl rounded-3xl p-8 text-center sm:p-12">
        <PackageCheck className="mx-auto size-10 text-neon" aria-hidden="true" />
        <h1 className="mt-6 text-3xl font-semibold">Adicione produtos antes do checkout</h1>
        <p className="mt-3 text-muted-foreground">Seu resumo de entrega aparecerá aqui quando o carrinho tiver itens.</p>
        <Button asChild className="mt-8 min-h-12 rounded-full px-6"><Link href="/catalogo">Ir para o catálogo</Link></Button>
      </section>
    );
  }

  return (
    <div>
      <Button asChild variant="ghost" className="-ml-3 min-h-11 rounded-full text-muted-foreground"><Link href="/carrinho"><ArrowLeft aria-hidden="true" /> Voltar ao carrinho</Link></Button>
      <div className="mt-7 flex flex-wrap items-center gap-3 font-mono text-xs uppercase tracking-wider text-muted-foreground" aria-label="Etapas do checkout">
        <span>Carrinho</span><span aria-hidden="true">/</span><span className="text-neon">Entrega</span><span aria-hidden="true">/</span><span>Confirmação</span>
      </div>
      <div className="mt-8 grid gap-8 lg:grid-cols-[1fr_23rem] lg:items-start">
        <form onSubmit={handleSubmit} className="space-y-6">
          <section className="glass-panel rounded-3xl p-6 sm:p-8" aria-labelledby="customer-data-title">
            <p className="section-kicker">01. Identificação</p>
            <h1 id="customer-data-title" className="mt-3 text-3xl font-semibold tracking-tight">Dados para o pedido</h1>
            <div className="mt-7 grid gap-5 sm:grid-cols-2">
              <div className="sm:col-span-2"><Label htmlFor="full-name">Nome completo</Label><Input id="full-name" name="fullName" autoComplete="name" required className="mt-2 h-11 bg-background/55" /></div>
              <div><Label htmlFor="email">E-mail</Label><Input id="email" name="email" type="email" autoComplete="email" required className="mt-2 h-11 bg-background/55" /></div>
              <div><Label htmlFor="phone">WhatsApp</Label><Input id="phone" name="phone" type="tel" inputMode="tel" autoComplete="tel" required className="mt-2 h-11 bg-background/55" /></div>
            </div>
          </section>

          <section className="glass-panel rounded-3xl p-6 sm:p-8" aria-labelledby="delivery-title">
            <p className="section-kicker">02. Recebimento</p>
            <h2 id="delivery-title" className="mt-3 text-2xl font-semibold">Como você quer receber?</h2>
            <RadioGroup value={delivery} onValueChange={setDelivery} className="mt-6 grid gap-3 sm:grid-cols-2">
              <Label htmlFor="delivery-home" className="flex min-h-24 cursor-pointer items-start gap-3 rounded-2xl border border-neon/15 bg-background/40 p-4 has-[[data-state=checked]]:border-neon/50 has-[[data-state=checked]]:bg-neon/5">
                <RadioGroupItem id="delivery-home" value="entrega" className="mt-1" /><Truck className="mt-0.5 size-5 text-neon" aria-hidden="true" /><span><span className="block font-medium text-foreground">Entrega</span><span className="mt-1 block text-sm leading-5 text-muted-foreground">Taxa calculada após o endereço.</span></span>
              </Label>
              <Label htmlFor="delivery-pickup" className="flex min-h-24 cursor-pointer items-start gap-3 rounded-2xl border border-neon/15 bg-background/40 p-4 has-[[data-state=checked]]:border-neon/50 has-[[data-state=checked]]:bg-neon/5">
                <RadioGroupItem id="delivery-pickup" value="retirada" className="mt-1" /><MapPin className="mt-0.5 size-5 text-neon" aria-hidden="true" /><span><span className="block font-medium text-foreground">Retirada</span><span className="mt-1 block text-sm leading-5 text-muted-foreground">Agendamento sem taxa de entrega.</span></span>
              </Label>
            </RadioGroup>

            {delivery === "entrega" ? (
              <div className="mt-7 grid gap-5 sm:grid-cols-6">
                <div className="sm:col-span-2"><Label htmlFor="postal-code">CEP</Label><Input id="postal-code" name="postalCode" inputMode="numeric" autoComplete="postal-code" required className="mt-2 h-11 bg-background/55" /></div>
                <div className="sm:col-span-4"><Label htmlFor="street">Endereço</Label><Input id="street" name="street" autoComplete="street-address" required className="mt-2 h-11 bg-background/55" /></div>
                <div className="sm:col-span-2"><Label htmlFor="number">Número</Label><Input id="number" name="number" inputMode="numeric" required className="mt-2 h-11 bg-background/55" /></div>
                <div className="sm:col-span-4"><Label htmlFor="complement">Complemento</Label><Input id="complement" name="complement" autoComplete="address-line2" className="mt-2 h-11 bg-background/55" /></div>
              </div>
            ) : null}
            <div className="mt-5"><Label htmlFor="notes">Observações</Label><Textarea id="notes" name="notes" className="mt-2 min-h-24 bg-background/55" placeholder="Informações úteis para a separação ou entrega" /></div>
          </section>

          <Button type="submit" size="lg" className="min-h-12 w-full rounded-full sm:w-auto sm:px-8">Revisar pedido <CheckCircle2 aria-hidden="true" /></Button>
          {submitted ? <p className="rounded-2xl border border-neon/25 bg-neon/10 p-4 text-sm leading-6 text-cyan-100" role="status">Fluxo visual concluído. Na próxima etapa, este botão enviará o pedido para a API e abrirá a confirmação pelo WhatsApp.</p> : null}
        </form>

        <aside className="glass-panel rounded-3xl p-6 lg:sticky lg:top-24" aria-labelledby="checkout-summary-title">
          <h2 id="checkout-summary-title" className="text-xl font-semibold">Seu pedido</h2>
          <ul className="mt-6 space-y-4">
            {detailedLines.map(({ product, quantity }) => <li key={product.id} className="flex justify-between gap-4 text-sm"><span className="text-muted-foreground">{quantity} × {product.name}</span><span className="shrink-0">{formatCurrency(product.price * quantity)}</span></li>)}
          </ul>
          <Separator className="my-6" />
          <div className="flex justify-between gap-4 text-sm text-muted-foreground"><span>Entrega</span><span>{delivery === "retirada" ? "Sem taxa" : "A calcular"}</span></div>
          <div className="mt-5 flex items-end justify-between gap-4"><span className="text-sm text-muted-foreground">Total parcial</span><strong className="text-2xl text-cyan-100">{formatCurrency(subtotal)}</strong></div>
          <p className="mt-5 text-xs leading-5 text-muted-foreground">Nenhuma cobrança é realizada nesta versão visual do checkout.</p>
        </aside>
      </div>
    </div>
  );
}
