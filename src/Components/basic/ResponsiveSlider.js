import React,{Component} from 'react';
import InfiniteCarousel from 'react-leaf-carousel';
import data from '../../assets/data/slider_data1'
import AliceCarousel from 'react-alice-carousel'
import 'react-alice-carousel/lib/alice-carousel.css'
import {Link} from "react-router-dom";

class ResponsiveSlider extends Component {
    constructor(props) {
        super(props);
        // this.state = {
        //     galleryItems: this.props.photos.map((i) =>
        //         <Link to={`/item/${this.props.similar_links[i]}`}><img alt='' src={i}>
        //         </img></Link>),
        // }
    }
    responsive = {
        0: { items: 1 },
        1024: { items: 2 },
    }
    onSlideChange(e) {
        console.debug('Item`s position during a change: ', e.item)
        console.debug('Slide`s position during a change: ', e.slide)
    }

    onSlideChanged(e) {
        console.debug('Item`s position after changes: ', e.item)
        console.debug('Slide`s position after changes: ', e.slide)
    }


    render() {
        return (
            <div className={"responsive-slider-container"}>
                <AliceCarousel
                    items={this.props.photos.map((i,index) =>   <Link to={`/item/${this.props.links[index]}`}><img alt='' src={i}>
                    </img></Link>)}
                    // items={this.props.photos.map((i) => <img alt='' src={i}></img>)}
                    responsive={this.responsive}
                    autoPlayInterval={2000}
                    autoPlayDirection="rtl"
                    autoPlay={false}
                    fadeOutAnimation={true}
                    mouseTrackingEnabled={true}
                    playButtonEnabled={true}
                    disableAutoPlayOnAction={true}
                    onSlideChange={this.onSlideChange}
                    onSlideChanged={this.onSlideChanged}
                />
            </div>
        );
    };
}

export default ResponsiveSlider;


