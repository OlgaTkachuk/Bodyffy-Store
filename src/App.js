import React , { Component } from 'react';
import Home from './Components/pages/Home'
import {Route, Switch} from 'react-router-dom'
import './App.css';


import Cosmetics from "./Components/pages/Cosmetics";
import Sport from "./Components/pages/Sport";
import Vitamins from "./Components/pages/Vitamins";
import Medical from "./Components/pages/Medical";
import Signin from "./Components/pages/Signin";
import Register from "./Components/pages/Register";
import ItemPage from "./Components/pages/ItemPage";
import TestPage from "./Components/pages/TestPage";
import ShoppingCart from "./Components/pages/ShoppingCart";
import ProductPage from "./Containers/ProductPage";


class App extends Component {

    render() {
        return (
            <Switch>
                <Route exact path="/" component={Home}/>
                <Route exact path="/cosmetics" component={Cosmetics}/>
                <Route exact path="/sport" component={Sport}/>
                <Route exact path="/vitamins" component={Vitamins}/>
                <Route exact path="/medical" component={Medical}/>
                <Route exact path="/test" component={ProductPage}/>
                <Route exact path="/item/:slug" component={ItemPage}/>
                <Route exact path="/account/signin" component={Signin}/>
                <Route exact path="/account/register" component={Register}/>
                <Route exact path="/shoppingcart/:slug" component={ShoppingCart}/>
                <Route component={Error}/>
            </Switch>
        );
    }
}

export default App;
