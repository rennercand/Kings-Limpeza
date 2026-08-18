import type { MetadataRoute } from "next";

export default function manifest(): MetadataRoute.Manifest {
  return {
    name: "Kings Produtos de Limpeza",
    short_name: "Kings",
    description: "Estética automotiva e produtos premium para o seu veículo.",
    start_url: "/",
    display: "standalone",
    background_color: "#030712",
    theme_color: "#00d9ff",
    orientation: "portrait-primary",
    categories: ["shopping", "automotive", "business"],
    icons: [
      { src: "/icon.svg", sizes: "any", type: "image/svg+xml", purpose: "any" },
      { src: "/icon-maskable.svg", sizes: "any", type: "image/svg+xml", purpose: "maskable" },
    ],
  };
}
