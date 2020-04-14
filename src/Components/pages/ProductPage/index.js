import React, {Component} from 'react';
import ProductPhotos from "../../basic/ProductPhotos";
import ProductInfo from "../../basic/ProductInfo";
import Header from "../../basic/Header";
import NavLinks from "../../basic/NavLinks";
import Slider1 from "../../basic/Slider1";
import Banner from "../../basic/Banner";
import Footer from "../../basic/Footer";
import rightArrow from '../../../assets/images/next.svg'
import leftArrow from '../../../assets/images/previous.svg'

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
        const {error, isFetching, photos, title, category, price} = this.props.prodImgs;
        return (
            <>
                <div>
                    <Header/>
                    <NavLinks/>
                    <div className={'item-block'}>
                    <ProductPhotos photos={photos.flat()} isFetching={isFetching} error={error} rightArrow={rightArrow} leftArrow={leftArrow}/>
                    <ProductInfo title={title} category={category} price={price}/>
                        <div className={'block-wrapper'}>
                            <div className={'block-menu-title'}><h3>You May Also Like</h3></div>
                            <Slider1/>
                            <Banner/>
                        </div>
                    </div>
                    <Footer/>
                </div>
            </>
        );
    }
}

export default Product;