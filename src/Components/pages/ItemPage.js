import React, {Component} from 'react';
import Header from "../Header";
import Footer from "../Footer";
import NavLinks from "../NavLinks";
import ItemBlock from "../ItemBlock";

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