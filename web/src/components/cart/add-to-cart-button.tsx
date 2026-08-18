"use client";

import { useEffect, useRef, useState } from "react";
import { Check, ShoppingBag } from "lucide-react";

import { Button } from "@/components/ui/button";
import { useCart } from "@/components/cart/cart-provider";
import { cn } from "@/lib/utils";

interface AddToCartButtonProps {
  productId: string;
  productName: string;
  className?: string;
  quantity?: number;
}

export function AddToCartButton({ productId, productName, className, quantity = 1 }: AddToCartButtonProps) {
  const { addItem } = useCart();
  const [added, setAdded] = useState(false);
  const timerRef = useRef<ReturnType<typeof setTimeout> | null>(null);

  useEffect(() => () => {
    if (timerRef.current) clearTimeout(timerRef.current);
  }, []);

  function handleAdd() {
    addItem(productId, quantity);
    setAdded(true);
    if (timerRef.current) clearTimeout(timerRef.current);
    timerRef.current = setTimeout(() => setAdded(false), 1400);
  }

  return (
    <Button
      type="button"
      onClick={handleAdd}
      className={cn("min-h-11 rounded-full", className)}
      aria-label={`Adicionar ${productName} ao carrinho`}
    >
      {added ? <Check aria-hidden="true" /> : <ShoppingBag aria-hidden="true" />}
      {added ? "Adicionado" : "Adicionar"}
    </Button>
  );
}
