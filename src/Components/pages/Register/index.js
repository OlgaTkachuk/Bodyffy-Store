import React, {Component} from 'react';
import Header from "../../basic/Header";
import NavLinks from "../../basic/NavLinks";
import RegisterPageForm from "../../basic/RegisterPageForm";
import Footer from "../../basic/Footer";

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