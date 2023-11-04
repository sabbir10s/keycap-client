
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

        case "SET_INCREMENT":
            let updatedAmount = state.cart.map((curElem) => {
                if (curElem._id === action.payload) {
                    let incrementAmount = curElem.amount + 1
                    if (incrementAmount >= curElem.max) {
                        incrementAmount = curElem.max
                    }
                    return {
                        ...curElem,
                        amount: incrementAmount
                    }
                } else {
                    return curElem
                }
            })
            return {
                ...state, cart: updatedAmount
            };
        case "SET_DECREMENT":
            let updatedCartAmount = state.cart.map((curElem) => {
                if (curElem._id === action.payload) {
                    let decrementAmount = curElem.amount - 1
                    if (decrementAmount <= 1) {
                        decrementAmount = 1
                    }
                    return {
                        ...curElem,
                        amount: decrementAmount
                    }
                } else {
                    return curElem
                }
            })
            return {
                ...state, cart: updatedCartAmount
            };


        case "REMOVE_ITEM":
            let updatedCart = state.cart.filter((curItem) => curItem._id !== action.payload)
            return {
                ...state,
                cart: updatedCart
            }
        case "CART_TOTAL_ITEM":
            let updatedCartItem = state.cart.reduce((initialValue, curElem) => {
                let { amount } = curElem
                initialValue = initialValue + amount
                return initialValue
            }, 0)
            return {
                ...state,
                total_item: updatedCartItem
            }
        case "CART_TOTAL_PRICE":
            let totalPrice = state.cart.reduce((initialValue, curElem) => {
                let { price, amount } = curElem
                initialValue = initialValue + price * amount
                return initialValue
            }, 0)
            return {
                ...state,
                total_price: totalPrice
            }
        default:
            return state;
    }
};
export default cartReducer;


