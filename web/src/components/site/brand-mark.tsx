import { Crown } from "lucide-react";

import { cn } from "@/lib/utils";

export function BrandMark({ className }: { className?: string }) {
  return (
    <span className={cn("inline-flex items-center gap-3", className)}>
      <span className="flex size-10 items-center justify-center rounded-xl border border-neon/30 bg-neon/10 text-neon shadow-[0_0_24px_rgba(34,211,238,.14)]">
        <Crown className="size-5" aria-hidden="true" />
      </span>
      <span className="leading-none">
        <span className="block text-base font-bold tracking-[.18em]">KINGS</span>
        <span className="mt-1 block font-mono text-[.55rem] uppercase tracking-[.2em] text-muted-foreground">Produtos de limpeza</span>
      </span>
    </span>
  );
}
