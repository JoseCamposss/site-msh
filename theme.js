(function () {
  const root = document.documentElement;

  function load(key) {
    try {
      return localStorage.getItem(key);
    } catch {
      return null;
    }
  }

  function save(key, value) {
    try {
      localStorage.setItem(key, value);
    } catch {
      // sem localStorage a preferência só dura até recarregar a página
    }
  }

  const prefersDark = window.matchMedia && window.matchMedia("(prefers-color-scheme: dark)").matches;
  root.dataset.palette = load("msh-palette") || "sporting";
  root.dataset.mode = load("msh-mode") || (prefersDark ? "dark" : "light");

  function refreshButtons() {
    const modeBtn = document.getElementById("mode-toggle");
    const paletteBtn = document.getElementById("palette-toggle");
    if (modeBtn) {
      const dark = root.dataset.mode === "dark";
      modeBtn.textContent = dark ? "☀️" : "🌙";
      modeBtn.title = dark ? "Mudar para modo claro" : "Mudar para modo escuro";
      modeBtn.setAttribute("aria-label", modeBtn.title);
    }
    if (paletteBtn) {
      const sporting = root.dataset.palette === "sporting";
      paletteBtn.title = sporting ? "Mudar para cores azul e vermelho (MSH)" : "Mudar para cores verde (Sporting)";
      paletteBtn.setAttribute("aria-label", paletteBtn.title);
    }
  }

  document.addEventListener("DOMContentLoaded", () => {
    refreshButtons();

    document.getElementById("mode-toggle")?.addEventListener("click", () => {
      root.dataset.mode = root.dataset.mode === "dark" ? "light" : "dark";
      save("msh-mode", root.dataset.mode);
      refreshButtons();
    });

    document.getElementById("palette-toggle")?.addEventListener("click", () => {
      root.dataset.palette = root.dataset.palette === "sporting" ? "msh" : "sporting";
      save("msh-palette", root.dataset.palette);
      refreshButtons();
    });
  });
})();
