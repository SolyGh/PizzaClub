import products from '../data.json'

const initialState = {
    cart: [],
    cartTotal: 0,
    products: products,
}

const reducer = (state = initialState, action) => {
    const { type, payload } = action;
    switch (type) {
        case 'ADD_TO_CART': {
            let newCart = [...state.cart];
            const productIndex = newCart.findIndex(product => product.name === payload.name)
            if (productIndex <= -1) {
                newCart = newCart.concat({ ...payload, quantity: 1 })
            } else {
                newCart = newCart.map(product => {
                    if (product.name === payload.name) {
                        return { ...product, quantity: product.quantity + 1 }
                    }
                    return product;
                })
            }
            return {
                ...state,
                cart: newCart,
                cartTotal: state.cartTotal + payload.price
            };
        }
        case 'REMOVE_FROM_CART': {
            let newCart = [...state.cart];
            newCart = newCart.filter(product => product.name !== payload)
            let newCartTotal = newCart.reduce((a, b) => a + b.price * b.quantity, 0)
            return {
                ...state,
                cart: newCart,
                cartTotal: newCartTotal
            }
        }
        default:
            return state;
    }
}

export default reducer;