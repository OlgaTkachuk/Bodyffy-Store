import {
    GET_PHOTOS_REQUEST,
    GET_PHOTOS_SUCCESS,
    GET_PHOTOS_FAIL,
    GET_PRODUCT_ATTEMPT,
    GET_PRODUCT_SUCCESS, GET_PRODUCT_FAIL, SET_ACTIVE_PRODUCT_SLUG
} from "./constants";
// import {ThunkAction as getState} from "redux-thunk";

const initialState = {
    photos: [],
    product: '',
    isFetching: false,
    error: '',
    item: ''
}

export function getProductsImgReducer(state = initialState, action) {
    switch (action.type) {
        case GET_PHOTOS_REQUEST:
            return { ...state, product: action.payload, isFetching: true }
        case GET_PHOTOS_SUCCESS:
            return { ...state, photos: action.payload.photos, item: action.payload.item, isFetching: false }
        case GET_PRODUCT_FAIL:
            return { ...state, error: action.payload.message, isFetching: false }
        case GET_PRODUCT_ATTEMPT:
            return {...state, isFetching: true}
        case GET_PRODUCT_SUCCESS:
            return {...state, isFetching: false, error: false, photos: action.payload.photos,item: action.payload.item}
        case SET_ACTIVE_PRODUCT_SLUG:
            return {...state, product: action.productSlug}
        default:
            return state
    }
}