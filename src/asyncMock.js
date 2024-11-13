const products = [
    {
        id: 1,
        title: "Chomba",
        price: 25.99,
        category: "Ropa",
        description: "Talles disponibles: S, M, L, XL",
        image: "",
    },
    {
        id: 2,
        title: "Camisa",
        price: 45.00,
        category: "Accesorios",
        description: "Talles disponibles: Único",
        image: "",
    },
    {
        id: 3,
        title: "Sudadera con Capucha",
        price: 60.00,
        category: "Ropa",
        description: "Talles disponibles: M, L, XL",
        image: "",
    }
];

export const getProducts = new Promise((resolve) => {
    setTimeout(() => {
        resolve(products);
    }, 2000);
});

export const getProduct = (id) => {
    return products.find((prod) => prod.id == id);
};

export const getCategory = (category) => {
    return products.filter((products) => products.category === category);
};
