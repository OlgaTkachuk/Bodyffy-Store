import React, {Component} from 'react';
import Header from "../Components/Header";
import NavLinks from "../Components/NavLinks";
import RegisterPageForm from "../Components/RegisterPageForm";
import Footer from "../Components/Footer";

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