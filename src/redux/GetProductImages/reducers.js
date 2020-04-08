import {GET_PHOTOS_REQUEST, GET_PHOTOS_SUCCESS, GET_PHOTOS_FAIL} from "./constants";
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
        case GET_PHOTOS_FAIL:
            return { ...state, error: action.payload.message, isFetching: false }
        default:
            return state
    }
}