import React, {Component} from 'react';
import Header from "../Header";
import NavLinks from "../NavLinks";
import Footer from "../Footer";
import Cart from "../Cart";
import Summary from "../Summary";

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