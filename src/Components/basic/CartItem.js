import React, {Component} from 'react';
import slider1 from '../../assets/images/slider1.jpg'

class CartItem extends Component {
    render() {
        return (
            <div className={'cart-item-wrapper'}>
                <div>
                    <img src={slider1} className={'cart-img'}/>
                </div>
                <div className={'cart-item-description-wrapper'}>
                    <div className={'cart-item-title'}>
                        <h3>Diamond with Rose Gold Ring</h3>
                    </div>
                    <div className={"quantity-bar"}>
                        <p>Quantity:</p>
                        <select>
                            <option>1</option>
                            <option>2</option>
                            <option>3</option>
                        </select>
                    </div>
                    <div className={'subtotal cart-item-price'}>
                        <p className={'total-text'}>Subtotal</p>
                        <p className={'total-text'}>$4,900</p>
                    </div>
                </div>
            </div>
        );
    }
}

export default CartItem;