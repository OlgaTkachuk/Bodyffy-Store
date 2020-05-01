import {ADD_PRODUCT_TO_CART, DELETE_PRODUCT_FROM_CART,CHANGE_CART_PRODUCT_AMOUNT} from "./constants";

const initialState = {
    cart: [],
    total: 0
}

export function shoppingCartReducer(state = initialState, action) {
    switch (action.type) {
        case ADD_PRODUCT_TO_CART:
            return {...state, cart: action.payload.cart, total: action.payload.cartTotal}
        case DELETE_PRODUCT_FROM_CART:
            return {...state, cart: action.payload.cart, total: action.payload.cartTotal}
        case CHANGE_CART_PRODUCT_AMOUNT:
            return {...state, cart: action.payload.cart, total: action.payload.cartTotal}
        default:
            return state
    }
}