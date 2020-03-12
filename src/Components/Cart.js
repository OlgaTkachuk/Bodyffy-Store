import React, {Component} from 'react';
import CartItem from "./CartItem";
import Banner from "./Banner";

class Cart extends Component {
    render() {
        return (
            <div className={'cart-block-wrapper'}>
                <div className={'cart-title'}> <h3>Your shopping bag</h3></div>
                <CartItem/>
                <CartItem/>
            </div>
        );
    }
}

export default Cart;