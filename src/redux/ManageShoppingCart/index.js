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
    calculateTotal(products) {
        return products.reduce((acc, product) => {
            return acc + product.price * product.amount;
        }, 0);
    }

    addToCart = () => async (dispatch,getState) => {
        const state = getState();
        let productSlug = state.prodInfo.product;
        let title = state.prodInfo.title.flat()[0];
        let amount = state.prodInfo.currentAmount;
        let photo = state.prodInfo.photos.flat()[0];
        let price = state.prodInfo.price.flat()[0]
        const cart = state.cart.cart;
        cart.push({
            productSlug, title, photo, price, amount
        })
        let cartTotal = this.calculateTotal(cart)
        await dispatch(actions.addProductToCart({cart, cartTotal}))
    };

    deleteFromCart = (slugToRemove) => async (dispatch,getState) => {
        const state = getState();
        const cart = state.cart.cart;
        console.log(slugToRemove, 'slugToRemove');
        let prodId = cart.findIndex(({productSlug}) => productSlug === slugToRemove)
        console.log(prodId);
        cart.splice(prodId, 1);
        console.log(cart)
        let cartTotal = this.calculateTotal(cart)
        await dispatch(actions.addProductToCart({cart, cartTotal}))
    };

    // updateProductAmount = (slugToUpdate, newQuantity) => async (dispatch,getState) => {
    //     const state = getState();
    //     const cart = state.cart.cart;
    //
    //     let prodId = cart.findIndex(({productSlug}) => productSlug === slugToUpdate)
    //     cart.splice(prodId, 1);
    //     console.log(cart)
    //     let cartTotal = cart.calculateTotal(cart)
    //     await dispatch(actions.addProductToCart({cart, cartTotal}))
    // };

}


export default Cart.getInstance();
