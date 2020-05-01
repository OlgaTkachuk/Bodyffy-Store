import React, {Component} from 'react';
import Header from "../../basic/Header";
import NavLinks from "../../basic/NavLinks";
import Footer from "../../basic/Footer";
import Cart from "../../basic/Cart";
import Summary from "../../basic/Summary";

class ShoppingCart extends Component {

    render() {
        const {total, cart} = this.props.cart
        return (
            <div>
                <Header/>
                <NavLinks/>
                <div className={'cart-wrapper'}>
                    <Cart cart={cart} deleteFromCart={this.props.deleteFromCart} updateProductAmount={this.props.updateProductAmount}/>
                    <Summary total={total}/>
                </div>
                <Footer/>
            </div>
        );
    }
}

export default ShoppingCart;