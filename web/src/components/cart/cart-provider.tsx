"use client";

import { createContext, useContext, useMemo, useSyncExternalStore } from "react";

import { getProductById } from "@/data/products";

export interface CartLine {
  productId: string;
  quantity: number;
}

interface CartContextValue {
  lines: readonly CartLine[];
  itemCount: number;
  addItem: (productId: string, quantity?: number) => void;
  updateQuantity: (productId: string, quantity: number) => void;
  removeItem: (productId: string) => void;
  clearCart: () => void;
}

const STORAGE_KEY = "kings-cart-v1";
const EMPTY_CART: readonly CartLine[] = [];
let memoryCart: readonly CartLine[] | null = null;
const listeners = new Set<() => void>();

function parseCart(value: string | null): readonly CartLine[] {
  if (!value) return EMPTY_CART;
  try {
    const parsed = JSON.parse(value) as unknown;
    if (!Array.isArray(parsed)) return EMPTY_CART;
    return parsed.flatMap((line) => {
      if (typeof line !== "object" || line === null) return [];
      const candidate = line as Partial<CartLine>;
      if (typeof candidate.productId !== "string" || typeof candidate.quantity !== "number") return [];
      return [{ productId: candidate.productId, quantity: Math.max(1, Math.floor(candidate.quantity)) }];
    });
  } catch {
    return EMPTY_CART;
  }
}

function getSnapshot() {
  if (memoryCart !== null) return memoryCart;
  if (typeof window === "undefined") return EMPTY_CART;
  memoryCart = parseCart(window.localStorage.getItem(STORAGE_KEY));
  return memoryCart;
}

function getServerSnapshot() {
  return EMPTY_CART;
}

function subscribe(listener: () => void) {
  listeners.add(listener);
  const handleStorage = (event: StorageEvent) => {
    if (event.key === STORAGE_KEY) {
      memoryCart = parseCart(event.newValue);
      listener();
    }
  };
  window.addEventListener("storage", handleStorage);
  return () => {
    listeners.delete(listener);
    window.removeEventListener("storage", handleStorage);
  };
}

function saveCart(lines: readonly CartLine[]) {
  memoryCart = lines;
  window.localStorage.setItem(STORAGE_KEY, JSON.stringify(lines));
  listeners.forEach((listener) => listener());
}

function addItem(productId: string, quantity = 1) {
  const current = getSnapshot();
  const existing = current.find((line) => line.productId === productId);
  const maxQuantity = getProductById(productId)?.stock ?? Number.MAX_SAFE_INTEGER;
  const next = existing
    ? current.map((line) => line.productId === productId ? { ...line, quantity: Math.min(line.quantity + quantity, maxQuantity) } : line)
    : [...current, { productId, quantity: Math.min(quantity, maxQuantity) }];
  saveCart(next);
}

function updateQuantity(productId: string, quantity: number) {
  if (quantity < 1) {
    removeItem(productId);
    return;
  }
  const maxQuantity = getProductById(productId)?.stock ?? Number.MAX_SAFE_INTEGER;
  saveCart(getSnapshot().map((line) => line.productId === productId ? { ...line, quantity: Math.min(quantity, maxQuantity) } : line));
}

function removeItem(productId: string) {
  saveCart(getSnapshot().filter((line) => line.productId !== productId));
}

function clearCart() {
  saveCart(EMPTY_CART);
}

const CartContext = createContext<CartContextValue | null>(null);

export function CartProvider({ children }: { children: React.ReactNode }) {
  const lines = useSyncExternalStore(subscribe, getSnapshot, getServerSnapshot);
  const itemCount = lines.reduce((total, line) => total + line.quantity, 0);
  const value = useMemo(() => ({ lines, itemCount, addItem, updateQuantity, removeItem, clearCart }), [lines, itemCount]);

  return <CartContext.Provider value={value}>{children}</CartContext.Provider>;
}

export function useCart() {
  const context = useContext(CartContext);
  if (!context) throw new Error("useCart deve ser usado dentro de CartProvider");
  return context;
}
