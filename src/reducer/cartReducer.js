
const cartReducer = (state, action) => {
    switch (action.type) {
        case "ADD_TO_CART":
            let { _id, amount, singleProduct } = action.payload
            // console.log(singleProduct);
            let cartProduct = {
                _id: _id,
                name: singleProduct.name,
                image: singleProduct.image,
                amount,
                price: singleProduct.price,
                max: singleProduct.stock
            }
            return {
                ...state,
                cart: [...state.cart, cartProduct],
            };

        case "REMOVE_ITEM":
            let updatedCart = state.cart.filter((curItem) => curItem._id !== action.payload)
            return {
                ...state,
                cart: updatedCart
            }
        default:
            return state;
    }
};
export default cartReducer;


