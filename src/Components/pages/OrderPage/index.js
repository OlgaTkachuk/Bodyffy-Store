import React, {Component} from 'react';
import Header from "../../basic/Header";
import NavLinks from "../../basic/NavLinks";
import Footer from "../../basic/Footer";
import OrderForm from "../../basic/OrderForm";

class OrderPage extends Component {

    render() {
        const {cart, total} = this.props.cart;
        console.log(cart, total, 'CART TOTAL');
        return (
            <div>
                <Header/>
                <NavLinks/>
                <OrderForm cart={cart} total={total}/>
                <Footer/>
            </div>
        );
    }
}

export default OrderPage;