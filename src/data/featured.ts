export type FeaturedItem = {
    id: string;
    name: string;
    description: string;
    price: number;
    image: string;
    badge?: "Nuevo" | "Recomendado" | "Chef's Pick";
};

export const featuredItems: Record<"ES" | "EN", FeaturedItem[]> = {
    ES: [
        {
            id: "1",
            name: "bebidas",
            description: "bebidas deliciosas",
            price: 15,
            image: "/images/bebidas.png",
        },
        {
            id: "2",
            name: "comida",
            description: "rica comida",
            price: 20,
            image: "/images/comida.png",
        },
        {
            id: "3",
            name: "postre",
            description: "rico postre",
            price: 10,
            image: "/images/postre.png",
        },
    ],
    EN: [
        {
            id: "1",
            name: "drinks",
            description: "delicious drinks",
            price: 15,
            image: "/images/bebidas.png",
        },
        {
            id: "2",
            name: "meal",
            description: "delicious meal",
            price: 20,
            image: "/images/comida.png",
        },
        {
            id: "3",
            name: "dessert",
            description: "delicious dessert",
            price: 10,
            image: "/images/postre.png",
        },
    ],
};