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
      "Colazione",
      "Antipasti",
      "Paste",
      "Insalate",
      "Panini & Pizza",
      "Menu ejecutivo",
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
    categoryNames: ["Mixología", "Aperitivi", "Vinos", "Licores", "Birra"],
  },
];

export const menuGroupsEN: MenuGroup[] = [
  {
    id: "cuisine",
    label: "Cuisine",
    categoryNames: [
      "Colazione",
      "Antipasti",
      "Paste",
      "Insalate",
      "Panini & Pizza",
      "Executive Menu",
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
    categoryNames: ["Mixology", "Aperitivi", "Vinos", "Licores", "Birra"],
  },
];