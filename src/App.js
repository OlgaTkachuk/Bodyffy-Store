import React , { Component } from 'react';
import {Route, Switch} from 'react-router-dom'
import './App.css';


import Signin from "./Components/pages/Signin/";
import Register from "./Components/pages/Register/";
import ShoppingCart from "./Containers/ShoppingCart/";
import ProductPage from "./Containers/ProductPage/";
import CategoryPage from "./Containers/CategoryPage/";
// import ResponsiveSlider from "./Components/basic/ResponsiveSlider/";
// import Home from "./Containers/HomePage/";
import Home1 from "./Containers/Home/";
// import Order from "./Components/pages/OrderPage/";


class App extends Component {
    render() {
        return (
            <Switch>
                {/*<Route exact path="/" component={Home}/>*/}
                <Route exact path="/" component={Home1}/>
                <Route exact path="/category/:slug" component={CategoryPage}/>
                <Route exact path="/item/:slug" component={ProductPage}/>
                <Route exact path="/account/signin" component={Signin}/>
                <Route exact path="/account/register" component={Register}/>
                {/*<Route exact path="/process" component={Order}/>*/}
                <Route exact path="/shoppingcart/:slug" component={ShoppingCart}/>
                <Route component={Error}/>
            </Switch>
        );
    }
}

export default App;
