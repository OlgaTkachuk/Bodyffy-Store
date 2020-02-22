import React, {Component} from 'react';
import {FiChevronRight} from "react-icons/fi";

class RightArrow extends Component {
    render() {
        return (
            <div>
                <div className='front-arrow' onClick={this.props.goToNextSlide}>
                    <FiChevronRight size={85}/>
                </div>
            </div>
        );
    }
}

export default RightArrow;