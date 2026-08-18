export const siteConfig = {
  name: "Kings Produtos de Limpeza",
  description: "Estética automotiva e produtos premium.",
  nav: [
    { label: "Início", href: "/" },
    { label: "Catálogo", href: "/catalogo" },
    { label: "Serviços", href: "/#servicos" },
    { label: "Resultados", href: "/#resultados" },
  ],
  whatsappUrl: process.env.NEXT_PUBLIC_WHATSAPP_URL ?? "/#contato",
} as const;
