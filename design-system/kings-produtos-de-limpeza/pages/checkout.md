# Carrinho e Checkout — Dark Tech Commerce

Este arquivo complementa o `MASTER.md` para as rotas `/carrinho` e `/checkout`.

- Objetivo: reduzir atrito e deixar preço, quantidade, entrega e próximo passo sempre claros.
- Carrinho: linhas editáveis à esquerda e resumo fixo no desktop; composição empilhada no mobile.
- Checkout: formulário em seções curtas, opção de entrega ou retirada e resumo persistente do pedido.
- Campos: rótulos sempre visíveis; placeholder é apenas exemplo, nunca substitui o rótulo.
- Erros: mensagem textual próxima ao campo e foco no primeiro problema; não comunicar erro somente por cor.
- Totais: subtotal, entrega e total devem ser apresentados separadamente antes da confirmação.
- Estados: vazio, carregando, indisponível, limite de estoque e sucesso precisam de mensagens objetivas.
- Persistência: o protótipo usa `localStorage` versionado; a versão transacional usará pedido e estoque no servidor.
- Acessibilidade: navegação completa por teclado, áreas clicáveis de pelo menos 44 px e `aria-live` para feedback.
- Segurança visual: não solicitar dados de pagamento enquanto o provedor real não estiver integrado.
- Ícones: somente Lucide React ou SVG aprovado; emojis são proibidos.
