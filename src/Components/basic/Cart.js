import React, {Component} from 'react';
import close from '../../assets/images/close.svg'

class Cart extends Component {
    constructor(props) {
        super(props);
        this.state={
            value: 1
        }
        this.handleClick = this.handleClick.bind(this)
    }
    handleClick(event) {

        this.setState({value:event.target.value})
        let slugToRemove = event.target.id;
        console.log(slugToRemove, "handleclick slug")
        this.props.deleteFromCart(slugToRemove)
    }
    renderTemplate = () => {
        const cart = this.props.cart
        console.log(cart);
        return (
                cart.map((product) => {
                        return (
                            <div className={'cart-item-wrapper'}>
                                <div>
                                    <img src={product.photo} className={'cart-img'}/>
                                </div>
                                <div className={'cart-item-description-wrapper'}>
                                    <div className={'cart-item-title'}>
                                        <h3>{product.title}</h3>
                                    </div>
                                    <div className={"quantity-bar"}>
                                        <p>Quantity: {product.amount}</p>
                                    </div>
                                    <div className={'subtotal cart-item-price'}>
                                        <p className={'total-text'}>Subtotal</p>
                                        <p className={'total-text'}>${product.price}</p>
                                    </div>
                                </div>
                                <img src={close} className={'close-button'} alt={''} id={product.productSlug} onClick={this.handleClick} />

                            </div>
                        )}))
    }
    render() {
        return (
            <div className={'cart-block-wrapper'}>
                <div className={'cart-title'}> <h3>Your shopping bag</h3></div>
                {this.renderTemplate()}
            </div>
        );
    }
}

export default Cart;