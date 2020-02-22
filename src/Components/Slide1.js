import React, {Component} from 'react';
import slider_data1 from "../data/slider_data1";

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
                            <img src={s.image} className={'slide-image'}/>
                        </div>
                    ) }
            </section>
        )
    }
}
export default Slide1;