import React, {Component} from 'react';
import Header from "../Components/Header";
import Footer from "../Components/Footer";
import NavLinks from "../Components/NavLinks";
import ItemBlock from "../Components/ItemBlock";

class ItemPage extends Component {
    render() {
        return (
            <div>
                <Header/>
                <NavLinks/>
                <ItemBlock/>
                <Footer/>
            </div>
        );
    }
}

export default ItemPage;