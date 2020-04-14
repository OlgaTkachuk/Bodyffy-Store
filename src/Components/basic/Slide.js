import React, {Component} from 'react';
import slider_data1 from "../../assets/data/slider_data1";

class Slide extends Component {
    constructor(props) {
        super(props);
        this.state = {slider: slider_data1};
    }
    render() {
        return(
            <section>
                {
                    this.state.slider.map((s, index) =>
                        <div className={(index <= this.props.activeIndex+2 && index >= this.props.activeIndex) ? 'active' : 'inactive'} key={index}>
                            <img src={s.image} className={'slide-image'}/>
                        </div>
                    ) }
            </section>
        )
    }
}
export default Slide;