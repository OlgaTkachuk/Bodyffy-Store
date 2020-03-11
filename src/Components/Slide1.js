import React, {Component} from 'react';
import slider_data1 from "../data/slider_data1";

class Slide1 extends Component {
    constructor(props) {
        super(props);
        this.state = {
            n: this.props.n
        }

    }
    render() {
        return(
            <section>
                {
                    this.props.slider.map((s, index) =>
                        <div className={'slide-image-div'} key={index}>
                            <img src={s.image} className={this.state.n===1 ? 'slide-image-wider' : 'slide-image'}/>
                        </div>
                    ) }
            </section>
        )
    }
}
export default Slide1;