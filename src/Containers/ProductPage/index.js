import React from 'react';
import { connect } from 'react-redux';
// import {getPhotos} from "../../redux/GetProductInfo/actions";
import ProductService from '../../redux/GetProductInfo/index'
import actions from "../../redux/GetProductInfo/actions";
import Product from "../../Components/pages/ProductPage/index";
import Cart from "../../redux/ManageShoppingCart/index";

const mapStateToProps = store => {
    console.log(store)
    return {
        prodInfo: store.prodInfo,
        cart: store.cart
    }
}

const mapDispatchToProps = dispatch => {
    return {
        setActiveProductSlug: product => dispatch(actions.setActiveProductSlug(product)),
        getProductsList: () => dispatch(ProductService.getProductsList()),
        addToCart: () => dispatch(Cart.addToCart())
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(Product);