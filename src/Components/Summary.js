import React, {Component} from 'react';

class Summary extends Component {
    render() {
        return (
            <div className={'summary-wrapper'}>
                <form className={"checkout-form"}>
                    <h4 className={'summary-title'}>Order Summary</h4>
                    <div className={'subtotal'}>
                        <p className={'small-text'}>Subtotal</p>
                        <p className={'small-text'}>$4,900</p>
                    </div>
                    <p className={'small-text'}>Доставка до 04/04/2020</p>
                    <div className={'total'}>
                        <p className={'small-text total-text'}>Total</p>
                        <p className={'small-text total-text'}> $5,000</p>
                    </div>
                    <button type={'submit'} className={'button-form checkout-button'}>Checkout</button>
                </form>
            </div>
        );
    }
}

export default Summary;