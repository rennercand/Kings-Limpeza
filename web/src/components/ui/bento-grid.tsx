import type { LucideIcon } from "lucide-react";

import { cn } from "@/lib/utils";

export interface BentoItem {
  title: string;
  description: string;
  icon: LucideIcon;
  meta: string;
  status?: string;
  tags: readonly string[];
  featured?: boolean;
}

export function BentoGrid({ items }: { items: readonly BentoItem[] }) {
  return (
    <div className="grid auto-rows-[minmax(17rem,auto)] grid-cols-1 gap-4 md:grid-cols-3">
      {items.map((item) => {
        const Icon = item.icon;
        return (
          <article
            key={item.title}
            className={cn("bento-card group p-6 sm:p-7", item.featured && "md:col-span-2")}
          >
            <div className="absolute inset-0 bg-gradient-to-br from-neon/5 via-transparent to-blue-600/5 opacity-0 transition-opacity duration-300 group-hover:opacity-100" />
            <div className="relative z-10 flex h-full flex-col">
              <div className="flex items-start justify-between gap-4">
                <span className="flex size-11 items-center justify-center rounded-xl border border-neon/20 bg-neon/10 text-neon transition-transform duration-300 group-hover:scale-105">
                  <Icon className="size-5" aria-hidden="true" />
                </span>
                {item.status ? (
                  <span className="rounded-full border border-neon/20 bg-neon/5 px-3 py-1 font-mono text-[.68rem] font-semibold uppercase tracking-wider text-cyan-200">
                    {item.status}
                  </span>
                ) : null}
              </div>
              <div className="mt-auto pt-12">
                <p className="font-mono text-xs text-neon">{item.meta}</p>
                <h3 className="mt-2 text-xl font-semibold tracking-tight sm:text-2xl">{item.title}</h3>
                <p className="mt-3 max-w-2xl text-sm leading-6 text-muted-foreground">{item.description}</p>
                <ul className="mt-5 flex flex-wrap gap-2" aria-label="Características">
                  {item.tags.map((tag) => (
                    <li key={tag} className="rounded-full bg-white/5 px-3 py-1 text-xs text-slate-300">{tag}</li>
                  ))}
                </ul>
              </div>
            </div>
          </article>
        );
      })}
    </div>
  );
}
