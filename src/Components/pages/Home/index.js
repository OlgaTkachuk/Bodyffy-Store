import React, {Component} from 'react';
import NavLinks from "../../basic/NavLinks";
import Header from "../../basic/Header";
import Banner from "../../basic/Banner";
import BlockMenu from "../../basic/BlockMenu";
import Footer from "../../basic/Footer";
import WhiteCard1 from "../../basic/WhiteCard1";
import Slider1 from "../../basic/Slider1";
import ResponsiveSlider from "../../basic/ResponsiveSlider";
import ProductPhotos from "../../basic/ProductPhotos";


class Home extends Component {

componentDidMount() {
    this.props.getSlidersList();
    console.log(this.props);
}

    render() {
        const {homeSlider1, homeSlider2, isFetching, error} = this.props.sliders
        console.log(this.props);
        return (
            <>
                <Header/>
                <NavLinks/>
                <Banner><WhiteCard1 title={'Discover premium cosmetics'} par={'bla bla bla bla bla bla '}/></Banner>
                <BlockMenu/>
                <div className={'block-menu-title'}> <h3>New Arrivals</h3></div>
                <div className='par-center'> <p>Explore our newest products</p></div>
                <ResponsiveSlider  isFetching={isFetching} error={error} photos={homeSlider1.photos?.flat()} links={homeSlider1.links}/>
                <div className={'container'}>
                    <Banner/>
                </div>
                <Banner/>
                <div className={'block-menu-title'}> <h3>New Arrivals</h3></div>
                <div className='par-center'> <p>Explore our newest products</p></div>
            //
                <div className={'block-menu-title'}> <h3>New Arrivals</h3></div>
                <div className='par-center'> <p>Explore our newest products</p></div>
           //
                <Footer/>
        </>
        );
    }
}

export default Home;