import React from 'react';
import { connect } from 'react-redux';
import TestPage from "../Components/pages/TestPage";
import {setProduct} from "../redux/ProductDetails/actions";
import {getPhotos} from "../redux/GetProductImages/actions";

const mapStateToProps = store => {
    console.log(store)
    return {
        prodImgs: store.prodImgs,
        prodDetails: store.prodDetails
    }
}
const mapDispatchToProps = dispatch => {
    return {
        setProductAction: product => dispatch(setProduct(product)),
        getPhotosAction: () => dispatch(getPhotos()),
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(TestPage);