import React, {Component} from 'react';
import Header from "../../basic/Header";
import Footer from "../../basic/Footer";
import NavLinks from "../../basic/NavLinks";
import ItemsCollection from "../../basic/ItemsCollection";
import PageCategories from "../../basic/PageCategories";

class CategoryPage extends Component {
    render() {
        return (
            <div>
                <Header/>
                <NavLinks/>
                <PageCategories cat_title={"Медичні товари"}/>
                <ItemsCollection/>
                <Footer/>
            </div>
        );
    }
}

export default CategoryPage;