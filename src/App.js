import React , { Component } from 'react';
import Home from './Components/pages/Home'
import {Route, Switch} from 'react-router-dom'
import './App.css';


import CategoryPage from "./Components/pages/CategoryPage";
import Signin from "./Components/pages/Signin";
import Register from "./Components/pages/Register";
import ItemPage from "./Components/pages/ItemPage";
import ShoppingCart from "./Components/pages/ShoppingCart";
import ProductPage from "./Containers/ProductPage";


class App extends Component {

    render() {
        return (
            <Switch>
                <Route exact path="/" component={Home}/>
                <Route exact path="/category/:slug" component={CategoryPage}/>
                <Route exact path="/test/:slug" component={ProductPage}/>
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
