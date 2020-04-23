import { SET_ACTIVE_CATEGORY_SLUG, GET_CATEGORY_PRODUCTS_ATTEMPT, GET_CATEGORY_PRODUCTS_SUCCESS, GET_CATEGORY_PRODUCTS_FAIL} from "./constants";

const setActiveCategorySlug = (categorySlug) => ({
    type: SET_ACTIVE_CATEGORY_SLUG,
    categorySlug
});
const getCategoryProductsAttempt = () => ({
    type: GET_CATEGORY_PRODUCTS_ATTEMPT
});

const getCategoryProductsSuccess = (payload) => ({
    type: GET_CATEGORY_PRODUCTS_SUCCESS,
    payload
});
const getCategoryProductsFail = () => ({
    type: GET_CATEGORY_PRODUCTS_FAIL,
});

export default {
    setActiveCategorySlug,
    getCategoryProductsAttempt,
    getCategoryProductsSuccess,
    getCategoryProductsFail
}
