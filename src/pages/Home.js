import React, {Component} from 'react';
import NavLinks from "../Components/NavLinks";
import Header from "../Components/Header";
import Banner from "../Components/Banner";
import BlockMenu from "../Components/BlockMenu";
import Slider from "../Components/Slider";
import Footer from "../Components/Footer";
import WhiteCard1 from "../Components/WhiteCard1";


class Home extends Component {
    render() {
        return (
            <>
                <Header/>
                <NavLinks/>
                <Banner><WhiteCard1 title={'Discover premium cosmetics'} par={'bla bla bla bla bla bla '}/></Banner>
                <BlockMenu/>
                <Slider/>
                <div className={'container'}>
                <Banner/>
                </div>
                <Banner/>
                <Slider/>
                <Slider/>
                <Footer/>
            </>
        );
    }
}

export default Home;