import React, {Component} from 'react';
import Header from "../Components/Header";
import NavLinks from "../Components/NavLinks";
import Footer from "../Components/Footer";

class Signin extends Component {
    render() {
        return (
            <div>
                <Header/>
                <NavLinks/>
                <Footer/>
            </div>
        );
    }
}

export default Signin;