import React, {Component} from 'react';

class Product extends Component {
    // componentDidMount() {
    //     (this.props.match.params.slug);
    // }
    // componentDidUpdate(prevProps) {
    //     if (prevProps.match.params.slug !== this.props.match.params.slug) {
    //         this.getPost(this.props.match.params.slug);
    //     }
    // }

    onBtnClick = async e => {
        const product = e.currentTarget.innerText;
        await this.props.setActiveProductSlug(product);
        await this.props.getProductsList(product);
    }

    renderTemplate = () => {
        const {photos, isFetching, error} = this.props

        const photos_new = photos.flat()
        if (error) {
            return <p className="error">Во время загрузки фото произошла ошибка</p>
        }

        if (isFetching) {
            return <p>Загрузка...</p>
        } else {
            return photos_new.map(i => (
                <div>
                    <img src={i} alt=""/>
                </div>
            ))
        }
    }

    render() {
        const {product, isFetching, photos} = this.props
        return (
            <>
                <div>
                    <br/> <br/>
                    <h2>Product Details</h2>
                    <br/>
                    <div>
                        <button onClick={this.onBtnClick}>product1</button>
                        <button onClick={this.onBtnClick}>product2</button>
                        <button onClick={this.onBtnClick}>product3</button>
                        <button onClick={this.onBtnClick}>product4</button>
                        <button onClick={this.onBtnClick}>product5</button>
                    </div>
                    <br/>
                    {this.renderTemplate()}
                </div>
            </>
        );
    }
}

export default Product;