import React, {Component} from 'react';
import {FaBars} from 'react-icons/fa'
import {Link, NavLink} from "react-router-dom";
// import logo from "../images/llogo.png"


class NavLinks extends Component {

    state = {
        isOpen: false,
        isHovering: false,
        selectedLanguage: "en",
    };
    handleToggle = () => {
        this.setState({
            isOpen: !this.state.isOpen,
            activeOption: 0
        })
    };
    toggleLanguage = lang => {
        this.setState({selectedLanguage: lang});
    }

    handleMouseHover() {
        this.setState(this.toggleHoverState);
    }

    toggleHoverState(state) {
        return {
            isHovering: !state.isHovering,
        };
    }

    render() {

        return (
            <>
                <nav className="navbar">
                    <div className="nav-center">
                        <div className="nav-header">
                            <button type="button" className="nav-btn" onClick={this.handleToggle}>
                                <FaBars className="nav-icon"/>
                            </button>
                        </div>
                        <ul className={this.state.isOpen ? "nav-links show-mob-nav justify-right" : "nav-links"}>
                            <li>
                                <NavLink exact to="/category/cosmetics" activeClassName="active">Косметика</NavLink>
                            </li>
                            <li>
                                <NavLink exact to="/category/sport" activeClassName="active">Спортивне харчування</NavLink>
                            </li>
                            <li>
                                <NavLink exact to="/category/vitamins" activeClassName="active">Вітаміни</NavLink>
                            </li>
                            <li>
                                <NavLink exact to="/category/medical"
                                         activeClassName="active">Медичні аксесуари</NavLink>
                            </li>
                        </ul>
                    </div>
                </nav>
                {/*<div className={'divider-line-bold'}/>*/}

            </>
        );
    }
}

export default NavLinks;