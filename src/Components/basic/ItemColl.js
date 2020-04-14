import {Component} from "react";
import React from "react";
import {Link} from "react-router-dom";

class ItemColl extends Component {
    constructor(props) {
        super(props);
        this.state = {items: this.props.items};
    }

    render() {
        return (
            <>
                {
                    this.state.items.map((i, index) =>
                        <div className={'item-coll'} key={index}>
                            <Link to={`/item/${index}`}>
                                <img src={i.image} className={'item-img'}/>
                            </Link>
                        </div>
                    )}
            </>
        )
    }
}

export default ItemColl;