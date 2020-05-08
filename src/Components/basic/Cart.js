import React, {Component} from 'react';
import close from '../../assets/images/close.svg'

class Cart extends Component {
    constructor(props) {
        super(props);
        this.handleClick = this.handleClick.bind(this)
        this.handleMinus = this.handleMinus.bind(this)
        this.handlePlus = this.handlePlus.bind(this)
    }

    handleClick(event) {
        let slugToRemove = event.target.id;
        console.log(slugToRemove, "handleclick slug")
        this.props.deleteFromCart(slugToRemove)
    }
    handleMinus(event) {
        let slugToUpdate=event.target.id
        let operator = 'minus'
        this.props.updateProductAmount(slugToUpdate, operator)
    }
    handlePlus(event) {
        let slugToUpdate=event.target.id
        let operator = 'plus'
      this.props.updateProductAmount(slugToUpdate, operator)
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
                                        <div onClick={this.handleMinus} id={product.productSlug}>-</div>
                                        <p>Quantity: {product.amount}</p>
                                        <div onClick={this.handlePlus} id={product.productSlug}>+</div>
                                    </div>
                                    <div className={'subtotal cart-item-price'}>
                                        <p className={'total-text'}>Price</p>
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