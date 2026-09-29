# Site MSH

Website para a Manuel da Silva Henriques – Representações, Lda. (armazenista/grossista de combustíveis, metais, materiais de construção, ferragens e ferramentas).

## Estado atual

Versão estática (HTML/CSS/JS puro, sem dependências nem build), organizada em páginas separadas:
- `index.html` — início: história/apresentação resumida, categorias rápidas, "Mais Vendidos" e "Em Promoção"
- `produtos.html` — catálogo completo por categoria (dados de exemplo em `products.js`), com filtros
- `sobre.html` — Quem Somos
- `contacto.html` — contacto (dados por preencher)
- Carrinho de compras (client-side, guardado em `localStorage`, funciona em todas as páginas)
- "Checkout" sem pagamento: o botão do carrinho monta um email com o pedido (`mailto:`) para a empresa confirmar manualmente

Sem backend e sem pagamentos por agora — a ideia é validar o design e o catálogo com a empresa antes de avançar para uma base de dados real, encomendas registadas e pagamentos online.

## Como ver o site

- **Online**: https://josecamposss.github.io/site-msh/ (publicado via GitHub Pages)
- **Local**: abrir `index.html` diretamente no browser funciona. Para uma experiência mais parecida com o site publicado (URLs sem `.html`, etc.) pode servir-se com `powershell -ExecutionPolicy Bypass -File serve.ps1` (http://localhost:8080) ou a extensão "Live Server" do VS Code.

## Próximos passos

- [ ] Confirmar/ajustar categorias, produtos e preços reais com a empresa
- [ ] Substituir dados de contacto placeholder
- [ ] Adicionar fotos/logotipo reais
- [ ] Base de dados e painel de administração simples para gerir produtos/encomendas
- [ ] Pagamentos online (só depois de validado com a empresa)
