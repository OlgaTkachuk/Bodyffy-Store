import React, {Component} from 'react';
import {FiChevronLeft} from "react-icons/fi";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'


class LeftArrow extends Component {
    render() {
        return (
            <div>
                <div className='back-arrow' onClick={this.props.goToPrevSlide}>
                    <FiChevronLeft size={85}/>
                </div>
            </div>
        );
    }
}

export default LeftArrow;