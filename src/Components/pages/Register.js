import React, {Component} from 'react';
import Header from "../Header";
import NavLinks from "../NavLinks";
import RegisterPageForm from "../RegisterPageForm";
import Footer from "../Footer";

class Register extends Component {

    render() {
        return (
            <div>
                <Header/>
                <NavLinks/>
                <RegisterPageForm/>
                <Footer/>
            </div>
        );
    }
}

export default Register;