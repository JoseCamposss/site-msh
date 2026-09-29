document.addEventListener("DOMContentLoaded", () => {
  const catLinks = document.getElementById("category-links");
  if (catLinks) {
    catLinks.innerHTML = CATEGORIES.map(
      (c) => `<a class="category-link" href="produtos.html?categoria=${c.id}"><span>${c.icon}</span>${c.name}</a>`
    ).join("");
  }

  const bestsellers = PRODUCTS.filter((p) => p.bestseller).slice(0, 4);
  const promotions = PRODUCTS.filter((p) => typeof p.oldPrice === "number").slice(0, 4);

  const bestsellerGrid = document.getElementById("bestseller-grid");
  if (bestsellerGrid) {
    bestsellerGrid.innerHTML = bestsellers.map(productCardHTML).join("");
    wireAddButtons(bestsellerGrid);
  }

  const promoGrid = document.getElementById("promo-grid");
  if (promoGrid) {
    promoGrid.innerHTML = promotions.map(productCardHTML).join("");
    wireAddButtons(promoGrid);
  }
});
