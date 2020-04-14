import React, {Component} from 'react';
import SearchBar from "./SearchBar";
import RightBar from "./RightBar";
import Logo from "./Logo";
import deseases from "../../assets/data/deseases";

class Header extends Component {
    render() {
        return (
            <div className="header-wrapper">
                <SearchBar options={deseases}/>
                <Logo/>
                <RightBar/>
            </div>
        );
    }
}

export default Header;