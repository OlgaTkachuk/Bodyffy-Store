import React , { Component } from 'react';
import Home from './pages/Home'
import {Route, Switch} from 'react-router-dom'
import './App.css';
import Cosmetics from "./pages/Cosmetics";
import Sport from "./pages/Sport";
import Vitamins from "./pages/Vitamins";
import Medical from "./pages/Medical";
import Signin from "./pages/Signin";
import Register from "./pages/Register";


class App extends Component {
    render() {
        return (
            <Switch>
                <Route exact path="/" component={Home}/>
                <Route exact path="/cosmetics" component={Cosmetics}/>
                <Route exact path="/sport" component={Sport}/>
                <Route exact path="/vitamins" component={Vitamins}/>
                <Route exact path="/medical" component={Medical}/>
                <Route exact path="/account/signin" component={Signin}/>
                <Route exact path="/account/register" component={Register}/>
                <Route component={Error}/>
            </Switch>
        );
    }
}

export default App;
