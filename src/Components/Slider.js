import React, {Component} from 'react';
import Slide from './Slide';
import slider_data from '../data/slider_data1';
import LeftArrow from './LeftArrow';
import RightArrow from './RightArrow';

export default class Slider extends Component {
    constructor(props) {
        super(props);
        this.state = {
            activeIndex: 0,
            length: slider_data.length
        };
    }

    goToPrevSlide() {
        let index = this.state.activeIndex;
        let length = this.state.length;
        if (index < 1) {
            index = length - 3;
        }
        else {
            index--;
        }
        this.setState({
            activeIndex: index
        });
    }

    goToNextSlide() {
        let index = this.state.activeIndex;
        let length = this.state.length;
        if (index > length - 4) {
            index = 0;
        }
        else {
            index++;
        }
        this.setState({
            activeIndex: index
        });
    }

    render() {
        return (
            <div className="container">
                <div className={'block-menu-title'}> <h3 >New Arrivals</h3></div>
                <div className='par-center'> <p>Explore our newest products</p></div>
                <div className='slider'>
                    <div className='slider-items'>
                        <LeftArrow goToPrevSlide={() => this.goToPrevSlide()}/>
                        <div className='slider-img'>
                            <Slide activeIndex={this.state.activeIndex}/>
                        </div>
                        <RightArrow goToNextSlide={() => this.goToNextSlide()}/>
                    </div>
                </div>
            </div>
        );
    }

}
