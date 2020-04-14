import React, {Component} from 'react';
import Header from "../../basic/Header";
import NavLinks from "../../basic/NavLinks";
import Footer from "../../basic/Footer";
import SigninBlock from "../../basic/SigninBlock";
import RegisterBlock from "../../basic/RegisterBlock";

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