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
        this.props.deleteFromCart(slugToRemove)
    }

    handleMinus(event) {
        let slugToUpdate = event.target.id
        this.props.updateProductAmount(slugToUpdate, 'minus')
    }

    handlePlus(event) {
        let slugToUpdate = event.target.id
        this.props.updateProductAmount(slugToUpdate, 'plus')
    }

    renderTemplate = () => {
        const cart = this.props.cart
        return (
            cart.map((product) => {
                return (
                    <div className={'cart-item-wrapper'}>
                        <div className={'cart-photo-wrapper'}>
                            <img src={product.photo} className={'cart-img'}/>
                        </div>
                        <div className={'cart-item-description-wrapper'}>
                            <div className={'cart-item-title'}>
                                <h3>{product.title}</h3>
                            </div>
                            <div className={"quantity-bar"}>
                                <p>Quantity:  </p>
                                <div onClick={this.handleMinus} id={product.productSlug} className={'plus-minus'}>-</div>
                                {product.amount}
                                <div onClick={this.handlePlus} id={product.productSlug} className={'plus-minus'} >+</div>
                            </div>
                            <div className={'subtotal cart-item-price'}>
                                <p className={'total-text'}>Price</p>
                                <p className={'total-text'}>${product.price}</p>
                            </div>
                        </div>
                        <div className={'cart-delete-button-wrapper'}>
                        <img src={close} className={'close-button'} alt={''} id={product.productSlug}
                             onClick={this.handleClick}/>
                        </div>
                    </div>
                )
            }))
    }

    render() {
        return (
            <div className={'cart-block-wrapper'}>
                <div className={'cart-title'}><h4>Your shopping bag</h4></div>
                {this.renderTemplate()}
            </div>
        );
    }
}

export default Cart;