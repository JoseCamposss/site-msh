// Dados de exemplo — a substituir pelo catálogo real da empresa.
const CATEGORIES = [
  { id: "combustiveis", name: "Combustíveis", icon: "🛢️" },
  { id: "metais", name: "Metais e Construção", icon: "🧱" },
  { id: "ferragens", name: "Ferragens", icon: "🔧" },
  { id: "ferramentas", name: "Ferramentas Manuais", icon: "🛠️" },
  { id: "canalizacoes", name: "Canalizações e Aquecimento", icon: "🚿" },
  { id: "rega", name: "Rega de Jardim", icon: "💧" },
];

// oldPrice presente = produto em promoção. bestseller = aparece em "Mais Vendidos" na home.
const PRODUCTS = [
  { id: "comb-01", category: "combustiveis", name: "Gasóleo Agrícola", desc: "Bidão de 20 litros.", price: 28.5, bestseller: true },
  { id: "comb-02", category: "combustiveis", name: "Gasóleo de Aquecimento", desc: "Bidão de 20 litros.", price: 27.9 },
  { id: "comb-03", category: "combustiveis", name: "Gás Butano", desc: "Botija de 13 kg.", price: 32.0, oldPrice: 36.0 },

  { id: "met-01", category: "metais", name: "Chapa de Ferro Galvanizado", desc: "Chapa 1x2m, 1.5mm.", price: 45.0 },
  { id: "met-02", category: "metais", name: "Vergalhão de Aço 10mm", desc: "Barra de 6 metros.", price: 12.75, bestseller: true },
  { id: "met-03", category: "metais", name: "Cimento Portland", desc: "Saco de 25 kg.", price: 6.9, oldPrice: 7.9 },

  { id: "fer-01", category: "ferragens", name: "Kit de Parafusos e Buchas", desc: "Caixa sortida, 200 peças.", price: 14.5 },
  { id: "fer-02", category: "ferragens", name: "Dobradiças Reforçadas", desc: "Par, aço inoxidável.", price: 8.2 },
  { id: "fer-03", category: "ferragens", name: "Fechadura de Segurança", desc: "Com 3 chaves.", price: 39.9, bestseller: true },

  { id: "ferr-01", category: "ferramentas", name: "Martelo de Carpinteiro", desc: "Cabo em fibra de vidro.", price: 11.9 },
  { id: "ferr-02", category: "ferramentas", name: "Jogo de Chaves de Fendas", desc: "Conjunto de 12 peças.", price: 16.5, oldPrice: 21.0 },
  { id: "ferr-03", category: "ferramentas", name: "Serrote Profissional", desc: "Lâmina 500mm.", price: 9.75 },

  { id: "can-01", category: "canalizacoes", name: "Tubo PVC 32mm", desc: "Barra de 3 metros.", price: 4.3 },
  { id: "can-02", category: "canalizacoes", name: "Radiador de Aquecimento", desc: "Painel duplo, 600x1000mm.", price: 89.0 },
  { id: "can-03", category: "canalizacoes", name: "Torneira Misturadora", desc: "Para cozinha, cromada.", price: 34.9, bestseller: true },

  { id: "reg-01", category: "rega", name: "Mangueira de Jardim", desc: "25 metros, reforçada.", price: 22.0, oldPrice: 26.0 },
  { id: "reg-02", category: "rega", name: "Aspersor Rotativo", desc: "Alcance até 10 metros.", price: 13.4 },
  { id: "reg-03", category: "rega", name: "Temporizador de Rega", desc: "Programável, à torneira.", price: 18.9 },
];
