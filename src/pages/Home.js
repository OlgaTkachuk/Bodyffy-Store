import React, {Component} from 'react';
import NavLinks from "../Components/NavLinks";
import Header from "../Components/Header";
import Banner from "../Components/Banner";
import {FiSearch} from "react-icons/fi";
import {FiX} from "react-icons/fi";

class Home extends Component {
    render() {
        return (
            <>
                <Header/>
                <NavLinks/>
                <Banner/>
            </>
        );
    }
}

export default Home;