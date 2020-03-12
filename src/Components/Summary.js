import React, {Component} from 'react';

class Summary extends Component {
    render() {
        return (
            <div className={'summary-wrapper'}>
                <form  className={"checkout-form"}>
                    <h4>Order Summary</h4>
                    <h4>Subtotal</h4>
                    <p>Доставка до 04.04.2020</p>
                    <h3>Total $5,000</h3>
                    <button type={'submit'}>Checkout</button>
                </form>
            </div>
        );
    }
}

export default Summary;