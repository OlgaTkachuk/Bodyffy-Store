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

    addToCart = () => async (dispatch,getState) => {
        const state = getState();
        let productSlug = state.prodInfo.product;
        let title = state.prodInfo.title.flat()[0];
        // let amount = state.prodInfo.count;
        let photo = state.prodInfo.photos.flat()[0];
        let price = state.prodInfo.price.flat()[0]
        const cart = state.cart.cart;
        cart.push({
            productSlug, title, photo, price
        })
        await dispatch(actions.addProductToCart(cart))
    };
}


export default Cart.getInstance();
