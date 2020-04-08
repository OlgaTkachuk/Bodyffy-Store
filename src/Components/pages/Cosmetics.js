import React, {Component} from 'react';
import Header from "../Header";
import Footer from "../Footer";
import BlockMenu from "../BlockMenu";
import NavLinks from "../NavLinks";
import ItemsCollection from "../ItemsCollection";
import PageCategories from "../PageCategories";

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