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
        {
            id: "4",
            name: "croissant",
            description: "delicioso croissant",
            price: 12,
            image: "/images/croissant.png",
        },
        {
            id: "5",
            name: "desayuno",
            description: "rico desayuno",
            price: 18,
            image: "/images/desayuno.png",
        },
        {
            id: "6",
            name: "nieve",
            description: "rica nieve",
            price: 9,
            image: "/images/nieve.png",
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
        {
            id: "4",
            name: "croissant",
            description: "delicious croissant",
            price: 12,
            image: "/images/croissant.png",
        },
        {
            id: "5",
            name: "breakfast",
            description: "delicious breakfast",
            price: 18,
            image: "/images/desayuno.png",
        },
        {
            id: "6",
            name: "ice cream",
            description: "delicious ice cream",
            price: 9,
            image: "/images/nieve.png",
        },
    ],
};