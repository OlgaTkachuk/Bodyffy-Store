import React, {Component} from 'react';
import slider_data1 from "../data/slider_data1";
import connect from "react-redux/es/connect/connect";

class Slide1 extends Component {
    constructor(props) {
        super(props);

    }
    render() {
        return(
            <section>
                {
                    this.props.slider.map((s, index) =>
                        <div className={'slide-image-div'} key={index}>
                            <img src={s.image} className={this.props.n===1 ? 'slide-image-wider' : 'slide-image'}/>
                        </div>
                    ) }
            </section>
        )
    }
}

const mapStateToProps = state => {
    return {
        n: state.slider_number
    }
};
export default connect(
    mapStateToProps
)(Slide1);

