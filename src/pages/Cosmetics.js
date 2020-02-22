import React, {Component} from 'react';
import Header from "../Components/Header";
import Footer from "../Components/Footer";
import BlockMenu from "../Components/BlockMenu";
import NavLinks from "../Components/NavLinks";

class Cosmetics extends Component {
    render() {
        return (
            <div>
                <Header/>
                <NavLinks/>
                <BlockMenu/>
                <Footer/>
            </div>
        );
    }
}

export default Cosmetics;