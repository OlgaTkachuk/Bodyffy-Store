import React from 'react';
import { connect } from 'react-redux';
import ShoppingCart from "../../Components/pages/ShoppingCart/";
import Cart from "../../redux/ManageShoppingCart/";

const mapStateToProps = store => {
    return {
        cart: store.cart
    }
}

const mapDispatchToProps = dispatch => {
    return {
        deleteFromCart: slugToRemove => dispatch(Cart.deleteFromCart(slugToRemove)),
        updateProductAmount: (slugToUpdate, operator) => dispatch(Cart.updateProductAmount(slugToUpdate, operator)),
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(ShoppingCart);