import React, {Component} from 'react';
import PhotoBlock from "./PhotoBlock";
import DescriptionBlock from "./DescriptionBlock";
import Slider1 from "./Slider1";
import Banner from "./Banner";

class ItemBlock extends Component {
    render() {
        return (
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
        );
    }
}

export default ItemBlock;