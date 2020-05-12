import React, {Component} from 'react';
import {Link, NavLink} from "react-router-dom";

class Summary extends Component {
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
                    <p className={'small-text'}>Доставка 3-5 робочих днів</p>
                    <div className={'total'}>
                        <p className={'small-text total-text'}>Total</p>
                        <p className={'small-text total-text'}> ${this.props.total}</p>
                    </div>
                    <NavLink to="/order" type={'submit'} className={'button-wrapper'}> <div className={'button-form greenblack-button'}>Оформити</div></NavLink>
                </form>
            </div>
        );
    }
}

export default Summary;