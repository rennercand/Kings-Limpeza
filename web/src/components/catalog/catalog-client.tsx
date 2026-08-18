"use client";

import { useDeferredValue, useState } from "react";
import { Search, SlidersHorizontal } from "lucide-react";

import { ProductCard } from "@/components/catalog/product-card";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import type { Product, ProductCategory } from "@/data/products";
import { productCategories } from "@/data/products";

type CategoryFilter = ProductCategory | "todos";

export function CatalogClient({ products }: { products: readonly Product[] }) {
  const [search, setSearch] = useState("");
  const [category, setCategory] = useState<CategoryFilter>("todos");
  const deferredSearch = useDeferredValue(search.trim().toLocaleLowerCase("pt-BR"));
  const filteredProducts = products.filter((product) => {
    const matchesCategory = category === "todos" || product.category === category;
    const matchesSearch = !deferredSearch || `${product.name} ${product.shortDescription} ${product.tags.join(" ")}`.toLocaleLowerCase("pt-BR").includes(deferredSearch);
    return matchesCategory && matchesSearch;
  });

  return (
    <div>
      <div className="glass-panel grid gap-4 rounded-2xl p-4 sm:grid-cols-[1fr_14rem] sm:p-5">
        <div>
          <Label htmlFor="catalog-search" className="mb-2 block text-sm text-slate-300">Buscar produto</Label>
          <div className="relative">
            <Search className="pointer-events-none absolute left-3 top-1/2 size-4 -translate-y-1/2 text-muted-foreground" aria-hidden="true" />
            <Input id="catalog-search" type="search" value={search} onChange={(event) => setSearch(event.target.value)} placeholder="Nome, benefício ou aplicação" className="h-11 bg-background/55 pl-10" />
          </div>
        </div>
        <div>
          <Label htmlFor="catalog-category" className="mb-2 block text-sm text-slate-300">Categoria</Label>
          <Select value={category} onValueChange={(value) => setCategory(value as CategoryFilter)}>
            <SelectTrigger id="catalog-category" className="h-11 w-full bg-background/55"><SlidersHorizontal aria-hidden="true" /><SelectValue /></SelectTrigger>
            <SelectContent>
              {productCategories.map((item) => <SelectItem key={item.value} value={item.value}>{item.label}</SelectItem>)}
            </SelectContent>
          </Select>
        </div>
      </div>

      <div className="mt-8 flex items-center justify-between gap-4">
        <p className="text-sm text-muted-foreground" role="status">{filteredProducts.length} {filteredProducts.length === 1 ? "produto encontrado" : "produtos encontrados"}</p>
      </div>

      {filteredProducts.length > 0 ? (
        <div className="mt-5 grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
          {filteredProducts.map((product, index) => <ProductCard key={product.id} product={product} priority={index < 3} />)}
        </div>
      ) : (
        <div className="glass-panel mt-5 rounded-3xl px-6 py-16 text-center">
          <Search className="mx-auto size-8 text-neon" aria-hidden="true" />
          <h2 className="mt-5 text-xl font-semibold">Nenhum produto encontrado</h2>
          <p className="mt-2 text-sm text-muted-foreground">Tente buscar outro termo ou selecione uma categoria diferente.</p>
        </div>
      )}
    </div>
  );
}
