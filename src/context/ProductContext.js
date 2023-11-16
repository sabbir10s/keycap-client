import axios from "axios";
import { useEffect, useReducer } from "react";
import { useContext } from "react";
import { createContext } from "react";
import reducer from "../reducer/productReducer";
import { actionType } from "../helper/ActionTypes";

const AppContext = createContext();
const API = 'http://localhost:5000/product';
const initialState = {
    isLoading: false,
    isError: false,
    products: [],
    featureProducts: [],
    isSingleLoading: false,
    isSingleError: false,
    singleProduct: {},
}
const AppProvider = ({ children }) => {

    const [state, dispatch] = useReducer(reducer, initialState)

    // All products API
    const getProducts = async (url) => {
        dispatch({ type: actionType.ALL_PRODUCT_LOADING })
        try {
            const res = await axios.get(url);
            const products = await res.data;
            dispatch({ type: actionType.ALL_PRODUCT, payload: products });
        }
        catch (error) {
            dispatch({ type: actionType.ALL_PRODUCT_ERROR })
        }
    };

    // single product API
    const getSingleProduct = async (url) => {
        dispatch({ type: actionType.SINGLE_PRODUCT_LOADING })
        try {
            const res = await axios.get(url);
            const singleProduct = await res.data;
            dispatch({ type: actionType.SINGLE_PRODUCT, payload: singleProduct });
        }
        catch (error) {
            dispatch({ type: actionType.SINGLE_PRODUCT_ERROR })
        }
    };

    useEffect(() => {
        getProducts(API);
    }, []);

    return <AppContext.Provider value={{ ...state, getSingleProduct }}>{children}</AppContext.Provider>
};

//custom hooks

const useProductContext = () => {
    return useContext(AppContext)
}
export { AppProvider, AppContext, useProductContext }