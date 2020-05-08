import React from 'react';

class ProductInfo extends React.Component {
    constructor(props) {
        super(props);
        this.state={
            value: 1
        }
        this.handleChange = this.handleChange.bind(this)
    }
    handleChange(event) {
        this.setState({value:event.target.value})
        this.props.changeAmount(event.target.value)
    }
    render() {
        const {title, category, price, addToCart} = this.props
        return (
            <div className={'descr-block'}>
                <div>
                    <h1 className={'item-title'}>{title}</h1>
                </div>
                <div>
                    <h1 className={'item-title'}>{category}</h1>
                </div>
                <br/>
                <div className={"quantity-bar"}>
                    <label>Quantity:
                        <select value={this.state.value} onChange={this.handleChange}>
                            <option value='1'>1</option>
                            <option value='2'>2</option>
                            <option value='3'>3</option>
                            <option value='4'>4</option>
                            <option value='5'>5</option>
                            <option value='6'>6</option>
                            <option value='7'>7</option>
                            <option value='8'>8</option>
                            <option value='9'>9</option>
                            <option value='10'>10</option>
                        </select>
                    </label>
                </div>
                <br/>


                <button type={'submit'} className={'button-form item-page-button'} onClick={() => {
                    addToCart()
                }}>
                    <h3 className={'item-page-price'}>{price} uah</h3>
                    В корзину
                </button>

                <br/>
                <div className={'item-page-text'}><p>Лорем ипсум долор сит амет, еос ин омнесяуе вивендум еррорибус, сеа
                    ин
                    тота малорум интеллегам.
                    <br/><br/>Феугиат орнатус яуо не, усу нисл витуперата диссентиас те. Мунди еррем елеифенд мел но, но
                    игнота сусципиантур меи. Еум ин нисл плацерат перфецто, еу нам ехплицари цонсететур еффициантур,
                    мовет
                    дицунт интеллегат ех мел. Меа тале солет анциллае но. Ириуре вулпутате не иус, аудире аццусата цу
                    вис.
                    Ид ест дуис алияуам делицатиссими, лаудем долорум сцаевола но хас.</p></div>
            </div>
        );
    }
}

export default ProductInfo;