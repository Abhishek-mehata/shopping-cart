import { createContext, useState, useEffect } from "react";

import { getData, saveToLocalStorage } from "../utils/localStorage";

export const ProductsContext = createContext(null);

export const ProductsProvider = ({ children }) => {


    const [products, setProducts] = useState(() => {
        return getData().products;
    });

    const [cartItems, setCartItems] = useState(() => {
        return getData().cartItems;
    })

    // const [products, setProducts] = useState(getData().products);
    // const [cartItems, setCartItems] = useState(getData().cartItems);

    // useEffect(()=>{
    //     console.log(cartItems, "cart items updated")
    // },[cartItems])

    return (
        <ProductsContext.Provider value={{ products, setProducts, cartItems, setCartItems, saveToLocalStorage }}>
            {children}
        </ProductsContext.Provider>
    )
}



