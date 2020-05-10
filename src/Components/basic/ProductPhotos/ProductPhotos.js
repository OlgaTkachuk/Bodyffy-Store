import React, {Component} from 'react';
import styles from './ProductPhotosStyle.scss'

class ProductPhotos extends Component {
    state = {
        currPhotoIndex: 0
    }
    renderTemplate = () => {
        const {photos, isFetching, error, leftArrow, rightArrow} = this.props
        console.log(photos);
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
                            <>
                            <button><img src={leftArrow} onClick={this.onLeftArrow} height="30" width="30"/></button>
                            <div>
                                <img className={'slide-image'} src={el} alt=""/>
                            </div>
                        <button><img src={rightArrow} onClick={this.onRightArrow} height="30" width="30"/></button>
                        </>
                        )
                    }
                }))
    }
    onRightArrow = () => {
        if (this.state.currPhotoIndex < this.props.photos.length - 1) {
            this.setState({
                currPhotoIndex: this.state.currPhotoIndex + 1
            })
        }

    }
    onLeftArrow = () => {
        if (this.state.currPhotoIndex > 0) {
            this.setState({
                currPhotoIndex: this.state.currPhotoIndex - 1
            })
        }
    }


    render() {
        return (
            <>
                <div className={'photo-block'}>
                    <div className='slider-container'>
                        {this.renderTemplate()}
                    </div>
                </div>
            </>
        );
    }
}

export default ProductPhotos;