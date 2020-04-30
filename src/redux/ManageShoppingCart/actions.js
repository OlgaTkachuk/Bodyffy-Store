import {
    ADD_PRODUCT_TO_CART
} from "./constants";

const addProductToCart = (payload) => ({
    type: ADD_PRODUCT_TO_CART,
    payload: payload
});


export default {
   addProductToCart
}
