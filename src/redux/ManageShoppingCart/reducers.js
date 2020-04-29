import {ADD_PRODUCT_TO_CART} from "./constants";

const initialState = {
    cart: ''
}

export function shoppingCartReducer(state = initialState, action) {
    switch (action.type) {
        case ADD_PRODUCT_TO_CART:
            return {...state, cart : action.payload}
        default:
            return state
    }
}