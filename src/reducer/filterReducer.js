const filterReducer = (state, action) => {
    switch (action.type) {

        case 'LOAD_FILTER_PRODUCTS':

            let priceArray = action.payload.map((curElem) => curElem.price)
            let maxPrice = Math.max(...priceArray)

            return {
                ...state,
                filter_products: [...action.payload],
                all_products: [...action.payload],
                filters: { ...state.filters, maxPrice, price: maxPrice }
            }
        case "SET_GRID_VIEW":
            return {
                ...state,
                grid_view: true
            }
        case "SET_LIST_VIEW":
            return {
                ...state,
                grid_view: false
            }
        case "GET_SORT_VALUE":
            return {
                ...state,
                sorting_value: action.payload
            }

        case "SORTING_PRODUCTS":
            let newSortData;
            const { filter_products, sorting_value } = state
            let tempSortProduct = [...filter_products];
            const sortingProducts = (a, b) => {
                if (sorting_value === 'default') {
                    return filter_products
                }
                if (sorting_value === 'lowest') {
                    return a.price - b.price
                }
                if (sorting_value === 'highest') {
                    return b.price - a.price
                }
            }
            newSortData = tempSortProduct.sort(sortingProducts)
            return {
                ...state,
                filter_products: newSortData
            }
        case "UPDATE_COMPANY_FILTER":
            return {
                ...state,
                filters: {
                    ...state.filters,
                    company: action.payload,
                },
            };
        case "UPDATE_FILTERS_VALUE":
            const { name, value } = action.payload
            return {
                ...state,
                filters: {
                    ...state.filters,
                    [name]: value,
                }
            }

        case "FILTER_PRODUCTS":
            let { all_products } = state;
            let tempFilterProduct = [...all_products];
            const { text, category, company, price } = state.filters
            if (text) {
                tempFilterProduct = tempFilterProduct.filter((curElem) => {
                    return curElem.name.toLowerCase().startsWith(text)
                })
            }

            if (category !== "all") {
                tempFilterProduct = tempFilterProduct.filter((curElem) => {
                    return curElem.category === category
                })
            }
            if (company !== "all") {
                tempFilterProduct = tempFilterProduct.filter((curElem) => {
                    return curElem.company === company
                })
            }
            if (price === 0) {
                tempFilterProduct = tempFilterProduct.filter((curElem) => curElem.price == price)
            }
            else {
                tempFilterProduct = tempFilterProduct.filter((curElem) => curElem.price <= price)
            }

            return {
                ...state,
                filter_products: tempFilterProduct
            }

        case "CLEAR_FILTERS":
            return {
                ...state,
                filters: {
                    ...state.filters,
                    text: "",
                    category: "all",
                    company: "all",
                    maxPrice: state.filters.maxPrice,
                    price: state.filters.maxPrice,
                    minPrice: state.filters.minPrice,
                }
            }
        default: return state
    }
}
export default filterReducer