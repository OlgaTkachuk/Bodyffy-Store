import React, {Component} from 'react';
import {FiSearch} from "react-icons/fi";

class SearchBar extends Component {
    render() {
        return (
            <div className={"search-bar"}>
                <div className={"search-icon-container"}>
                    <FiSearch size={18} color={'#3f3f3f'}/>
                </div>
                <div className={"search-container"}>
                    <input type={"text"}/>
                </div>
            </div>
        );
    }
}

export default SearchBar;