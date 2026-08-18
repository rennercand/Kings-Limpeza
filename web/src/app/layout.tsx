import type { Metadata, Viewport } from "next";
import { Geist, Geist_Mono } from "next/font/google";

import "./globals.css";

const geistSans = Geist({ variable: "--font-geist-sans", subsets: ["latin"] });
const geistMono = Geist_Mono({ variable: "--font-geist-mono", subsets: ["latin"] });

export const metadata: Metadata = {
  metadataBase: new URL("https://kingsprodutos.com.br"),
  title: {
    default: "Kings Produtos de Limpeza | Estética automotiva premium",
    template: "%s | Kings Produtos de Limpeza",
  },
  description:
    "Produtos e serviços premium para estética e detalhamento automotivo, com atendimento rápido e acabamento de alto nível.",
  applicationName: "Kings Produtos de Limpeza",
  manifest: "/manifest.webmanifest",
  appleWebApp: { capable: true, statusBarStyle: "black-translucent", title: "Kings" },
  icons: { icon: "/icon.svg", apple: "/icon.svg" },
  formatDetection: { telephone: false },
};

export const viewport: Viewport = { themeColor: "#030712", colorScheme: "dark" };

export default function RootLayout({ children }: LayoutProps<"/">) {
  return (
    <html lang="pt-BR" className={`${geistSans.variable} ${geistMono.variable} dark`}>
      <body>{children}</body>
    </html>
  );
}
