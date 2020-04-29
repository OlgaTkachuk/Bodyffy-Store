import {
    ADD_PRODUCT_TO_CART
} from "./constants";

const addProductToCart = (cart) => ({
    type: ADD_PRODUCT_TO_CART,
    payload: cart
});


export default {
   addProductToCart
}
