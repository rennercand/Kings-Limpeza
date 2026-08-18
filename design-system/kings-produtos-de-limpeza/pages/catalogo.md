# Catálogo — Dark Tech Commerce

Este arquivo complementa o `MASTER.md` para as rotas `/catalogo` e `/produto/[slug]`.

- Objetivo: permitir descoberta rápida de produtos residenciais e automotivos sem perder a identidade premium.
- Estrutura: cabeçalho de contexto, busca, filtro por categoria, contagem de resultados e grade de produtos.
- Desktop: três colunas; tablet: duas colunas; mobile: uma coluna sem rolagem horizontal.
- Cards: imagem editorial em proporção estável, categoria, nome, descrição curta, preço, estoque e ação explícita.
- Produto: imagem ampla, detalhes técnicos, disponibilidade, seletor de quantidade e ação de compra.
- Busca: atualização imediata, rótulo acessível e estado vazio com caminho de recuperação.
- Estados: estoque baixo deve ser textual; disponibilidade nunca depende apenas de cor.
- Imagens: sempre usar `next/image`, `sizes` responsivo e texto alternativo descritivo.
- Acessibilidade: controles com pelo menos 44 px, foco visível e contraste AA.
- Movimento: apenas entrada curta e elevação discreta; desativar efeitos decorativos com `prefers-reduced-motion`.
- Ícones: somente Lucide React ou SVG aprovado; emojis são proibidos.
