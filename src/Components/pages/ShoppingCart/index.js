import React, {Component} from 'react';
import Header from "../../basic/Header";
import NavLinks from "../../basic/NavLinks";
import Footer from "../../basic/Footer";
import Cart from "../../basic/Cart";
import Summary from "../../basic/Summary";

class ShoppingCart extends Component {
    render() {
        return (
            <div>
                <Header/>
                <NavLinks/>
                <div className={'cart-wrapper'}>
                    <Cart/>
                    <Summary/>
                </div>
                <Footer/>
            </div>
        );
    }
}

export default ShoppingCart;