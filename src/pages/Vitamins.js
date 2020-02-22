import React, {Component} from 'react';
import Header from "../Components/Header";
import Footer from "../Components/Footer";
import NavLinks from "../Components/NavLinks";
import ItemsCollection from "../Components/ItemsCollection";
import PageCategories from "../Components/PageCategories";

class Vitamins extends Component {
    render() {
        return (
            <div>
                <Header/>
                <NavLinks/>
                <PageCategories cat_title={"Вітаміни та дієтичні додатки"}/>
                <ItemsCollection/>
                <Footer/>
            </div>
        );
    }
}

export default Vitamins;