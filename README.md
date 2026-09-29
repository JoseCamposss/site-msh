# Site MSH

Website para a Manuel da Silva Henriques – Representações, Lda. (armazenista/grossista de combustíveis, metais, materiais de construção, ferragens e ferramentas).

## Estado atual

Versão estática (HTML/CSS/JS puro, sem dependências nem build) com:
- Página inicial com as cores/identidade da MSH
- Catálogo de produtos por categoria (dados de exemplo em `products.js`), com filtros
- Carrinho de compras (client-side, guardado em `localStorage`)
- "Checkout" sem pagamento: o botão do carrinho monta um email com o pedido (`mailto:`) para a empresa confirmar manualmente
- Secção "Quem Somos" e contacto (dados por preencher)

Sem backend e sem pagamentos por agora — a ideia é validar o design e o catálogo com a empresa antes de avançar para uma base de dados real, encomendas registadas e pagamentos online.

## Como ver o site

Como usa `fetch`/módulos simples, o ideal é servir os ficheiros em vez de abrir `index.html` diretamente (para o carrinho/scripts funcionarem sem restrições do browser). Duas opções fáceis, sem instalar nada:

- **VS Code**: extensão "Live Server", botão direito em `index.html` → "Open with Live Server"
- **Windows/PowerShell**: `powershell -ExecutionPolicy Bypass -File serve.ps1` (script incluído, serve em http://localhost:8080)

## Próximos passos

- [ ] Confirmar/ajustar categorias, produtos e preços reais com a empresa
- [ ] Substituir dados de contacto placeholder
- [ ] Adicionar fotos/logotipo reais
- [ ] Base de dados e painel de administração simples para gerir produtos/encomendas
- [ ] Pagamentos online (só depois de validado com a empresa)
