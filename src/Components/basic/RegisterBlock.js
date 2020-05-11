import React, {Component} from 'react';
import {Link, NavLink} from "react-router-dom";

class RegisterBlock extends Component {
    render() {
        return (
            <div className={'register-block'}>
                <h2 className={'form-title'}>Create account</h2>
                <br/>
                <p>If you are not registered yet, register here</p>
                <br/>
                <br/>
                <NavLink exact to="/account/register" className="button-form greenblack-button">Реєстрація</NavLink>
            </div>
        );
    }
}

export default RegisterBlock;