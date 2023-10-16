const filterReducer = (state, action) => {
    switch (action.type) {

        case 'LOAD_FILTER_PRODUCTS':
            return {
                ...state,
                filter_products: [...action.payload],
                all_products: [...action.payload]
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
            // let userShortValue = document.getElementById("sort")
            // let sort_value = userShortValue.options[userShortValue.selectedIndex].value
            // console.log(sort_value);

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
            console.log(newSortData);
            return {
                ...state,
                filter_products: newSortData
            }
        default: return state
    }
}
export default filterReducer