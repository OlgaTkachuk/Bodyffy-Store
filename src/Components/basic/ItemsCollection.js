import React, {Component} from 'react';
import {Link} from "react-router-dom";

class ItemsCollection extends Component {
    renderTemplate = () => {
        const {photos, isFetching, error, category_slugs} = this.props

        if (error) {
            return <p className="error">Во время загрузки фото произошла ошибка</p>
        }

        if (isFetching) {
            return <p>Загрузка...</p>
        } else
            return (
                <div className={'items-collection'}>
                    <div className={'coll-wrapper-outer'}>
                        <div className={'coll-wrapper'}>
                            {photos.map((i, index) =>
                            <div className={'item-coll'} key={index}>
                                <Link to={`/item/${category_slugs[index]}`}>
                                    <img src={i} className={'item-img'}/>
                                </Link>
                            </div>
                            )}
                        </div>
                    </div>
                </div>
                )
    }


    render() {
        return (
            <section>
                {this.renderTemplate()}
            </section>
        );
    }
}

export default ItemsCollection;