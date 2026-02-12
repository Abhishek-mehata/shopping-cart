const products = [
    {
        "id": 1,
        "title": "Wireless Headphones",
        "price": 59.99,
        "description": "High quality wireless headphones with noise cancellation.",
        "category": "electronics",
        "image": "https://via.placeholder.com/300x300.png?text=Headphones",
        "rating": {
            "rate": 4.5,
            "count": 120
        }
    },
    {
        "id": 2,
        "title": "Smart Watch",
        "price": 99.99,
        "description": "Smart watch with heart rate monitor and fitness tracking.",
        "category": "electronics",
        "image": "https://via.placeholder.com/300x300.png?text=Smart+Watch",
        "rating": {
            "rate": 4.2,
            "count": 85
        }
    },
    {
        "id": 3,
        "title": "Men's Casual T-Shirt",
        "price": 19.99,
        "description": "Comfortable cotton casual t-shirt for daily wear.",
        "category": "clothing",
        "image": "https://via.placeholder.com/300x300.png?text=T-Shirt",
        "rating": {
            "rate": 4.0,
            "count": 200
        }
    },
    {
        "id": 4,
        "title": "Women's Handbag",
        "price": 49.99,
        "description": "Stylish handbag perfect for everyday use.",
        "category": "clothing",
        "image": "https://via.placeholder.com/300x300.png?text=Handbag",
        "rating": {
            "rate": 4.6,
            "count": 150
        }
    },
    {
        "id": 5,
        "title": "Running Shoes",
        "price": 79.99,
        "description": "Lightweight running shoes with excellent grip.",
        "category": "footwear",
        "image": "https://via.placeholder.com/300x300.png?text=Running+Shoes",
        "rating": {
            "rate": 4.3,
            "count": 95
        }
    },
    {
        "id": 6,
        "title": "Backpack",
        "price": 34.99,
        "description": "Durable backpack suitable for school, travel, or work.",
        "category": "accessories",
        "image": "https://via.placeholder.com/300x300.png?text=Backpack",
        "rating": {
            "rate": 4.4,
            "count": 180
        }
    }
]

const cartItems = [];


// localStorage.setItem("products", JSON.stringify(products));
// localStorage.setItem("cartItems", JSON.stringify(cartItems));


if (!localStorage.getItem("products")) {
    localStorage.setItem("products", JSON.stringify(products));
}

if (!localStorage.getItem("cartItems")) {
    localStorage.setItem("cartItems", JSON.stringify([]));
}

export const getData = () => {
    const products = localStorage.getItem("products");
    const cartItems = localStorage.getItem("cartItems");

    return {
        products: products ? JSON.parse(products) : [],
        cartItems: cartItems ? JSON.parse(cartItems) : []
    }

}

export const saveToLocalStorage = (key, value) => {
    localStorage.setItem(key, JSON.stringify(value));
}