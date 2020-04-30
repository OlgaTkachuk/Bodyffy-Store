import React, {Component} from 'react';
import ProductPhotos from "../../basic/ProductPhotos";
import ProductInfo from "../../basic/ProductInfo";
import Header from "../../basic/Header";
import NavLinks from "../../basic/NavLinks";
import Banner from "../../basic/Banner";
import Footer from "../../basic/Footer";
import rightArrow from '../../../assets/images/next.svg'
import leftArrow from '../../../assets/images/previous.svg'
import ResponsiveSlider from "../../basic/ResponsiveSlider/";

class Product extends Component {
    componentDidMount() {
        this.onRender();
    }
    componentDidUpdate(prevProps) {
        if (prevProps.match.params.slug !== this.props.match.params.slug) {
            this.onRender(this.props.match.params.slug);
        }
    }
   onRender = async () => {
        const product = this.props.match.params.slug;
        await this.props.setActiveProductSlug(product);
        await this.props.getProductsList(product);
    }

    render() {
        const {error, isFetching, photos, title, category, price} = this.props.prodInfo;
        return (
            <>
                <div>
                    <Header/>
                    <NavLinks/>
                    <div className={'item-block'}>
                    <ProductPhotos photos={photos.flat()} isFetching={isFetching} error={error} rightArrow={rightArrow} leftArrow={leftArrow}/>
                    <ProductInfo title={title} category={category} price={price} addToCart={this.props.addToCart} changeAmount={this.props.changeAmount}/>
                    </div>
                    <div className={'block-wrapper'}>
                    <div className={'block-menu-title'}><h3>You May Also Like</h3></div>
                    <ResponsiveSlider photos={photos.flat()} />
                    </div>
                    <Banner/>
                    <Footer/>
                </div>
            </>
        );
    }
}

export default Product;