import React, {Component} from 'react';
import {FiChevronLeft} from "react-icons/fi";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'


class LeftArrow extends Component {
    render() {
        return (
            <div>
                <div className='back-arrow' onClick={this.props.goToPrevSlide}>
                    <FiChevronLeft size={40} className={(this.props.n === 2) ? '' : 'hide'}/>
                    <FiChevronLeft size={85} className={(this.props.n === 2) ? 'hide' : ''}/>
                </div>
            </div>
        );
    }
}

export default LeftArrow;