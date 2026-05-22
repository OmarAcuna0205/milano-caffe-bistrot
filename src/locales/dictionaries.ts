type NavItem = {
  label: string;
  href: string;
};

type SectionDictionary = {
  hero: {
    cta: string;
  };
  nav: NavItem[];
  menu: {
    title: string;
  };
  featured: {
    title: string;
  };
};

export const dictionaries: Record<"ES" | "EN", SectionDictionary> = {
  ES: {
    hero: {
      cta: "Ver Menú",
    },
    nav: [
      { label: "Inicio", href: "#inicio" },
      { label: "Menú", href: "#menu" },
      { label: "Novedades", href: "#novedades" },
      { label: "Sobre Nosotros", href: "#sobre-nosotros" },
      { label: "Contacto", href: "#contacto" },
    ],
    menu: {
      title: "Menú",
    },
    featured: {
      title: "Destacados",
    },
  },
  EN: {
    hero: {
      cta: "View Menu",
    },
    nav: [
      { label: "Home", href: "#inicio" },
      { label: "Menu", href: "#menu" },
      { label: "News", href: "#novedades" },
      { label: "About Us", href: "#sobre-nosotros" },
      { label: "Contact", href: "#contacto" },
    ],
    menu: {
      title: "Menu",
    },
    featured: {
      title: "New",
    },
  },
};