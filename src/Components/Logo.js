import React, {Component} from 'react';
import logo from '../images/logo_test.jpg'
import {NavLink} from "react-router-dom";

class Logo extends Component {
    render() {
        return (
            <div>
                <NavLink exact to="/">
                <img src={logo} className={'logo'}/>
                </NavLink>
            </div>
        );
    }
}

export default Logo;