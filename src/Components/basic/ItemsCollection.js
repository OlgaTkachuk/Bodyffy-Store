import React, {Component} from 'react';
import slider_data from '../../assets/data/slider_data1';
import ItemColl from "./ItemColl";

class ItemsCollection extends Component {
    render() {
        return (
            <section>
                <div className={'items-collection'}>
                    <div className={'coll-wrapper-outer'}>
                        <div className={'coll-wrapper'}>
                            <ItemColl items={slider_data}/>
                        </div>
                    </div>
                </div>
            </section>
        );
    }
}

export default ItemsCollection;