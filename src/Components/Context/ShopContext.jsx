import React, { createContext, useState } from "react";
import all_product from '../../assets/Frontend_Assets/all_product'


export const ShopContext = createContext(null);

// const defaultCart = () => {
//     const cart = {};
//     for (let i = 0; i < all_product.length+1; i++) {
//         cart[i] = 0;
//     }
//     return cart;
// };

const ShopContextProvider = (props) => {
    // const [cartItem, setCartItem] = useState(defaultCart());
    const [cartItem, setCartItem] = useState({});
    const [isCartOpen, setIsCartOpen] = useState(false);
    const [quantity , setQuantity] = useState(0)

    const addToCart = (itemId, size) => {
        //if you want the key name to come from a variable, you must use bracket notation.
        // setCartItem((prev) => ({ ...prev, [itemId]: prev[itemId] + 1 }));
        // console.log("Updated cart:", updated);  // always correct
        //return updated;
        const key = `${itemId}_${size}`;
        setCartItem((prev)=>({...prev, [key]: (prev[key] || 0)+1}));
        console.log(cartItem)
    }



    const removeFromCart = (itemId, size) => {
        // setCartItem((prev) => ({ ...prev, [itemId]: prev[itemId] - 1 }));
        const key = `${itemId}_${size}`;
        setCartItem((prev)=>({...prev, [key]: prev[key]-1}));
    }

    const contextValue = { all_product, cartItem, addToCart, removeFromCart, isCartOpen, setIsCartOpen, quantity , setQuantity, setCartItem }

    return (
        <ShopContext.Provider value={contextValue}>
            {props.children}
        </ShopContext.Provider>
    )
};

export default ShopContextProvider;