export const siteConfig = {
  name: "Kings Produtos de Limpeza",
  description: "Estética automotiva e produtos premium.",
  nav: [
    { label: "Serviços", href: "#servicos" },
    { label: "Resultados", href: "#resultados" },
    { label: "Processo", href: "#processo" },
    { label: "Contato", href: "#contato" },
  ],
  whatsappUrl: process.env.NEXT_PUBLIC_WHATSAPP_URL ?? "#contato",
} as const;
