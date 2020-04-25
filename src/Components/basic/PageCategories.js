import React, {Component} from 'react';
import {Link} from "react-router-dom";

class PageCategories extends Component {
    renderTemplate = () => {
        const {photos, isFetching, error, collections, cat_title, onChange} = this.props

        if (error) {
            return <p className="error">Во время загрузки произошла ошибка</p>
        }

        if (isFetching) {
            return <p>Загрузка...</p>
        } else
            return (
                <div className={'section'}>
                    <div className={"PageCategory"}>
                        <h2 className={"categories-title"}>{cat_title}</h2>
                        <div className={"categories-wrapper"}>
                            {photos.map((i, index) =>
                                <div className={'item-coll'} key={index} onClick={()=> {onChange(collections[index])}}>
                                    {/*<Link to={`/item/${category_slugs[index]}`}>*/}
                                        <img src={i} className={'item-img'}/>
                                    {/*</Link>*/}
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
        )
    }
}

export default PageCategories;
