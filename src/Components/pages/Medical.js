import React, {Component} from 'react';
import Header from "../Header";
import Footer from "../Footer";
import NavLinks from "../NavLinks";
import ItemsCollection from "../ItemsCollection";
import PageCategories from "../PageCategories";

class Medical extends Component {
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

export default Medical;