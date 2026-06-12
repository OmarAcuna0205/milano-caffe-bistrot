type NavItem = {
  label: string;
  href: string;
};

type TextSegment = {
  text: string;
  highlight: boolean;
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
  about: {
    title: string;
    description: TextSegment[];
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
      { label: "Destacados", href: "#destacados" },
      { label: "Sobre Nosotros", href: "#sobre-nosotros" },
      { label: "Contacto", href: "#contacto" },
    ],
    menu: {
      title: "Menú",
    },
    featured: {
      title: "Destacados",
    },
    about: {
      title: "Sobre Nosotros",
      description: [
        { text: "En ", highlight: false },
        { text: " Milano Caffè Bistrot", highlight: true },
        { text: " llevamos el alma de", highlight: false },
        { text: " Italia", highlight: true },
        { text: " a Chihuahua. Cada platillo, cada caffè y cada detalle está pensado para ofrecerte una", highlight: false },
        { text: " experiencia auténtica", highlight: true },
        { text: ", en un ambiente cálido y acogedor en el corazón de", highlight: false },
        { text: " Paseo Central", highlight: true },
        { text: ".", highlight: false },
      ],
    }
  },
  EN: {
    hero: {
      cta: "View Menu",
    },
    nav: [
      { label: "Home", href: "#inicio" },
      { label: "Menu", href: "#menu" },
      { label: "Featured", href: "#destacados" },
      { label: "About Us", href: "#sobre-nosotros" },
      { label: "Contact", href: "#contacto" },
    ],
    menu: {
      title: "Menu",
    },
    featured: {
      title: "Featured",
    },
    about: {
      title: "About Us",
      description: [
        { text: "At", highlight: false },
        { text: " Milano Caffè Bistrot", highlight: true },
        { text: " we bring the soulf of", highlight: false },
        { text: " Italy", highlight: true },
        { text: " to Chihuahua. Every dish, every caffè, and every detail is crafted to offer you an", highlight: false },
        { text: " authentic experience", highlight: true },
        { text: ", in a warm and welcoming atmosphere in the heart of", highlight: false },
        { text: " Paseo Central", highlight: true },
        { text: ".", highlight: false },
      ],
    }
  },
};