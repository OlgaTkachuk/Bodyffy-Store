import React, {Component} from 'react';
import ProductPhotos from "./basic/ProductPhotos";
import ProductInfo from "./basic/ProductInfo";
import Header from "./Header";
import NavLinks from "./NavLinks";
import PhotoBlock from "./PhotoBlock";
import DescriptionBlock from "./DescriptionBlock";
import Slider1 from "./Slider1";
import Banner from "./Banner";
import Footer from "./Footer";
import rightArrow from '../images/next.svg'
import leftArrow from '../images/previous.svg'

class Product extends Component {
//     onBtnClick = async e => {
//         const product = e.currentTarget.innerText;
//         await this.props.setActiveProductSlug(product);
//         await this.props.getProductsList(product);
//     }
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

    // renderTemplate = () => {
    //     console.log(this.props);
    //     const {photos, isFetching, error} = this.props.prodImgs
    //
    //     const photos_new = photos.flat()
    //     if (error) {
    //         return <p className="error">Во время загрузки фото произошла ошибка</p>
    //     }
    //
    //     if (isFetching) {
    //         return <p>Загрузка...</p>
    //     } else {
    //         return photos_new.map(i => (
    //             <div>
    //                 <img src={i} alt=""/>
    //             </div>
    //         ))
    //     }
    // }

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
                            <div className='par-center'><p>Explore similar products</p></div>
                            <Slider1/>
                            <Banner/>
                        </div>
                    </div>
                    <Footer/>
                    {/*<br/> <br/>*/}
                    {/*<h2>Product Details</h2>*/}
                    {/*<br/>*/}
                    {/*<div>*/}
                        {/*<button onClick={this.onBtnClick}>product1</button>*/}
                        {/*<button onClick={this.onBtnClick}>product2</button>*/}
                        {/*<button onClick={this.onBtnClick}>product3</button>*/}
                        {/*<button onClick={this.onBtnClick}>product4</button>*/}
                        {/*<button onClick={this.onBtnClick}>product5</button>*/}
                    {/*</div>*/}
                    {/*<br/>*/}
                    {/*{this.onRender()}*/}
                </div>
            </>
        );
    }
}

export default Product;