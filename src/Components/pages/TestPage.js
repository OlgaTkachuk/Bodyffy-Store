import React, {Component} from 'react';
import ProductImages from "../ProductImages";
import Product from "../Product";

class TestPage extends Component {
    render() {
        const {prodImgs, prodDetails, setProductAction, getPhotosAction} = this.props;
        return (
            <div>
                <ProductImages photos={prodImgs.photos} getPhotos={getPhotosAction}/>
                <Product photos={prodImgs.photos} isFetching={prodImgs.isFetching} product={prodDetails.product}
                         setProduct={setProductAction} getPhotos={() => getPhotosAction()} error={prodImgs.error}/>
            </div>
        );
    }
}

export default TestPage;