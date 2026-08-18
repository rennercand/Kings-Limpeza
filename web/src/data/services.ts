import { Clock3, Droplets, ShieldCheck, Sparkles } from "lucide-react";

export const services = [
  {
    title: "Proteção Cerâmica 9H",
    meta: "Até 3 anos",
    description: "Camada de proteção hidrofóbica contra raios UV, contaminantes e microagressões.",
    icon: ShieldCheck,
    status: "Destaque",
    tags: ["Vitrificação", "Brilho profundo"],
    featured: true,
  },
  {
    title: "Lavagem Premium",
    meta: "Snow Foam",
    description: "Limpeza técnica com produtos de pH controlado que preservam pintura e proteção.",
    icon: Droplets,
    status: "Popular",
    tags: ["Exterior", "pH neutro"],
  },
  {
    title: "Higienização Interna",
    meta: "Anti-odor",
    description: "Tratamento completo de tecidos, couro, plásticos e ar-condicionado com acabamento seco.",
    icon: Clock3,
    tags: ["Interior", "Couro"],
    featured: true,
  },
  {
    title: "Polimento Técnico",
    meta: "Correção",
    description: "Correção segura de hologramas, oxidação e micro-riscos para recuperar a profundidade da cor.",
    icon: Sparkles,
    status: "Premium",
    tags: ["Pintura", "Refino"],
  },
] as const;
