import React, {Component} from 'react';

class ProductImages extends Component {
    render() {
        const {photos} = this.props;
        console.log(photos);
        return (
            <div>
                <h2>Getting Images Test</h2>
                <p>This product has {photos.length} images</p>
            </div>
        );
    }
}

export default ProductImages;