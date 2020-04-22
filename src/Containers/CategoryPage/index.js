import React from 'react';
import { connect } from 'react-redux';
import actions from "../../redux/GetCategoryInfo/actions";
import CategoryPage from "../../Components/pages/CategoryPage/";

const mapStateToProps = store => {
    console.log(store)
    return {
        categoryInfo: store.categoryInfo,
    }
}
const mapDispatchToProps = dispatch => {
    return {
        setActiveCategorySlug: categorySlug => dispatch(actions.setActiveCategorySlug(categorySlug)),
        // getProductsList: () => dispatch(ProductService.getProductsList()),
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(CategoryPage);