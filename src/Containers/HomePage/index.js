import React from 'react';
import { connect } from 'react-redux';
import SliderService from "../../redux/GetSliderData/";
import Home from "../../Components/pages/Home/index"

const mapStateToProps = store => {
    return {
        sliders: store.sliders
    }
}
const mapDispatchToProps = dispatch => ({
    getSlidersList: () => dispatch(SliderService.getSlidersList()),
} )
export default connect(mapStateToProps,mapDispatchToProps)(Home)