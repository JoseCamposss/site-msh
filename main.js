function renderCategoryNav() {
  const nav = document.getElementById("category-filters");
  const catButtons = CATEGORIES.map(
    (c) => `<button class="filter-btn" data-filter="${c.id}">${c.icon} ${c.name}</button>`
  ).join("");
  nav.innerHTML = `<button class="filter-btn active" data-filter="all">Todos</button>${catButtons}`;

  nav.addEventListener("click", (e) => {
    const btn = e.target.closest("button");
    if (!btn) return;
    nav.querySelectorAll(".filter-btn").forEach((b) => b.classList.remove("active"));
    btn.classList.add("active");
    filterProducts(btn.dataset.filter);
  });
}

function renderProducts() {
  const grid = document.getElementById("product-grid");
  grid.innerHTML = PRODUCTS.map((p) => {
    const cat = CATEGORIES.find((c) => c.id === p.category);
    return `
      <div class="product-card" data-category="${p.category}">
        <div class="product-icon">${cat ? cat.icon : "📦"}</div>
        <span class="product-category">${cat ? cat.name : ""}</span>
        <h3>${p.name}</h3>
        <p>${p.desc}</p>
        <div class="product-footer">
          <span class="product-price">${formatPrice(p.price)}</span>
          <button class="add-btn" data-id="${p.id}">Adicionar</button>
        </div>
      </div>
    `;
  }).join("");

  grid.addEventListener("click", (e) => {
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

function filterProducts(filter) {
  document.querySelectorAll(".product-card").forEach((card) => {
    const show = filter === "all" || card.dataset.category === filter;
    card.hidden = !show;
  });
}

document.addEventListener("DOMContentLoaded", () => {
  document.getElementById("year").textContent = new Date().getFullYear();
  renderCategoryNav();
  renderProducts();
});
