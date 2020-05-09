import React, {useEffect} from 'react';
import Header from "./Header";
import NavLinks from "./NavLinks";
import Banner from "./Banner";
import WhiteCard1 from "./WhiteCard1";
import BlockMenu from "./BlockMenu";
import ResponsiveSlider from "./ResponsiveSlider";
import Footer from "./Footer";

const Test = ({getSlidersList, sliders }) => {
    useEffect(()=>{
        getSlidersList()
    },[])

    const {homeSlider1 = [], homeSlider2, isFetching, error} = sliders;
    const photos = homeSlider1.length ? homeSlider1[0].photos.flat() : [];

    return (
        <>
            <Header/>
            <NavLinks/>
            <Banner><WhiteCard1 title={'Discover premium cosmetics'} par={'bla bla bla bla bla bla '}/></Banner>
            <BlockMenu/>
            <div className={'block-menu-title'}> <h3>New Arrivals</h3></div>
            <div className='par-center'> <p>Explore our newest products</p></div>
            {
                !!homeSlider1?.length && (
                    <ResponsiveSlider photos={photos} links={homeSlider1[0] && homeSlider1[0].links}/>
                )
            }
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
};

export default Test;