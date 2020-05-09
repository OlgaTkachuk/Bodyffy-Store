import React, {useEffect} from 'react';
import Header from "../../basic/Header";
import NavLinks from "../../basic/NavLinks";
import Banner from "../../basic/Banner";
import WhiteCard1 from "../../basic/WhiteCard1";
import BlockMenu from "../../basic/BlockMenu";
import ResponsiveSlider from "../../basic/ResponsiveSlider";
import Footer from "../../basic/Footer";


function getInfoToSlider([slider]) {
    return {
        photos: slider && slider.photos,
        links: slider && slider.links
    }
}

const Home = ({getSlidersList, sliders}) => {
    useEffect(() => {
        getSlidersList()
    }, [])

    const {homeSlider1, homeSlider2, homeSlider3} = sliders;
    const data_one = getInfoToSlider(homeSlider1)
    const data_two = getInfoToSlider(homeSlider2)
    const data_three = getInfoToSlider(homeSlider3)
    return (
        <>
            <Header/>
            <NavLinks/>
            <Banner><WhiteCard1 title={'Discover premium cosmetics'} par={'bla bla bla bla bla bla '}/></Banner>
            <BlockMenu/>

            <div className={'block-menu-title'}><h3>New Arrivals</h3></div>
            <div className='par-center'><p>Explore our newest products</p></div>
            <ResponsiveSlider photos={data_one.photos} links={data_one.links}/>

            <div className={'container'}>
                <Banner/>
            </div>
            <Banner/>

            <div className={'block-menu-title'}><h3>New Arrivals</h3></div>
            <div className='par-center'><p>Explore our newest products</p></div>
            <ResponsiveSlider photos={data_two.photos} links={data_two.links}/>

            <div className={'block-menu-title'}><h3>New Arrivals</h3></div>
            <div className='par-center'><p>Explore our newest products</p></div>
            <ResponsiveSlider photos={data_three.photos} links={data_three.links}/>
            <Footer/>
        </>
    );
};

export default Home;