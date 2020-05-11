import React, {Component} from 'react';
import data from '../../../assets/data/slider_data1'
import AliceCarousel from 'react-alice-carousel'
import 'react-alice-carousel/lib/alice-carousel.css'
import {Link} from "react-router-dom";
import styles from './ResponsiveSliderSlyle.scss'

class ResponsiveSlider extends Component {
    state = {
        currentIndex: 0,
        itemsInSlide: 1,
        responsive: { 0: { items: 3 } },
    }
    responsive = {
        0: {items: 1},
        599: {items: 2},
        899: {items: 3},
    }

    onSlideChange(e) {
        console.debug('Item`s position during a change: ', e.item)
        console.debug('Slide`s position during a change: ', e.slide)
    }

    onSlideChanged(e) {
        console.debug('Item`s position after changes: ', e.item)
        console.debug('Slide`s position after changes: ', e.slide)
    }

    // slidePrevPage = () => {
    //     const currentIndex = this.state.currentIndex - this.state.itemsInSlide
    //     this.setState({ currentIndex })
    // }
    //
    // slideNextPage = () => {
    //     const {
    //         itemsInSlide,
    //         galleryItems: { length },
    //     } = this.state
    //     let currentIndex = this.state.currentIndex + itemsInSlide
    //     if (currentIndex > length) currentIndex = length
    //
    //     this.setState({ currentIndex })
    // }
    //
    // handleOnSlideChange = (event) => {
    //     const { itemsInSlide, item } = event
    //     this.setState({ itemsInSlide, currentIndex: item })
    // }

    renderTemplate = () => {
        // const {photos, isFetching, error} = this.props
        // console.log(photos);
        // if (error) {
        //     return <p className="error">Во время загрузки фото произошла ошибка</p>
        // }
        //
        // if (isFetching) {
        //     return <p>Загрузка...</p>
        // } else
        return (
            <div>

            <AliceCarousel
                items={this.props.photos?.map((i, index) => <Link to={`/item/${this.props.links[index]}`}>
                    <img alt='' src={i} className={"slider-img"}></img></Link>)}
                // items={this.props.photos.map((i) => <img alt='' src={i}></img>)}
                responsive={this.responsive}
                autoPlayInterval={2000}
                autoPlayDirection="rtl"
                fadeOutAnimation={true}
                dotsDisabled={true}
                buttonsDisabled={false}
                onSlideChange={this.onSlideChange}
                onSlideChanged={this.onSlideChanged}
            />
                {/*<button className="alice-carousel__prev-btn my-button" onClick={() => this.Carousel.slidePrev()} aria-label="Previous Slide">ZZZZ</button>*/}
                {/*<button className="alice-carousel__next-btn" onClick={() => this.Carousel.slideNext()} aria-label="Next Slide">SSSSSSS</button>*/}
            </div>
        )
    }

    render() {
        return (
            <div className={"responsive-slider-container"}>
                {this.renderTemplate()}
            </div>
        );
    };
}

export default ResponsiveSlider;


