import {
    GET_PRODUCT_ATTEMPT,
    GET_PRODUCT_SUCCESS,
    GET_PRODUCT_FAIL,
    SET_ACTIVE_PRODUCT_SLUG,
    CHANGE_AMOUNT
} from "./constants";


const initialState = {
    photos: [],
    product: '',
    isFetching: false,
    error: '',
    item: '',
    title: '',
    category: '',
    price: 0,
    currentAmount: 1,
    similar_photos: [],
    similar_links: [],
    description: '',
    availability: false
}

export function getProductsInfoReducer(state = initialState, action) {
    switch (action.type) {
        case GET_PRODUCT_FAIL:
            return {...state, error: action.payload.message, isFetching: false}
        case GET_PRODUCT_ATTEMPT:
            return {...state, isFetching: true}
        case GET_PRODUCT_SUCCESS:
            return {
                ...state,
                isFetching: false,
                error: false,
                photos: action.payload.photos,
                item: action.payload.item,
                title: action.payload.title,
                category: action.payload.category,
                price: action.payload.price,
                availability: action.payload.availability,
                similar_photos: action.payload.similar_photos,
                similar_links: action.payload.similar_links,
                description: action.payload.description
            }
        case SET_ACTIVE_PRODUCT_SLUG:
            return {...state, product: action.productSlug}
        case CHANGE_AMOUNT:
            return {...state, currentAmount: action.newCount}
        default:
            return state
    }
}