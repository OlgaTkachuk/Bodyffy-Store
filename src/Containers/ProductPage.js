import React from 'react';
import { connect } from 'react-redux';
import TestPage from "../Components/pages/TestPage";
import {getPhotos} from "../redux/GetProductInfo/actions";
import ProductService from '../redux/GetProductInfo'
import actions from "../redux/GetProductInfo/actions";

const mapStateToProps = store => {
    console.log(store)
    return {
        prodImgs: store.prodImgs,
    }
}
const mapDispatchToProps = dispatch => {
    return {
        setActiveProductSlug: product => dispatch(actions.setActiveProductSlug(product)),
        getProductsList: () => dispatch(ProductService.getProductsList()),
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(TestPage);