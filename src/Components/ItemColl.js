import {Component} from "react";
import React from "react";

class ItemColl extends Component {
    constructor(props) {
        super(props);
        this.state = {items: this.props.items};
    }
    render() {
        return(
            <>
                {
                    this.state.items.map((i, index) =>
                        <div className={'item-coll'} key={index}>
                            <img src={i.image} className={'item-img'}/>
                        </div>
                    ) }
            </>
        )
    }
}
export default ItemColl;