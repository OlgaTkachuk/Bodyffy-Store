import React, {Component} from 'react';
import SearchBar from "./SearchBar";
import RightBar from "./RightBar";
import Logo from "./Logo";

class Header extends Component {
    render() {
        return (
            <div className="header-wrapper">
                <SearchBar/>
                <Logo/>
                <RightBar/>
            </div>
        );
    }
}

export default Header;