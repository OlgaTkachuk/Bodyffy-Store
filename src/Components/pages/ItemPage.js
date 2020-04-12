import React, {Component} from 'react';
import Header from "../Header";
import Footer from "../Footer";
import NavLinks from "../NavLinks";
import ItemBlock from "../ItemBlock";
import PhotoBlock from "../PhotoBlock";
import DescriptionBlock from "../DescriptionBlock";
import Slider1 from "../Slider1";
import Banner from "../Banner";

class ItemPage extends Component {
    render() {
        return (
            <div>
                <Header/>
                <NavLinks/>
                <div className={'item-block'}>
                    <PhotoBlock/>
                    <DescriptionBlock/>
                    <div className={'block-wrapper'}>
                        <div className={'block-menu-title'}><h3>You May Also Like</h3></div>
                        <div className='par-center'><p>Explore similar products</p></div>
                        <Slider1/>
                        <Banner/>
                    </div>
                </div>
                <Footer/>
            </div>
        );
    }
}

export default ItemPage;