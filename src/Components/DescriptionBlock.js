import React, {Component} from 'react';

class DescriptionBlock extends Component {
    render() {
        return (
            <div className={'descr-block'}>
                <div>
                    <h1 className={'item-title'}>Diamond Vine Bypass Ring in Platinum</h1>
                </div>
                <br/>
                <div>
                    <p>quantity</p>
                </div>
                <br/>
                <br/>

                <form><button type={'submit'} className={'button-form item-page-button'}><h3 className={'item-page-price'}>$ 1,500</h3>В корзину</button></form>
                <br/>
                <div className={'item-page-text'}><p>Лорем ипсум долор сит амет, еос ин омнесяуе вивендум еррорибус, сеа ин тота малорум интеллегам.
                    <br/><br/>Феугиат орнатус яуо не, усу нисл витуперата диссентиас те. Мунди еррем елеифенд мел но, но игнота сусципиантур меи. Еум ин нисл плацерат перфецто, еу нам ехплицари цонсететур еффициантур, мовет дицунт интеллегат ех мел. Меа тале солет анциллае но. Ириуре вулпутате не иус, аудире аццусата цу вис. Ид ест дуис алияуам делицатиссими, лаудем долорум сцаевола но хас.</p></div>
            </div>
        );
    }
}

export default DescriptionBlock;