import { WifiOff } from "lucide-react";

import { BrandMark } from "@/components/site/brand-mark";

export default function OfflinePage() {
  return (
    <main className="content-shell flex min-h-screen items-center justify-center py-16">
      <section className="glass-panel max-w-lg rounded-3xl p-8 text-center sm:p-12">
        <BrandMark className="mx-auto mb-8 justify-center" />
        <WifiOff className="mx-auto mb-5 size-10 text-neon" aria-hidden="true" />
        <h1 className="text-3xl font-semibold tracking-tight">Você está sem conexão</h1>
        <p className="mt-4 text-muted-foreground">
          O conteúdo já visitado continua disponível. Reconecte-se para consultar novidades e enviar seu pedido.
        </p>
      </section>
    </main>
  );
}
