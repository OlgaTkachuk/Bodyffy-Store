import React, {Component} from 'react';
import NavLinks from "../Components/NavLinks";
import Header from "../Components/Header";
import Banner from "../Components/Banner";
import BlockMenu from "../Components/BlockMenu";
import Slider from "../Components/Slider";
import Footer from "../Components/Footer";
import WhiteCard1 from "../Components/WhiteCard1";
import Slider1 from "../Components/Slider1";


class Home extends Component {
    render() {
        return (
            <>
                <Header/>
                <NavLinks/>
                <Banner><WhiteCard1 title={'Discover premium cosmetics'} par={'bla bla bla bla bla bla '}/></Banner>
                <BlockMenu/>
                <div className={'block-menu-title'}> <h3>New Arrivals</h3></div>
                <div className='par-center'> <p>Explore our newest products</p></div>
                <Slider1/>
                <div className={'container'}>
                    <Banner/>
                </div>
                <Banner/>
                <div className={'block-menu-title'}> <h3>New Arrivals</h3></div>
                <div className='par-center'> <p>Explore our newest products</p></div>
                <Slider1/>
                <div className={'block-menu-title'}> <h3>New Arrivals</h3></div>
                <div className='par-center'> <p>Explore our newest products</p></div>
                <Slider1/>
                <Footer/>
            </>
        );
    }
}

export default Home;