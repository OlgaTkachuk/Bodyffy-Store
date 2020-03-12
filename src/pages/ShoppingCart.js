import React, {Component} from 'react';
import Header from "../Components/Header";
import NavLinks from "../Components/NavLinks";
import Footer from "../Components/Footer";
import Cart from "../Components/Cart";
import Summary from "../Components/Summary";

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