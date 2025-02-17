import actions from './actions'
import {store as store} from "../../redux/index";
import Client from "../../Contentful";

export class Cart {
    static instance;

    static getInstance() {
        if (!Cart.instance) {
            Cart.instance = new Cart();
        }
        return Cart.instance;
    }

    calculateTotal(cart) {
        return cart.reduce((acc, product) => {
            return acc + product.price * product.amount;
        }, 0);
    }

    addToCart = () => async (dispatch, getState) => {
        const {prodInfo, cart: {cart}} = getState();    // const state = getState(); const prodInfo = state.prodInfo; const cart = state.cart.cart
        const productSlug = prodInfo.product;
        const title = prodInfo.title;
        const amount = prodInfo.currentAmount;
        const photo = prodInfo.photos[0];
        const price = prodInfo.price
        if (cart.findIndex(({productSlug: slug}) => slug === productSlug) < 0) {
            cart.push({
                productSlug, title, photo, price, amount
            })
        } else {
            window.alert("Здається Ви вже додали цей товар до кошика! Перейдіть, будь ласка, у кошик.")
        }
        let cartTotal = this.calculateTotal(cart)
        await dispatch(actions.addProductToCart({cart, cartTotal}))
    };

    deleteFromCart = (slugToRemove) => async (dispatch, getState) => {
        const state = getState();
        const cart = state.cart.cart;
        let prodId = cart.findIndex(({productSlug}) => productSlug === slugToRemove)
        cart.splice(prodId, 1);
        let cartTotal = this.calculateTotal(cart)
        await dispatch(actions.addProductToCart({cart, cartTotal}))
    };

    updateProductAmount = (slugToUpdate, operator) => async (dispatch, getState) => {
        const {cart: {cart}} = getState(); // const state = getState; const cart = state.cart.cart

        cart.map((product) => {
            if (product.productSlug === slugToUpdate) {
                if (operator === 'minus' && product.amount > 1) {
                    product.amount--
                } else if (operator === 'plus' && product.amount <= 9) {
                    product.amount++
                }
            }
            return cart
        })
        const cartTotal = this.calculateTotal(cart)
        await dispatch(actions.changeAmountInCart({cart, cartTotal}))
    };
}


export default Cart.getInstance();
