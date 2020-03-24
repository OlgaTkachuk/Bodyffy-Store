import React, {Component} from 'react';
// import * as actionTypes from '../store/actions'
import slider_data from '../data/slider_data1';
import LeftArrow from './LeftArrow';
import RightArrow from './RightArrow';
import Slide1 from "./Slide1";
import {connect} from 'react-redux'

class Slider1 extends Component {
    constructor(props) {
        super(props);
        this.state = {
            data: slider_data,
            slider: [],
        };
        this.forceUpdate = this.forceUpdate.bind(this)
    }

    componentDidMount() {
        this.initSlider();
        window.addEventListener('resize', this.props.updateWindowSize(window.innerWidth))
    }
    componentWillUnmount() {
        window.removeEventListener('resize', this.props.updateWindowSize(window.innerWidth))
    }
    goToNextSlide() {
        let data = this.state.data;
        let first = data.shift(0);
        let newslider = [];

        data.push(first);
        for (let i = 0; i < this.props.n; i++) {
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
        for (let i = 0; i < this.props.n; i++) {
            newslider.push(this.state.data[i])
        }

        this.setState({
            slider: newslider
        })
    }

    initSlider() {
        let n = this.props.n;
        let slider = this.state.slider;
        let data = this.state.data;
        let newslider = [];

        for (let i = 0; i < this.props.n; i++) {
            newslider.push(data[i]);
            console.log(data, slider);
        }
        this.setState({
            slider: newslider
        });
    }

    render() {
        let n = this.props.n;
        return (
            <div className="container">
                <div className='slider'>
                    <div className='slider-items'>
                        <LeftArrow n={n} goToPrevSlide={() => this.goToPrevSlide()}/>
                        <div>
                            <Slide1 n={n} slider={this.state.slider}/>
                        </div>
                        <RightArrow n={n} goToNextSlide={() => this.goToNextSlide()}/>
                    </div>
                </div>
            </div>
        );
    }
}

const mapStateToProps = store => {
    return {
        n: store.slider_number
    }
};

export const updateWindowSize = width => dispatch => {
    let screen = null;
    if (width < 600) {
        screen = 'small';
    } else if (width >= 600 && width < 900) {
        screen = 'medium';
    } else if (width >= 900) {
        screen = 'wide';
    }
    dispatch({type: "UPDATING_SCREEN_WIDTH", screen});
}

const mapDispatchToProps = dispatch => {
    return {
        updateWindowSize: size => dispatch(updateWindowSize(size))
    }
}
export default connect(
    mapStateToProps,
    mapDispatchToProps
)(Slider1);