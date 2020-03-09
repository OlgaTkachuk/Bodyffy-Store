import React, {Component} from 'react';
import Header from "../Components/Header";
import NavLinks from "../Components/NavLinks";
import Footer from "../Components/Footer";
import SigninBlock from "../Components/SigninBlock";
import RegisterBlock from "../Components/RegisterBlock";

class Signin extends Component {
    render() {
        return (
            <div>
                <Header/>
                <NavLinks/>
                <div className={'form'}>
                <SigninBlock/>
                <RegisterBlock/>
                </div>
                <Footer/>
            </div>
        );
    }
}

export default Signin;