import { actionType } from "../helper/ActionTypes";

const ProductReducer = (state, action) => {
    switch (action.type) {

        // All Products
        case actionType.ALL_PRODUCT_LOADING:
            return {
                ...state,
                isLoading: true
            };
        case actionType.ALL_PRODUCT:
            const featureData = action.payload.filter((data) => {
                return data.featured === true
            })
            return {
                ...state,
                isLoading: false,
                products: action.payload,
                featureProducts: featureData
            }
        case actionType.ALL_PRODUCT_ERROR:
            return {
                ...state,
                isLoading: false,
                isError: true
            };

        // Single Product
        case actionType.SINGLE_PRODUCT_LOADING:
            return {
                ...state,
                isSingleLoading: true
            };
        case actionType.SINGLE_PRODUCT:
            return {
                ...state,
                isSingleLoading: false,
                singleProduct: action.payload,
            };
        case actionType.SINGLE_PRODUCT_ERROR:
            return {
                ...state,
                isSingleLoading: false,
                isSingleError: true
            };


        default:
            return state

    }
}

export default ProductReducer;