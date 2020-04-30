import {
    ADD_PRODUCT_TO_CART, DELETE_PRODUCT_FROM_CART,CHANGE_CART_PRODUCT_AMOUNT
} from "./constants";

const addProductToCart = (payload) => ({
    type: ADD_PRODUCT_TO_CART,
    payload: payload
});
const deleteProductFromCart = (payload) => ({
    type: DELETE_PRODUCT_FROM_CART,
    payload: payload
});
// const changeAmountInCart = (payload) => ({
//     type: CHANGE_CART_PRODUCT_AMOUNT,
//     payload: payload
// });
//

export default {
   addProductToCart,
    deleteProductFromCart,
    // changeAmountInCart
}
