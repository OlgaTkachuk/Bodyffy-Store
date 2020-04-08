import {SET_PRODUCT} from "./constants";

const initialState = {
    product: {name: "Product 1"}
}

export function productDetailsReducer(state = initialState, action) {
    switch (action.type) {
        case SET_PRODUCT:
            return {
                ...state, product: {name: action.payload}
            }
        default:
            return state
    }

}