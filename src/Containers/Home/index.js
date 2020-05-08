import React from 'react';
import { connect } from 'react-redux';
import Test from "../../Components/basic/Test";
import SliderService from "../../redux/GetSliderData/";
import Home from "../../Components/pages/Home/index"

const mapStateToProps = store => {
    console.log(store, '!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!');
    return {
        sliders: store.sliders
    }
}
const mapDispatchToProps = dispatch => ({
    getSlidersList: () => dispatch(SliderService.getSlidersList()),
} )
export default connect(mapStateToProps,mapDispatchToProps)(Test)