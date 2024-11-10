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
        price: "R$ 35,00"
    },
    {
        id: 2, 
        name: "Médio", 
        price: "R$ 45,00"
    },
    {
        id: 3, 
        name: "Grande", 
        price: "R$ 50,00"
    },
    {
        id: 4, 
        name: "Extra grande", 
        price: "R$ 55,00"
    }
]

export const products = [
    {
        id: 1, 
        name: "Item 1",
        description: "Alguma descrição da comida que você vai querer muito comer hehehe",
        price: "R$ 40,00",
        section: 1,
    }, 
    {
        id: 2, 
        name: "Item 2",
        description: "Alguma descrição da comida que você vai querer muito comer hehehe",
        price: "R$ 45,00",
        section: 1,
    }, 
    {
        id: 3, 
        name: "Item 3",
        description: "Alguma descrição da comida que você vai querer muito comer hehehe",
        price: "R$ 50,00",
        section: 1,
    }
]

export const products2 = [
    {
        id: 4, 
        name: "Item 4",
        price: null,
        description: "Alguma descrição da comida que você vai querer muito comer hehehe",
        section: 2,
    },
    {
        id: 5, 
        name: "Item 5",
        price: null,
        description: "Alguma descrição da comida que você vai querer muito comer hehehe",
        section: 2,

    },
    {
        id: 6, 
        name: "Item 6",
        price: null,
        description: "Alguma descrição da comida que você vai querer muito comer hehehe",
        section: 2,
    }
]

export const allProducts = [...products, ...products2]

export const sessions = [
    {
        id: 1,
        name: "Session 1",
        items: products
    },
    {
        id: 2, 
        name: "Session 2",
        items: products2,
        sizes: sizes
    }
]
