import React from 'react';
import { connect } from 'react-redux';
import OrderPage from "../../Components/pages/OrderPage";

const mapStateToProps = store => {
    console.log(store);
    return {
        cart: store.cart
    }
}
export default connect(mapStateToProps, null)(OrderPage)