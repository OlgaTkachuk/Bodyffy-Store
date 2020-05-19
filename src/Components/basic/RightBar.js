import React, {Component} from 'react';
import {FiHeart} from "react-icons/fi";
import {FiUser} from "react-icons/fi";
import {FiShoppingCart} from "react-icons/fi";
import {Link, NavLink} from "react-router-dom";


class RightBar extends Component {
    render() {
        return (
            <div className={"right-bar"}>
                {/*<div className={"search-icon-container"}>*/}
                {/*    <NavLink exact to="/account/signin">*/}
                {/*    <FiUser size={18} color={'#3f3f3f'} />*/}
                {/*    </NavLink>*/}

                {/*</div>*/}
                <div className={"search-icon-container"}>
                    <NavLink exact to="/shoppingcart/new">
                    <FiShoppingCart size={18} color={'#3f3f3f'}/>
                    </NavLink>
                </div>
            </div>
        );
    }
}

export default RightBar;