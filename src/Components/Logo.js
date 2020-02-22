import React, {Component} from 'react';
import logo from '../images/name555.jpg'

class Logo extends Component {
    render() {
        return (
            <div>
                <img src={logo} className={'logo'}/>
            </div>
        );
    }
}

export default Logo;