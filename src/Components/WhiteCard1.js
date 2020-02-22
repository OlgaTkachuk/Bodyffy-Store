import React, {Component} from 'react';
import {Link} from "react-router-dom";

class WhiteCard1 extends Component {
    render() {
        return (
            <div className={"banner-white-card"}>
                <article className={"article-white-card"}>
                    <div className={"white-card-title"}>
                        <h2>{this.props.title}</h2>
                    </div>
                    <div className={"white-card-par"}>
                        <p>{this.props.par} </p>
                    </div>
                    <Link to="/" className={"link-white-card"}><p>Show more</p></Link>
                </article>
            </div>
        );
    }
}

export default WhiteCard1;