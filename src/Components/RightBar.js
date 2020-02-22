import React, {Component} from 'react';
import {FiHeart} from "react-icons/fi";
import {FiUser} from "react-icons/fi";
import {FiShoppingCart} from "react-icons/fi";


class RightBar extends Component {
    render() {
        return (
            <div className={"right-bar"}>
                <div className={"search-icon-container"}>
                    <FiUser size={18} color={'#3f3f3f'} />
                </div>
                <div className={"search-icon-container"}>
                    <FiShoppingCart size={18} color={'#3f3f3f'}/>
                </div>
            </div>
        );
    }
}

export default RightBar;