
const cartReducer = (state, action) => {
    switch (action.type) {
        case "ADD_TO_CART":
            console.log(action.type);
            return {
                ...state,
                cart: [...state.cart, action.payload],
                total_item: state.total_item + action.payload.amount,
                total_amount: state.total_amount + action.payload.singleProduct.price * action.payload.amount,
            };
        default:
            return state;
    }
};
export default cartReducer;


