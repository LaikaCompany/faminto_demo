export const CATEGORY_ID = {
    PIZZA: "pizza",
    HAMBURGUER: "hamburger",
    HOTDOG: "hot-dog",
    DISH: "dish",
    BARBECUE: "barbecue",
    SUSHI: "sushi",
    ORIENTAL: "oriental",
    PASTEL: "pastel",
    SNACK: "snack",
    TAPIOCA: "tapioca",
    ACAI: "acai",
    ICE_CREAM: "ice-cream",
    SHAWARMA:"shawarma"
}

export const CATEGORIES = [
    {
        id: CATEGORY_ID.PIZZA, 
        title: "Pizza"
    }, 
    {
        id: CATEGORY_ID.HAMBURGUER, 
        title: "Hamburguer"
    }, 
    {
        id: CATEGORY_ID.DISH, 
        title: "Refeição"
    }, 
    {
        id: CATEGORY_ID.BARBECUE, 
        title: "Churrasco"
    },
    {
        id: CATEGORY_ID.ORIENTAL, 
        title: "Oriental"
    }, 
    {
        id: CATEGORY_ID.PASTEL, 
        title: "Pastel"
    },
    {
        id: CATEGORY_ID.SNACK, 
        title: "Lanche"
    },
    {
        id: CATEGORY_ID.TAPIOCA, 
        title: "Tapioca"
    }, 
    {
        id: CATEGORY_ID.ACAI, 
        title: "Açaí"
    },
    {
        id: CATEGORY_ID.ICE_CREAM, 
        title: "Sorvete"
    },
    {
        id: CATEGORY_ID.SHAWARMA, 
        title: "Shawarma"
    }, 
]


export const sizes = [
    {
        id: 1, 
        name: "Pequeno",
        shortName: "(P)",
        price: "R$ 35,00"
    },
    {
        id: 2, 
        name: "Médio", 
        shortName: "(M)",
        price: "R$ 45,00"
    },
    {
        id: 3, 
        name: "Grande",
        shortName: "(G)",
        price: "R$ 50,00"
    },
    {
        id: 4, 
        name: "Extra grande", 
        shortName: "(GG)",
        price: "R$ 55,00"
    }
]
export const sodaSize = [
    {
        id: 1, 
        name: "Lata",
        price: "R$ 5,00"
    },
    {
        id: 2, 
        name: "1L", 
        price: "R$ 8,00"
    },
    {
        id: 3, 
        name: "2L", 
        price: "R$ 10,00"
    },
]

export const sodas = [
    {
        id: 1, 
        name: "Coca-cola",
        price: ""
    },
    {
        id: 2, 
        name: "River", 
        price: ""
    },
    {
        id: 3, 
        name: "Guaraná Jesus", 
        price: ""
    },
]

export const pasta = [
    {
        id: 1, 
        name: "Bolonhesa",
        image: "bolonhesa.jpeg",
        description: "Alguma descrição da comida que você vai querer muito comer hehehe",
        price: "R$ 40,00",
        session: 2,
    }, 
    {
        id: 2, 
        name: "Ragu de Carne",
        image: "ragu.jpeg",
        description: "Alguma descrição da comida que você vai querer muito comer hehehe",
        price: "R$ 45,00",
        session: 2,
    }, 
    {
        id: 3, 
        name: "Fiorentina",
        image: "fiorentina.jpg",
        description: "Alguma descrição da comida que você vai querer muito comer hehehe",
        price: "R$ 45,00",
        session: 2,
    },
    {
        id: 4, 
        name: "Cogumelos",
        image: "cogumelos.webp",
        description: "Alguma descrição da comida que você vai querer muito comer hehehe",
        price: "R$ 50,00",
        session: 2,
    }
]

export const pizza = [
    {
        id: 5, 
        name: "Calabresa",
        image: "calabresa.jpeg",
        price: null,
        description: "Alguma descrição da comida que você vai querer muito comer hehehe",
        session: 1,
    },
    {
        id: 6, 
        name: "Moda da Casa",
        image: "moda_da_casa.webp",
        price: null,
        description: "Alguma descrição da comida que você vai querer muito comer hehehe",
        session: 1,

    },
    {
        id: 7, 
        name: "Frango com Catupiry",
        image: "frango_catupiry.jpg",
        price: null,
        description: "Alguma descrição da comida que você vai querer muito comer hehehe",
        session: 1,
    },
    {
        id: 8, 
        name: "Portuguesa",
        image: "portuguesa.webp",
        price: null,
        description: "Alguma descrição da comida que você vai querer muito comer hehehe",
        session: 1,
    }
]

export const drinks = [
    {
        id: 9, 
        name: "Refrigerante",
        image: "refrigerante.jpeg",
        price: null,
        description: "Alguma descrição da comida que você vai querer muito comer hehehe",
        session: 3,
        options: sodas,
        sizes: sodaSize
    },
    {
        id: 10, 
        name: "Suco",
        image: "suco.jpeg",
        price: null,
        description: "Alguma descrição da comida que você vai querer muito comer hehehe",
        session: 3,

    },
    {
        id: 11, 
        name: "Cerveja",
        image: "cerveja.jpg",
        price: null,
        description: "Alguma descrição da comida que você vai querer muito comer hehehe",
        session: 3,
    },
    {
        id: 12, 
        name: "Vinho",
        image: "vinho.webp",
        price: null,
        description: "Alguma descrição da comida que você vai querer muito comer hehehe",
        session: 3,
    }
]

export const allProducts = [...pasta, ...pizza, ...drinks]

export const sessions = [
    {
        id: 1,
        name: "Pizza",
        panel: "pizza_panel.jpg",
        items: pizza,
        sizes: sizes
    },
    {
        id: 2, 
        name: "Macarrão",
        items: pasta,
        panel: "pasta_panel.jpg"
    },
    {
        id: 3, 
        name: "Bebidas",
        items: drinks,
        panel: "drinks.jpg"
    }
]
