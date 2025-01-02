import { createContext, useReducer } from "react";
import { cartReducer } from "../../reducers/cartReducer";

const cartIntialState = {
    cartList: [],
    total: 0
}

const CartContext = createContext(cartIntialState);

export const CartProvider = ({children})=>{
    const [state, dispatch] = useReducer(cartReducer, cartIntialState);
    
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

        const value ={
            cartList: state.cartList,
            total: state.total,
            //addToCart,
            //removeFromCart,
            //clearCart
        }

        return(
            <CartContext.Provider value={value}>
                {children}
            </CartContext.Provider>
        )
    }
}