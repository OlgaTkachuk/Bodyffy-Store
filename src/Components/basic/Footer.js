import React, {Component} from 'react';
import up from "../../assets/images/arrowup.svg"

class Footer extends Component {
    scrollToTop = () => {
        window.scrollTo(0, 0);
    }

    render() {
        return (
            <footer>
                <div className={'footer'}>
                    <p>All rights reserved @ 2020</p>
                    <button onClick={this.scrollToTop} className={'to-top-button'}>
                        <img src={up} height="20" width="20"/>
                    </button>
                </div>
            </footer>
        );
    }
}

export default Footer;