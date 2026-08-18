import type { Metadata } from "next";

import { CartPageClient } from "@/components/cart/cart-page-client";

export const metadata: Metadata = { title: "Carrinho", description: "Revise os produtos selecionados antes de escolher a entrega." };

export default function CartPage() {
  return <div className="content-shell py-12 sm:py-16 lg:py-20"><CartPageClient /></div>;
}
