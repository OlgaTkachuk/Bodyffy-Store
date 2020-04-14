import React, {Component} from 'react';
import banner1 from '../../assets/images/desk1.jpg'
import {Link} from "react-router-dom";

class Banner extends Component {
    render() {
        return (
            <section>
                <div className={"sections"}>
                    <div className={"container"}>
                        <div className={'banner-img'}/>
                        {this.props.children}
                    </div>
                </div>

            </section>
        );
    }
}

export default Banner;