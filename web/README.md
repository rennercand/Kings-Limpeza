# Kings Web

Interface PWA da Kings construída com Next.js App Router, React, TypeScript, Tailwind CSS, shadcn/ui, Lucide e Framer Motion.

## Scripts

```bash
npm run dev      # servidor local via Webpack; service worker desativado
npm run lint     # análise estática
npm run build    # build de produção com PWA via Webpack
npm run start    # executa o build
```

## Configuração

Copie `.env.example` para `.env.local` e defina:

```env
NEXT_PUBLIC_WHATSAPP_URL=https://wa.me/55...
```

## Convenções

- Seções visuais específicas ficam em `src/components/marketing`.
- Estrutura global do site fica em `src/components/site`.
- Componentes genéricos e shadcn ficam em `src/components/ui`.
- Tokens visuais permanecem em `src/app/globals.css`; decisões de design são documentadas em `../design-system`.
- Server Components são o padrão; `"use client"` é reservado a movimento e interação real.

> Nota: `@ducanh2912/next-pwa` foi mantido conforme a definição atual do projeto. Antes de uma grande atualização do Next.js, avaliar migração para Serwist, recomendada pelo próprio mantenedor para projetos novos.
