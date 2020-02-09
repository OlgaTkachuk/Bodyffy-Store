import React, {Component} from 'react';
import {FiSearch} from "react-icons/fi";
import {FiX} from "react-icons/fi";

class SearchBar extends Component {
    state = {
        activeOption: 0,
        filteredOptions: [],
        showOptions: false,
        userSearchInput: ''
    };
    deleteSearch = (e) => {
        this.setState({
            showOptions: false,
            activeOption: 0,
            filteredOptions: [],
            userSearchInput: ''
        })
    }
    onChangeHandler = (e) => {
        console.log('onChange');

        const {options} = this.props;
        const userSearchInput = e.currentTarget.value;

        if (userSearchInput.length >= 0) {
            const regex = new RegExp(`^${userSearchInput}`, 'i');
            const filteredOptions = options.sort().filter(v => regex.test(v));

            this.setState({
                activeOption: 0,
                filteredOptions,
                showOptions: true,
                userSearchInput: e.currentTarget.value,
            });
        }
    };
    render() {
        const {
            onChangeHandler, deleteSearch,
            state: {filteredOptions, showOptions, userSearchInput}
        } = this;

        let optionList;
        if (showOptions && userSearchInput) {
            if (filteredOptions.length) {
                optionList = (
                    <ul className="suggestions">
                        {filteredOptions.map((optionName) => {
                                return (
                                    <li key={optionName}>
                                        {optionName}
                                    </li>
                                );
                        })}
                    </ul>
                );
            }
            else {
                optionList = (
                    <ul className="suggestions">
                        <li>No Option!</li>
                    </ul>
                );
            }
        }
        return (
            <React.Fragment>
                <div className={showOptions ? "hovering-search-container" : "search-bar"}>
                    <div className={showOptions ? "search-icon-container-focus search-icon": "search-icon-container"}>
                        <FiSearch size={18} color={'#3f3f3f'} className={showOptions ? "hide" : ""}/>
                        <FiSearch size={35} color={'#3f3f3f'} className={showOptions ? "" : "hide"}/>
                    </div>
                    {/*<div className={showOptions ? "search-container-focus":"search-container"}>*/}
                    <input type={"text"}
                           className={showOptions ? "search-bar-focus" : "search-bar-input"}
                           onChange={onChangeHandler}
                           value={userSearchInput}
                           placeholder="Що Ви шукаєте?"
                    />
                    {/*</div>*/}
                    <button className={showOptions ? "search-icon-container-focus" : "hide"} onClick={deleteSearch}>
                        <FiX size={35} color='#000000'/>
                    </button>
                    {optionList}
                </div>
            </React.Fragment>
        );
    }
}

export default SearchBar;