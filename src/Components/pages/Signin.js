import React, {Component} from 'react';
import Header from "../Header";
import NavLinks from "../NavLinks";
import Footer from "../Footer";
import SigninBlock from "../SigninBlock";
import RegisterBlock from "../RegisterBlock";

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