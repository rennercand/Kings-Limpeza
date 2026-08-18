# Kings Produtos de Limpeza

PWA comercial da Kings para catálogo, pedidos e operação de produtos de limpeza residencial e automotiva. A primeira entrega é uma landing **Dark Tech** responsiva que estabelece a identidade visual e a base de componentes da aplicação.

## Estrutura

```text
├── design-system/                 # Tokens e decisões de UI/UX
├── web/                           # Aplicação Next.js (App Router)
│   ├── public/                    # Ícones e ativos PWA
│   └── src/
│       ├── app/                   # Rotas, metadata, manifesto e offline
│       ├── components/
│       │   ├── marketing/         # Seções da landing
│       │   ├── site/              # Header, footer e marca
│       │   └── ui/                # Primitivos reutilizáveis / shadcn
│       ├── config/                # Configuração pública do produto
│       ├── data/                  # Conteúdo estruturado da interface
│       └── lib/                   # Utilitários compartilhados
├── VISAO-ILUSTRATIVA.md           # Arquitetura, fluxos, MPA e roadmap
└── README.md
```

## Executar localmente

```bash
cd web
npm install
copy .env.example .env.local
npm run dev
```

Abra `http://localhost:3000`. Configure `NEXT_PUBLIC_WHATSAPP_URL` no `.env.local` com o link oficial da empresa.

## Qualidade e build

```bash
npm run lint
npm run build
```

O desenvolvimento e o build usam Webpack por compatibilidade com `@ducanh2912/next-pwa`. O service worker fica desativado no desenvolvimento e é gerado no build de produção.

## Estratégia de branches

- `main`: versão estável e pronta para produção.
- `development`: integração da evolução do produto e previews da Vercel.
- `codex/*` ou `feature/*`: mudanças isoladas, integradas por pull request.

## Arquitetura MPA no App Router

O sistema seguirá uma **MPA híbrida**: catálogo, produto, carrinho, checkout e área administrativa terão URLs e documentos próprios, renderizados no servidor pelo App Router. Navegações internas usam transições do Next.js, mas cada rota continua independente, indexável, atualizável e acessível por link direto. Componentes interativos são ilhas client-side pequenas; regras de negócio e dados permanecem no servidor.

Veja a definição detalhada em [VISAO-ILUSTRATIVA.md](./VISAO-ILUSTRATIVA.md).
