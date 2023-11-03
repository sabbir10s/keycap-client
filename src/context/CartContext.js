import { createContext, useContext, useEffect, useReducer } from "react";
import reducer from "../reducer/cartReducer";

const CartContext = createContext();

const getCartData = () => {
    let localCartData = localStorage.getItem("productCart")

    console.log(localCartData);
    if (localCartData == [] || localCartData == null) {
        return []
    } else {
        return JSON.parse(localCartData)
    }
}

const initialState = {
    // cart: [],
    cart: getCartData(),
    total_item: 0,
    total_amount: 0,
    shipping_fee: 120
}
const CartProvider = ({ children }) => {
    const [state, dispatch] = useReducer(reducer, initialState)

    const addToCart = (_id, amount, singleProduct) => {
        dispatch({ type: "ADD_TO_CART", payload: { _id, amount, singleProduct } })
    }

    const removeItem = (_id) => {
        dispatch({ type: "REMOVE_ITEM", payload: _id })
    }

    useEffect(() => {
        localStorage.setItem("productCart", JSON.stringify(state.cart))
    }, [state.cart])

    return <CartContext.Provider value={{ ...state, addToCart, removeItem }}>{children}</CartContext.Provider>
}

const useCartContext = () => {
    return useContext(CartContext)
}
export { CartProvider, useCartContext }