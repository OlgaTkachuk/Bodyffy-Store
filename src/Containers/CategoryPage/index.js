import React from 'react';
import { connect } from 'react-redux';
import actions from "../../redux/GetCategoryInfo/actions";
import CategoryPage from "../../Components/pages/CategoryPage/";
import CategoryService from "../../redux/GetCategoryInfo/";

const mapStateToProps = store => {
    console.log(store)
    return {
        categoryInfo: store.categoryInfo,
    }
}
const mapDispatchToProps = dispatch => {
    return {
        setActiveCategorySlug: categorySlug => dispatch(actions.setActiveCategorySlug(categorySlug)),
        setActiveCollection: collectionSlug => dispatch(actions.setActiveCollection(collectionSlug)),
        getCategoryProductsList: () => dispatch(CategoryService.getCategoryProductsList()),
        getCollectionProductsList: () => dispatch(CategoryService.getCollectionProductsList()),
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(CategoryPage);