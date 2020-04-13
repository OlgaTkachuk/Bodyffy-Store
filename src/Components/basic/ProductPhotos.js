import React, {Component} from 'react';

// import rightArrow from '../../images/next.svg'

class ProductPhotos extends Component {
    state = {
        currPhotoIndex: 0
    }
    renderTemplate = () => {
        console.log(this.props);
        const {photos, isFetching, error} = this.props

        if (error) {
            return <p className="error">Во время загрузки фото произошла ошибка</p>
        }

        if (isFetching) {
            return <p>Загрузка...</p>
        } else
            return (
                photos.map((el, index) => {
                    if (index === this.state.currPhotoIndex) {
                        return (
                            <div>
                                <img className={'slide-image'} src={el} alt=""/>
                            </div>
                        )
                    }
                }))
    }
    // return photos.map(el => (
    //     <div>
    //         <img className={'slide-image'} src={el} alt=""/>
    //     </div>
    // ))


    render() {
        const {rightArrow, leftArrow} = this.props
        return (
            <>
                <div className={'photo-block'}>
                    {/*<br/>*/}
                    {/*<div>*/}
                    {/*<button onClick={this.onBtnClick}>product1</button>*/}
                    {/*<button onClick={this.onBtnClick}>product2</button>*/}
                    {/*<button onClick={this.onBtnClick}>product3</button>*/}
                    {/*<button onClick={this.onBtnClick}>product4</button>*/}
                    {/*<button onClick={this.onBtnClick}>product5</button>*/}
                    {/*</div>*/}
                    {/*<br/>*/}
                    <button><img src={leftArrow} height="50" width="50"/></button>
                    {this.renderTemplate()}
                    <button><img src={rightArrow} height="50" width="50"/></button>
                </div>
            </>
        );
    }
}

export default ProductPhotos;