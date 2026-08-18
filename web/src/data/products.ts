export type ProductCategory = "automotivo" | "residencial" | "acessorios";

export interface Product {
  id: string;
  slug: string;
  name: string;
  category: ProductCategory;
  categoryLabel: string;
  shortDescription: string;
  description: string;
  price: number;
  compareAtPrice?: number;
  stock: number;
  featured: boolean;
  volume: string;
  image: string;
  imageAlt: string;
  tags: readonly string[];
  benefits: readonly string[];
}

export const products: readonly Product[] = [
  {
    id: "pro-vitrifica-500",
    slug: "vitrificador-ceramico-pro-9h",
    name: "Vitrificador Cerâmico Pro 9H",
    category: "automotivo",
    categoryLabel: "Linha automotiva",
    shortDescription: "Proteção cerâmica de alto brilho e repelência duradoura.",
    description: "Revestimento cerâmico desenvolvido para criar uma camada hidrofóbica resistente, intensificar a profundidade da pintura e facilitar as lavagens de manutenção.",
    price: 18990,
    compareAtPrice: 21990,
    stock: 18,
    featured: true,
    volume: "500 ml",
    image: "https://images.unsplash.com/photo-1607860108855-64acf2078ed9?auto=format&fit=crop&w=1200&q=85",
    imageAlt: "Aplicação de produto de detalhamento na pintura de um veículo",
    tags: ["Proteção 9H", "Hidrofóbico", "Brilho profundo"],
    benefits: ["Resistência a raios UV", "Manutenção simplificada", "Acabamento espelhado"],
  },
  {
    id: "snow-foam-1l",
    slug: "shampoo-snow-foam-ph-neutro",
    name: "Shampoo Snow Foam pH Neutro",
    category: "automotivo",
    categoryLabel: "Linha automotiva",
    shortDescription: "Espuma densa para uma pré-lavagem segura e eficiente.",
    description: "Shampoo concentrado com alto poder de lubrificação para remover sujeira sem agredir ceras, selantes ou revestimentos cerâmicos já aplicados.",
    price: 5490,
    stock: 42,
    featured: true,
    volume: "1 litro",
    image: "https://images.unsplash.com/photo-1520340356584-f9917d1eea6f?auto=format&fit=crop&w=1200&q=85",
    imageAlt: "Veículo recebendo lavagem técnica com espuma",
    tags: ["pH neutro", "Alta espuma", "Uso profissional"],
    benefits: ["Não remove proteção", "Diluição econômica", "Enxágue rápido"],
  },
  {
    id: "limpa-pneu-500",
    slug: "limpador-de-rodas-ferroso",
    name: "Limpador de Rodas Ferroso",
    category: "automotivo",
    categoryLabel: "Linha automotiva",
    shortDescription: "Descontaminação de rodas com ação visual e baixo esforço.",
    description: "Fórmula de ação profunda para dissolver partículas ferrosas e resíduos de freio em rodas, pinças e superfícies compatíveis.",
    price: 6990,
    stock: 27,
    featured: false,
    volume: "500 ml",
    image: "https://images.unsplash.com/photo-1601362840469-51e4d8d58785?auto=format&fit=crop&w=1200&q=85",
    imageAlt: "Detalhe de roda automotiva limpa após processo de descontaminação",
    tags: ["Descontaminação", "Rodas", "Ação rápida"],
    benefits: ["Remove pó de freio", "Aplicação localizada", "Acabamento uniforme"],
  },
  {
    id: "multiuso-apc-1l",
    slug: "limpador-multiuso-apc-concentrado",
    name: "Limpador Multiuso APC Concentrado",
    category: "residencial",
    categoryLabel: "Linha residencial",
    shortDescription: "Limpeza versátil para superfícies internas e externas.",
    description: "Concentrado de baixa formação de resíduos para limpeza de plásticos, tecidos, pisos, bancadas e áreas de uso intenso.",
    price: 4490,
    stock: 35,
    featured: true,
    volume: "1 litro",
    image: "https://images.unsplash.com/photo-1625047509248-ec889cbff17f?auto=format&fit=crop&w=1200&q=85",
    imageAlt: "Profissional realizando limpeza detalhada em superfície automotiva",
    tags: ["Concentrado", "Multiuso", "Baixo resíduo"],
    benefits: ["Diluição ajustável", "Uso em várias superfícies", "Aroma suave"],
  },
  {
    id: "microfibra-600",
    slug: "toalha-microfibra-premium-600gsm",
    name: "Toalha de Microfibra Premium 600 GSM",
    category: "acessorios",
    categoryLabel: "Acessórios",
    shortDescription: "Fibra macia e densa para secagem e acabamento sem marcas.",
    description: "Toalha de alta gramatura com bordas suaves, indicada para secagem, remoção de ceras e acabamento em superfícies delicadas.",
    price: 3290,
    stock: 64,
    featured: false,
    volume: "40 × 60 cm",
    image: "https://images.unsplash.com/photo-1544829099-b9a0c07fad1a?auto=format&fit=crop&w=1200&q=85",
    imageAlt: "Acabamento brilhante em carro após uso de produtos de detalhamento",
    tags: ["600 GSM", "Sem marcas", "Borda suave"],
    benefits: ["Alta absorção", "Não risca", "Lavável e reutilizável"],
  },
  {
    id: "kit-essencial",
    slug: "kit-essencial-de-manutencao",
    name: "Kit Essencial de Manutenção",
    category: "acessorios",
    categoryLabel: "Kits Kings",
    shortDescription: "Seleção prática para manter o acabamento entre serviços.",
    description: "Conjunto com shampoo pH neutro, microfibra de secagem e finalizador de manutenção para uma rotina segura de cuidados.",
    price: 12990,
    compareAtPrice: 14970,
    stock: 12,
    featured: true,
    volume: "3 itens",
    image: "https://images.unsplash.com/photo-1503376780353-7e6692767b70?auto=format&fit=crop&w=1200&q=85",
    imageAlt: "Carro preto com acabamento brilhante após manutenção estética",
    tags: ["Kit completo", "Manutenção", "Economia"],
    benefits: ["Produtos compatíveis", "Rotina simplificada", "Melhor custo por item"],
  },
];

export const productCategories = [
  { value: "todos", label: "Todos" },
  { value: "automotivo", label: "Automotivo" },
  { value: "residencial", label: "Residencial" },
  { value: "acessorios", label: "Acessórios" },
] as const;

export function getProductById(id: string) {
  return products.find((product) => product.id === id);
}

export function getProductBySlug(slug: string) {
  return products.find((product) => product.slug === slug);
}
