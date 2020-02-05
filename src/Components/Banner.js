import React, {Component} from 'react';
import banner1 from '../images/desk1.jpg'

class Banner extends Component {
    render() {
        return (
            <div>
                <img src={banner1} className={'banner-img'}/>

            </div>
        );
    }
}

export default Banner;