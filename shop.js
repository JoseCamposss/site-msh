// Helpers partilhados entre a home e a página de produtos.

function categoryOf(product) {
  return CATEGORIES.find((c) => c.id === product.category);
}

function productCardHTML(p) {
  const cat = categoryOf(p);
  const onSale = typeof p.oldPrice === "number";
  const priceHTML = onSale
    ? `<span class="price-old">${formatPrice(p.oldPrice)}</span> <span class="product-price sale">${formatPrice(p.price)}</span>`
    : `<span class="product-price">${formatPrice(p.price)}</span>`;
  const badge = onSale
    ? `<span class="badge badge-sale">-${Math.round(100 - (p.price / p.oldPrice) * 100)}%</span>`
    : p.bestseller
    ? `<span class="badge badge-bestseller">Mais Vendido</span>`
    : "";

  return `
    <div class="product-card" data-category="${p.category}">
      ${badge}
      <div class="product-icon">${cat ? cat.icon : "📦"}</div>
      <span class="product-category">${cat ? cat.name : ""}</span>
      <h3>${p.name}</h3>
      <p>${p.desc}</p>
      <div class="product-footer">
        <span class="product-price-wrap">${priceHTML}</span>
        <button class="add-btn" data-id="${p.id}">Adicionar</button>
      </div>
    </div>
  `;
}

function wireAddButtons(container) {
  container.addEventListener("click", (e) => {
    const btn = e.target.closest(".add-btn");
    if (!btn) return;
    addToCart(btn.dataset.id);
    const original = btn.textContent;
    btn.textContent = "Adicionado ✓";
    btn.disabled = true;
    setTimeout(() => {
      btn.textContent = original;
      btn.disabled = false;
    }, 900);
  });
}
