export type MenuGroup = {
  id: string;
  label: string;
  categoryNames: string[];
};

export const menuGroupsES: MenuGroup[] = [
  {
    id: "cocina",
    label: "Cocina",
    categoryNames: [
      "Menu ejecutivo",
      "Colazione",
      "Antipasti",
      "Paste",
      "Insalate",
      "Panini & Pizza",
    ],
  },
  {
    id: "postres",
    label: "Postres",
    categoryNames: ["Dolci", "Di Stagione"],
  },
  {
    id: "bebidas",
    label: "Bebidas",
    categoryNames: ["Caffè", "Bibite"],
  },
  {
    id: "bar",
    label: "Bar",
    categoryNames: ["Mixología", "Aperitivi", "Licores", "Birra", "Vinos"],
  },
];

export const menuGroupsEN: MenuGroup[] = [
  {
    id: "cuisine",
    label: "Cuisine",
    categoryNames: [
      "Executive Menu",
      "Colazione",
      "Antipasti",
      "Paste",
      "Insalate",
      "Panini & Pizza",
    ],
  },
  {
    id: "desserts",
    label: "Desserts",
    categoryNames: ["Dolci", "Di Stagione"],
  },
  {
    id: "drinks",
    label: "Drinks",
    categoryNames: ["Caffè", "Bibite"],
  },
  {
    id: "bar",
    label: "Bar",
    categoryNames: ["Mixology", "Aperitivi", "Licores", "Birra", "Vinos"],
  },
];