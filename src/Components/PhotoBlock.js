import React, {Component} from 'react';
import Slider1 from "./Slider1";

class PhotoBlock extends Component {
    render() {
        return (
            <div className={'photo-block'}>
                <Slider1 nnn={1} />
            </div>
        );
    }
}

export default PhotoBlock;