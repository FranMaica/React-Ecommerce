const products = [
    {
        id: 1,
        title: "Chomba",
        price: 25.99,
        category: "Ropa",
        description: "Talles disponibles: S, M, L, XL",
        image: "https://bukmark.com.ar/wp-content/uploads/2021/04/66.jpg",
    },
    {
        id: 2,
        title: "Camisa",
        price: 45.00,
        category: "Accesorios",
        description: "Talles disponibles: Único",
        image: "https://i5.walmartimages.com/asr/8f1dc42a-5fbf-4677-aff4-5a7bec262713.f9e21021922c8c7edbb2fb69f6705af6.jpeg",
    },
    {
        id: 3,
        title: "Sudadera con Capucha",
        price: 60.00,
        category: "Ropa",
        description: "Talles disponibles: M, L, XL",
        image: "https://www.independenttradingco.com/cdn/shop/products/IND4000C-WHT_7d839cad-42ce-4e53-a2de-ef6f533323f2_2048x.jpg?v=1573838866",
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
