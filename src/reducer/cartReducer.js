
const cartReducer = (state, action) => {
    switch (action.type) {
        case "ADD_TO_CART":
            let { _id, amount, singleProduct } = action.payload


            // handle existing product
            let existingProduct = state.cart.find((curItem) => curItem._id === _id)
            console.log(existingProduct);

            if (existingProduct) {
                let updatedCart = state.cart.map((curItem) => {
                    if (curItem._id === _id) {
                        let newAmount = curItem.amount + amount
                        if (newAmount >= curItem.max) {
                            newAmount = curItem.max
                        }
                        return {
                            ...curItem,
                            amount: newAmount
                        }
                    }
                    else {
                        return curItem
                    }
                })
                return {
                    ...state,
                    cart: updatedCart
                }
            } else {
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
            }


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


