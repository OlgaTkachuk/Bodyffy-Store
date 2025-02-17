import React, {Component} from 'react';
import Header from "../../basic/Header";
import NavLinks from "../../basic/NavLinks";
import Footer from "../../basic/Footer";
import Cart from "../../basic/Cart";
import Summary from "../../basic/Summary";
import cartimg from '../../../assets/images/add-to-cart.gif'
import styles from './ShoppingCartStyle.scss'

class ShoppingCart extends Component {

    render() {
        const {total, cart} = this.props.cart
        return (
            <div>
                <Header/>
                <NavLinks/>
                {total ?
                    (<div className={'cart-wrapper'}>
                        <Cart cart={cart} deleteFromCart={this.props.deleteFromCart}
                              updateProductAmount={this.props.updateProductAmount}/>
                        <Summary total={total}/>
                    </div>)
                    :
                    (<div className={'empty-cart-page'}>
                        <img src={cartimg} alt={''} className={'cart-gif'}></img>
                        <div className={'empty-cart-title'}>
                        <p>Ваш кошик порожній...</p>
                        </div>
                    </div>)
                }

                <Footer/>
            </div>
        );
    }
}

export default ShoppingCart;