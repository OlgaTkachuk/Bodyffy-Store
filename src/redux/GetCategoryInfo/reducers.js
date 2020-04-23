import { SET_ACTIVE_CATEGORY_SLUG, GET_CATEGORY_PRODUCTS_ATTEMPT, GET_CATEGORY_PRODUCTS_SUCCESS, GET_CATEGORY_PRODUCTS_FAIL } from "./constants";

const initialState = {
    categorySlug: '',
    isFetching: false,
    category_photos: [],
    category_slugs: [],
    category_collections: [],
    category_title: [],
    collections_photos: []

}

export function getCategoryInfoReducer(state=initialState, action) {
    switch (action.type) {
        case SET_ACTIVE_CATEGORY_SLUG:
            return { ...state, categorySlug: action.categorySlug}
        case GET_CATEGORY_PRODUCTS_FAIL:
            return {...state, error: action.payload.message, isFetching: false}
        case GET_CATEGORY_PRODUCTS_ATTEMPT:
            return {...state, isFetching: true}
        case GET_CATEGORY_PRODUCTS_SUCCESS:
            return {
                ...state,
                isFetching: false,
                error: false,
                category_slugs: action.payload.category_slugs,
                category_photos: action.payload.category_photos,
                category_collections: action.payload.category_collections,
                category_title: action.payload.category_title,
                collections_photos: action.payload.collections_photos
            }
        default:
            return state

    }
}