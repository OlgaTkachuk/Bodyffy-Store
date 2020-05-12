import React, {Component} from 'react';
import up from "../../assets/images/arrowup.svg"
import {Link, NavLink} from "react-router-dom";
import logo from '../../assets/images/logogold.jpg'

class Footer extends Component {
    scrollToTop = () => {
        window.scrollTo(0, 0);
    }

    render() {
        return (
            <footer>
                <div className={'footer'}>
                    <div className={'footer-wrapper'}>
                        <div className={'footer-links'}>
                            <ul>
                                <li>
                                    <img className={'footer-logo'} src={logo}/>
                                </li>
                                <li>
                            <Link to={'/about'} className={'link'}>Про нас</Link>
                                </li>
                                <li>
                            <Link to={'/shipping'} className={'link'}>Доставка та оплата</Link>
                                </li>
                            </ul>
                        </div>
                        <div className={'footer-center'}>
                        </div>
                        <div className={'footer-social'}>
                        <p>All rights reserved @ Bodyffy 2020</p>

                        </div>
                    </div>


                    <button onClick={this.scrollToTop} className={'to-top-button'}>
                        <img src={up} height="20" width="20"/>
                    </button>
                </div>
            </footer>
        );
    }
}

export default Footer;