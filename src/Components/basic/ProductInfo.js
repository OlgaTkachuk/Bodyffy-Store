import React from 'react';

const ProductInfo = (props) => {
    const {title, category, price} = props
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
                <p>Quantity:</p>
                <select>
                    <option>1</option>
                    <option>2</option>
                    <option>3</option>
                </select>
            </div>
            <br/>

            <form>
                <button type={'submit'} className={'button-form item-page-button'}>
                    <h3 className={'item-page-price'}>{price} uah</h3>
                    В корзину
                </button>
            </form>
            <br/>
            <div className={'item-page-text'}><p>Лорем ипсум долор сит амет, еос ин омнесяуе вивендум еррорибус, сеа ин
                тота малорум интеллегам.
                <br/><br/>Феугиат орнатус яуо не, усу нисл витуперата диссентиас те. Мунди еррем елеифенд мел но, но
                игнота сусципиантур меи. Еум ин нисл плацерат перфецто, еу нам ехплицари цонсететур еффициантур, мовет
                дицунт интеллегат ех мел. Меа тале солет анциллае но. Ириуре вулпутате не иус, аудире аццусата цу вис.
                Ид ест дуис алияуам делицатиссими, лаудем долорум сцаевола но хас.</p></div>
        </div>
    );
}

export default ProductInfo;