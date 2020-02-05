import React, {Component} from 'react';
import NavLinks from "../Components/NavLinks";
import Header from "../Components/Header";
import Banner from "../Components/Banner";

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