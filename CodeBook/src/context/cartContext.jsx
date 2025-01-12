/* eslint-disable react/prop-types */
import { createContext, useContext,  } from "react";

import { useReducer } from "react";
import { cartReducer } from "../reducers/cartReducer";

const cartIntialState = {
    cartList: [],
    total: 0,
}

const CartContext = createContext(cartIntialState);

export const CartProvider = ({children})=>{
    const [state, dispatch] = useReducer(cartReducer, cartIntialState);
    
    // eslint-disable-next-line no-unused-vars
    const addToCart = (product) =>{
        const updatedList = state.cartList.concat(product);
        const updatedTotal = state.total + product.price;

        dispatch({
            type: "ADD_TO_CART",
            payload:{
                products: updatedList,
                total: updatedTotal
            }
        })

    }

    const removeToCart = (product) => {
        const updatedList = state.cartList.filter(item=> item.id !== product.id)
        const updatedTotal = state.total - product.price;


        dispatch({
            type: "REMOVE_TO_CART",
            payload:{
                products: updatedList,
                total: updatedTotal
            }
        })

    }

    const clearCart = () => {
        const updatedList = []
        const updatedTotal = []

        dispatch({
            type: "CLEAR_TO_CART",
            payload:{
                products: updatedList,
                total: updatedTotal
            }
        })

    }

    const value ={
        cartList: state.cartList,
        total: state.total,
        addToCart,
        removeToCart,
        clearCart
    }

    return(
        <CartContext.Provider value={value}>
            {children}
        </CartContext.Provider>
    )
}

export const useCart = () => {
    const context = useContext(CartContext);
    return context;
}
