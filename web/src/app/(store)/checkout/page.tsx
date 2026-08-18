import type { Metadata } from "next";

import { CheckoutClient } from "@/components/checkout/checkout-client";

export const metadata: Metadata = { title: "Checkout", description: "Informe os dados de entrega e revise seu pedido Kings." };

export default function CheckoutPage() {
  return <div className="content-shell py-12 sm:py-16 lg:py-20"><CheckoutClient /></div>;
}
