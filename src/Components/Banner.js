import React, {Component} from 'react';
import banner1 from '../images/desk1.jpg'
import {Link} from "react-router-dom";

class Banner extends Component {
    render() {
        return (
            <section>
                <div className={"sections"}>
                    <div className={"container"}>
                        <img src={banner1} className={'banner-img'}/>
                        <div className={"banner-white-card"}>
                            <article className={"article-white-card"}>
                                <div className={"white-card-title"}>
                                <h2>Discover Premium Cosmetics</h2>
                                </div>
                                <div className={"white-card-par"}>
                                <p>Lorem ipsum dolor sit amet, sonet nostrud sit ne. Est eu solum facete. </p>
                                </div>
                                <Link to="/" className={"link-white-card"}><p>Show more</p></Link>
                            </article>
                        </div>
                    </div>
                </div>

            </section>
        );
    }
}

export default Banner;