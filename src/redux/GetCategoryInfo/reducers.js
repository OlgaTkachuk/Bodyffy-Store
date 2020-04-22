import { SET_ACTIVE_CATEGORY_SLUG } from "./constants";

const initialState = {
    categorySlug: ''
}

export function getCategoryInfoReducer(state=initialState, action) {
    switch (action.type) {
        case SET_ACTIVE_CATEGORY_SLUG:
            return { ...state, categorySlug: action.categorySlug}
        default:
            return state

    }
}