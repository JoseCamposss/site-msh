const CART_KEY = "msh-cart";

function readCart() {
  try {
    return JSON.parse(localStorage.getItem(CART_KEY)) || {};
  } catch {
    return {};
  }
}

function writeCart(cart) {
  try {
    localStorage.setItem(CART_KEY, JSON.stringify(cart));
  } catch {
    // localStorage indisponível — o carrinho fica só na sessão atual.
  }
}

function findProduct(id) {
  return PRODUCTS.find((p) => p.id === id);
}

function addToCart(id) {
  const cart = readCart();
  cart[id] = (cart[id] || 0) + 1;
  writeCart(cart);
  renderCart();
  openCart();
}

function changeQty(id, delta) {
  const cart = readCart();
  cart[id] = (cart[id] || 0) + delta;
  if (cart[id] <= 0) delete cart[id];
  writeCart(cart);
  renderCart();
}

function removeFromCart(id) {
  const cart = readCart();
  delete cart[id];
  writeCart(cart);
  renderCart();
}

function cartCount() {
  const cart = readCart();
  return Object.values(cart).reduce((sum, qty) => sum + qty, 0);
}

function cartTotal() {
  const cart = readCart();
  return Object.entries(cart).reduce((sum, [id, qty]) => {
    const product = findProduct(id);
    return product ? sum + product.price * qty : sum;
  }, 0);
}

function formatPrice(value) {
  return value.toLocaleString("pt-PT", { style: "currency", currency: "EUR" });
}

function renderCart() {
  const badge = document.getElementById("cart-count");
  const itemsEl = document.getElementById("cart-items");
  const totalEl = document.getElementById("cart-total");
  const emptyEl = document.getElementById("cart-empty");
  if (!badge || !itemsEl) return;

  const cart = readCart();
  const entries = Object.entries(cart);

  badge.textContent = cartCount();
  badge.hidden = cartCount() === 0;

  itemsEl.innerHTML = "";
  emptyEl.hidden = entries.length > 0;

  entries.forEach(([id, qty]) => {
    const product = findProduct(id);
    if (!product) return;
    const row = document.createElement("div");
    row.className = "cart-item";
    row.innerHTML = `
      <div class="cart-item-info">
        <strong>${product.name}</strong>
        <span>${formatPrice(product.price)} / un.</span>
      </div>
      <div class="cart-item-controls">
        <button class="qty-btn" data-action="dec" data-id="${id}" aria-label="Diminuir quantidade">−</button>
        <span class="qty-value">${qty}</span>
        <button class="qty-btn" data-action="inc" data-id="${id}" aria-label="Aumentar quantidade">+</button>
        <button class="remove-btn" data-action="remove" data-id="${id}" aria-label="Remover">✕</button>
      </div>
    `;
    itemsEl.appendChild(row);
  });

  totalEl.textContent = formatPrice(cartTotal());
}

function openCart() {
  document.getElementById("cart-panel").classList.add("open");
  document.getElementById("cart-overlay").classList.add("open");
}

function closeCart() {
  document.getElementById("cart-panel").classList.remove("open");
  document.getElementById("cart-overlay").classList.remove("open");
}

function sendOrderByEmail() {
  const cart = readCart();
  const entries = Object.entries(cart);
  if (entries.length === 0) return;

  const lines = entries.map(([id, qty]) => {
    const product = findProduct(id);
    return `- ${qty}x ${product.name} (${formatPrice(product.price)} cada) = ${formatPrice(product.price * qty)}`;
  });
  lines.push("", `Total: ${formatPrice(cartTotal())}`);

  const subject = encodeURIComponent("Pedido de Orçamento — Site MSH");
  const body = encodeURIComponent(
    `Olá,\n\nGostaria de pedir orçamento/encomenda dos seguintes artigos:\n\n${lines.join("\n")}\n\nNome:\nContacto:\n`
  );
  window.location.href = `mailto:geral@mshenriques.com?subject=${subject}&body=${body}`;
}

document.addEventListener("DOMContentLoaded", () => {
  renderCart();

  document.getElementById("cart-toggle").addEventListener("click", openCart);
  document.getElementById("cart-close").addEventListener("click", closeCart);
  document.getElementById("cart-overlay").addEventListener("click", closeCart);
  document.getElementById("send-order").addEventListener("click", sendOrderByEmail);

  document.getElementById("cart-items").addEventListener("click", (e) => {
    const btn = e.target.closest("button");
    if (!btn) return;
    const { action, id } = btn.dataset;
    if (action === "inc") changeQty(id, 1);
    if (action === "dec") changeQty(id, -1);
    if (action === "remove") removeFromCart(id);
  });
});
