import axios from "axios";
import { useEffect } from "react";
import { useContext } from "react";
import { createContext } from "react";

const AppContext = createContext();
const API = 'https://nexiq-server.vercel.app/product';

const AppProvider = ({ children }) => {

    const getProducts = async (url) => {
        const res = await axios.get(url);
        const products = await res.data;
        console.log(products);
    };

    useEffect(() => {
        getProducts(API);
    }, []);

    return <AppContext.Provider value={{
        name: 'sabbir'
    }}>{children}</AppContext.Provider>
};

//custom hooks

const useProductContext = () => {
    return useContext(AppContext)
}
export { AppProvider, AppContext, useProductContext }