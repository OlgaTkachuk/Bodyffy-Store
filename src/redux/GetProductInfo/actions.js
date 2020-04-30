import {
    GET_PRODUCT_ATTEMPT,
    GET_PRODUCT_SUCCESS,
    GET_PRODUCT_FAIL,
    SET_ACTIVE_PRODUCT_SLUG, CHANGE_AMOUNT
} from "./constants";

const getProductAttempt = () => ({
    type: GET_PRODUCT_ATTEMPT
});

const getProductSuccess = (payload) => ({
    type: GET_PRODUCT_SUCCESS,
    payload
});
const changeAmount = (newCount) => ({
    type: CHANGE_AMOUNT,
    newCount
});
const getProductFail = () => ({
    type: GET_PRODUCT_FAIL,
});
const setActiveProductSlug = (productSlug) => ({
    type: SET_ACTIVE_PRODUCT_SLUG,
    productSlug
});

export default {
    getProductAttempt,
    getProductSuccess,
    getProductFail,
    setActiveProductSlug,
    changeAmount
}
