import { createContext, useContext } from "react";
import { useProductContext } from "./ProductContext";
import { useReducer } from "react";
import { useEffect } from "react";
import reducer from "../reducer/filterReducer";

const FilterContext = createContext();
const initialState = {
    filter_products: [],
    all_products: [],
    grid_view: true,
    sorting_value: "default",
    filters: {
        text: "",
        category: "all",
        company: "all",
        maxPrice: 0,
        price: 0,
        minPrice: 0,
    }
}
export const FilterContextProvider = ({ children }) => {
    const { products } = useProductContext()
    const [state, dispatch] = useReducer(reducer, initialState)

    // Set Grid View 
    const setGridView = () => {
        return dispatch({ type: "SET_GRID_VIEW" })
    }

    // Set List View 
    const setListView = () => {
        return dispatch({ type: "SET_LIST_VIEW" })
    }

    // Sorting Function
    const sorting = (event) => {
        let userValue = event.target.value;
        console.log(userValue);
        dispatch({ type: "GET_SORT_VALUE", payload: userValue })
    }

    // Update Filter values
    const updateFilterValue = (e) => {
        let name = e.target.name;
        let value = e.target.value;
        if (name === "company") {
            return dispatch({ type: "UPDATE_COMPANY_FILTER", payload: value });
        }
        return dispatch({ type: "UPDATE_FILTERS_VALUE", payload: { name, value } })
    }
    // To clear the filters value 
    const clearFilters = () => {
        dispatch({ type: "CLEAR_FILTERS" })
    }
    // Sort the product
    useEffect(() => {
        dispatch({ type: "FILTER_PRODUCTS" })
        dispatch({ type: "SORTING_PRODUCTS" })
    }, [products, state.sorting_value, state.filters]);

    useEffect(() => {
        dispatch({ type: "LOAD_FILTER_PRODUCTS", payload: products })
    }, [products])

    return <FilterContext.Provider value={{ ...state, setGridView, setListView, sorting, updateFilterValue, clearFilters }}>
        {children}
    </FilterContext.Provider>
}

export const useFilterContext = () => {
    return useContext(FilterContext)
}