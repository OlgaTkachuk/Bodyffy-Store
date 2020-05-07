import React from 'react';
import { connect } from 'react-redux';
import SliderService from "../../redux/GetSliderData/index";
import Home from "../../Components/pages/Home/";

const mapStateToProps = store => {
    console.log(store)
    return {
        sliders: store.sliders,
    }
}

const mapDispatchToProps = dispatch => ({
        getSlidersList: () => dispatch(SliderService.getSlidersList()),
})

export default connect(mapStateToProps, mapDispatchToProps)(Home);