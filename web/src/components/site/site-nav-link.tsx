"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";

import { cn } from "@/lib/utils";

export function SiteNavLink({ href, label, mobile = false }: { href: string; label: string; mobile?: boolean }) {
  const pathname = usePathname();
  const route = href.split("#")[0] || "/";
  const active = route === "/" ? pathname === "/" && !href.includes("#") : pathname.startsWith(route);

  return (
    <Link href={href} aria-current={active ? "page" : undefined} className={cn("transition-colors hover:text-neon", mobile ? "text-lg text-slate-200" : "text-sm text-slate-300", active && "font-medium text-neon")}>
      {label}
    </Link>
  );
}
