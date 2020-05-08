import React, {Component} from 'react';
import Header from "../../basic/Header";
import NavLinks from "../../basic/NavLinks";
import Footer from "../../basic/Footer";
import Cart from "../../basic/Cart";
import Summary from "../../basic/Summary";
import OrderForm from "../../basic/OrderForm";

class ShoppingCart extends Component {

    render() {
        // const {total, cart} = this.props.cart
        return (
            <div>
                <Header/>
                <NavLinks/>
                <OrderForm/>
                <Footer/>
            </div>
        );
    }
}

export default ShoppingCart;