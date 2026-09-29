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
  grid.innerHTML = PRODUCTS.map(productCardHTML).join("");
  wireAddButtons(grid);
}

function filterProducts(filter) {
  document.querySelectorAll(".product-card").forEach((card) => {
    const show = filter === "all" || card.dataset.category === filter;
    card.hidden = !show;
  });
}

document.addEventListener("DOMContentLoaded", () => {
  renderCategoryNav();
  renderProducts();

  // Permite chegar já filtrado via link ?categoria=xxx (usado pela home).
  const params = new URLSearchParams(window.location.search);
  const categoria = params.get("categoria");
  if (categoria) {
    const btn = document.querySelector(`.filter-btn[data-filter="${categoria}"]`);
    if (btn) btn.click();
  }
});
