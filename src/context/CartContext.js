import { createContext, useContext, useEffect, useReducer } from "react";
import reducer from "../reducer/cartReducer";

const CartContext = createContext();

const getCartData = () => {
    let localCartData = localStorage.getItem("productCart")

    if (localCartData == [] || localCartData == null || localCartData == undefined) {
        return []
    } else {
        return JSON.parse(localCartData)
    }
}

const initialState = {
    cart: getCartData(),
    total_item: 0,
    total_price: 0,
    shipping_fee: 5
}
const CartProvider = ({ children }) => {
    const [state, dispatch] = useReducer(reducer, initialState)

    const addToCart = (_id, amount, singleProduct) => {
        dispatch({ type: "ADD_TO_CART", payload: { _id, amount, singleProduct } })
    }

    const setIncrease = (_id) => {
        dispatch({ type: "SET_INCREMENT", payload: _id })
    }
    const setDecrease = (_id) => {
        dispatch({ type: "SET_DECREMENT", payload: _id })
    }

    const removeItem = (_id) => {
        dispatch({ type: "REMOVE_ITEM", payload: _id })
    }
    const clearCart = (_id) => {
        dispatch({ type: "CLEAR_CART" })
    }

    useEffect(() => {
        dispatch({ type: "CART_TOTAL_ITEM" })
        dispatch({ type: "CART_TOTAL_PRICE" })
        localStorage.setItem("productCart", JSON.stringify(state.cart))
    }, [state.cart])

    return <CartContext.Provider value={{ ...state, addToCart, removeItem, clearCart, setIncrease, setDecrease }}>{children}</CartContext.Provider>
}

const useCartContext = () => {
    return useContext(CartContext)
}
export { CartProvider, useCartContext }