import React , { Component } from 'react';
import {Route, Switch} from 'react-router-dom'
import './App.scss';


import Signin from "./Components/pages/Signin/";
import Register from "./Components/pages/Register/";
import ShoppingCart from "./Containers/ShoppingCart/";
import ProductPage from "./Containers/ProductPage/";
import CategoryPage from "./Containers/CategoryPage/";
import Home from "./Containers/HomePage/";
import Order from "./Containers/OrderPage/";
import About from "./Components/pages/AboutPage/";
import Shipping from "./Components/pages/ShippingPage/";


class App extends Component {
    render() {
        return (
            <Switch>
                <Route exact path="/" component={Home}/>
                <Route exact path="/category/:slug" component={CategoryPage}/>
                <Route exact path="/item/:slug" component={ProductPage}/>
                <Route exact path="/account/signin" component={Signin}/>
                <Route exact path="/account/register" component={Register}/>
                <Route exact path="/order" component={Order}/>
                <Route exact path="/shoppingcart/:slug" component={ShoppingCart}/>
                <Route exact path="/about" component={About}/>
                <Route exact path="/shipping" component={Shipping}/>
                <Route component={Error}/>
            </Switch>
        );
    }
}

export default App;
