import React, {Component} from 'react';
import {FiChevronRight} from "react-icons/fi";

class RightArrow extends Component {
    constructor(props) {
        super(props);
    }
    render() {
        return (
            <div>
                <div className='front-arrow' onClick={this.props.goToNextSlide}>
                    <FiChevronRight size={40} className={(this.props.n === 2) ? '' : 'hide'}/>
                    <FiChevronRight size={85} className={(this.props.n === 2) ? 'hide' : ''}/>
                </div>
            </div>
        );
    }
}

export default RightArrow;