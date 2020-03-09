import React, {Component} from 'react';
import Header from "../Components/Header";
import Footer from "../Components/Footer";
import NavLinks from "../Components/NavLinks";

class ItemPage extends Component {
    render() {
        return (
            <div>
                <Header/>
                <NavLinks/>
                item page
                <Footer/>
            </div>
        );
    }
}

export default ItemPage;