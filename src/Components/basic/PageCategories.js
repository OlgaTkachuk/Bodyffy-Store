import React, {Component} from 'react';

class PageCategories extends Component {
    render() {
        return (
            <div className={'section'}>
                <div className={'container'}>
                    <h2 className={"categories-title"}>{this.props.cat_title}</h2>
                    <div className={"categories-wrapper"}>
                        <div className={'cat-block'}>1</div>
                        <div className={'cat-block'}>2</div>
                        <div className={'cat-block'}>3</div>
                        <div className={'cat-block'}>4</div>
                    </div>
                </div>
            </div>
        );
    }
}

export default PageCategories;