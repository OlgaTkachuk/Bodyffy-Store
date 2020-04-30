import React, {Component} from 'react';

class Summary extends Component {
    constructor(props) {
        super(props);
    }
    render() {
        console.log(this.props.total);
        return (
            <div className={'summary-wrapper'}>
                <form className={"checkout-form"}>
                    <h4 className={'summary-title'}>Order Summary</h4>
                    <div className={'subtotal'}>
                        <p className={'small-text'}>Subtotal</p>
                        <p className={'small-text'}>${this.props.total}</p>
                    </div>
                    <p className={'small-text'}>Доставка до 3-5 робочих днів</p>
                    <div className={'total'}>
                        <p className={'small-text total-text'}>Total</p>
                        <p className={'small-text total-text'}> ${this.props.total}</p>
                    </div>
                    <button type={'submit'} className={'button-form checkout-button'}>Checkout</button>
                </form>
            </div>
        );
    }
}

export default Summary;