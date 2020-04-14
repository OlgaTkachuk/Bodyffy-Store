import React, {Component} from 'react';

class ProductPhotos extends Component {
    state = {
        currPhotoIndex: 0
    }
    renderTemplate = () => {
        const {photos, isFetching, error} = this.props
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
                            <div>
                                <img className={'slide-image'} src={el} alt=""/>
                            </div>
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
        // else if (this.state.currPhotoIndex = this.props.photos.length-1) {
        //     this.setState({
        //         currPhotoIndex: this.state.currPhotoIndex + 1
        //     })
        // }

    }
    onLeftArrow = () => {
        if (this.state.currPhotoIndex > 0) {
            this.setState({
                currPhotoIndex: this.state.currPhotoIndex - 1
            })
        }
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
                    <div className='slider-container'>
                        <button><img src={leftArrow} onClick={this.onLeftArrow} height="50" width="50"/></button>
                        {this.renderTemplate()}
                        <button><img src={rightArrow} onClick={this.onRightArrow} height="50" width="50"/></button>
                    </div>
                </div>
            </>
        );
    }
}

export default ProductPhotos;