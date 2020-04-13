import React, {Component} from 'react';
// import ProductImages from "../ProductImages";
import Product from "../Product";

class TestPage extends Component {
    render() {
        const {prodImgs, prodDetails, getProductsList, setActiveProductSlug} = this.props;
        return (
            <div>
                {/*<ProductImages photos={prodImgs.photos} getPhotos={getProductsList}/>*/}
                <Product photos={prodImgs.photos} isFetching={prodImgs.isFetching} product={prodImgs.product}
                         setActiveProductSlug={setActiveProductSlug} getProductsList={getProductsList} error={prodImgs.error}/>
            </div>
        );
    }
}

export default TestPage;