import {
    SET_ACTIVE_CATEGORY_SLUG,
    GET_CATEGORY_PRODUCTS_ATTEMPT,
    GET_CATEGORY_PRODUCTS_SUCCESS,
    GET_CATEGORY_PRODUCTS_FAIL,
    SET_ACTIVE_COLLECTION_SLUG,
    GET_COLLECTION_PRODUCTS_ATTEMPT,
    GET_COLLECTION_PRODUCTS_SUCCESS,
    GET_COLLECTION_PRODUCTS_FAIL
} from "./constants";

const setActiveCategorySlug = (categorySlug) => ({
    type: SET_ACTIVE_CATEGORY_SLUG,
    categorySlug
});
const setActiveCollection = (collectionSlug) => ({
    type: SET_ACTIVE_COLLECTION_SLUG,
    collectionSlug
});
const getCategoryProductsAttempt = () => ({
    type: GET_CATEGORY_PRODUCTS_ATTEMPT
});

const getCategoryProductsSuccess = (payload) => ({
    type: GET_CATEGORY_PRODUCTS_SUCCESS,
    payload
});
const getCategoryProductsFail = (payload) => ({
    type: GET_CATEGORY_PRODUCTS_FAIL,
    payload
});
const getCollectionProductsAttempt = () => ({
    type: GET_COLLECTION_PRODUCTS_ATTEMPT
});

const getCollectionProductsSuccess = (payload) => ({
    type: GET_COLLECTION_PRODUCTS_SUCCESS,
    payload
});
const getCollectionProductsFail = (payload) => ({
    type: GET_COLLECTION_PRODUCTS_FAIL,
    payload
});

export default {
    setActiveCategorySlug,
    getCategoryProductsAttempt,
    getCategoryProductsSuccess,
    getCategoryProductsFail,
    setActiveCollection,
    getCollectionProductsAttempt,
    getCollectionProductsSuccess,
    getCollectionProductsFail

}
