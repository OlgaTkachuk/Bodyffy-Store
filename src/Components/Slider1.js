import React, {Component} from 'react';
import Slide from './Slide';
import slider_data from '../data/slider_data1';
import LeftArrow from './LeftArrow';
import RightArrow from './RightArrow';
import Slide1 from "./Slide1";

export default class Slider1 extends Component {
    constructor(props) {
        super(props);
        this.state = {
            data: slider_data,
            slider: [],
            n: window.innerWidth < 760 ? 1 : 3
        };
    }


    componentWillMount() {
        this.initSlider();
    }
    componentDidMount() {
        window.addEventListener("resize", this.resize.bind(this));
        this.resize();
    }

    resize() {
        window.innerWidth <= 760 ? this.setState({n: 1}) : this.setState({n: 3})
    }

    goToNextSlide() {
        let data = this.state.data;
        let first = data.shift(0);
        let newslider = [];

        data.push(first);
        for (let i = 0; i < this.state.n; i++)
        {
            newslider.push(data[i])
        }

        this.setState({
            slider: newslider
        });
        console.log(newslider);
    }


    goToPrevSlide() {
        let data = this.state.data;
        let first = data.pop();
        let newslider = [];

        data.unshift(first);
        for (let i = 0; i < this.state.n; i++)
        {
            newslider.push(this.state.data[i])
        }

        this.setState({
            slider: newslider
        })
    }


    initSlider() {
        let n =this.state.n;
        let slider = this.state.slider;
        let data = this.state.data;
        let newslider = [];

        for (let i = 0; i < n; i++)
        {
            newslider.push(data[i]);
            console.log(data, slider);
        }
        this.setState({
            slider: newslider
        });

    }

    render() {
        let n = this.state.n;
        return (
            <div className="container">
                <div className={'block-menu-title'}> <h3>New Arrivals</h3></div>
                <div className='par-center'> <p>Explore our newest products</p></div>
                <div className='slider'>
                    <div className='slider-items'>
                        <LeftArrow n={n} goToPrevSlide={() => this.goToPrevSlide()}/>
                        <div>
                            <Slide1 slider={this.state.slider}/>
                        </div>
                        <RightArrow n={n} goToNextSlide={() => this.goToNextSlide()}/>
                    </div>
                </div>
            </div>
        );
    }

}
