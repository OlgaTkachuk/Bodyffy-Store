import React, {Component} from 'react';
import Header from "../Components/Header";
import Footer from "../Components/Footer";
import BlockMenu from "../Components/BlockMenu";
import NavLinks from "../Components/NavLinks";
import ItemsCollection from "../Components/ItemsCollection";
import PageCategories from "../Components/PageCategories";

class Cosmetics extends Component {
    render() {
        return (
            <div>
                <Header/>
                <NavLinks/>
                <PageCategories cat_title={"Косметика"}/>
                <ItemsCollection/>
                <Footer/>
            </div>
        );
    }
}

export default Cosmetics;