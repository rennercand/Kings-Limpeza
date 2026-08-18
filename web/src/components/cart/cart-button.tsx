"use client";

import Link from "next/link";
import { ShoppingBag } from "lucide-react";

import { Button } from "@/components/ui/button";
import { useCart } from "@/components/cart/cart-provider";
import { cn } from "@/lib/utils";

export function CartButton({ compact = false, className }: { compact?: boolean; className?: string }) {
  const { itemCount } = useCart();

  return (
    <Button asChild variant="outline" size={compact ? "icon" : "default"} className={cn("relative min-h-11 border-neon/20 bg-neon/5", !compact && "rounded-full px-4", className)}>
      <Link href="/carrinho" aria-label={`Carrinho com ${itemCount} ${itemCount === 1 ? "item" : "itens"}`}>
        <ShoppingBag aria-hidden="true" />
        {compact ? null : <span>Carrinho</span>}
        {itemCount > 0 ? (
          <span className={cn("flex min-w-5 items-center justify-center rounded-full bg-primary px-1.5 text-[.65rem] font-bold text-primary-foreground", compact && "absolute -right-1.5 -top-1.5 h-5")}>
            {itemCount > 99 ? "99+" : itemCount}
          </span>
        ) : null}
      </Link>
    </Button>
  );
}
