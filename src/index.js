import React from 'react';
import ReactDOM from 'react-dom';
import {createStore,applyMiddleware} from 'redux';
import {Provider} from 'react-redux';
import {createLogger} from 'redux-logger'

import './index.css';
import App from './App';
import * as serviceWorker from './serviceWorker';

import {reducer, initialState} from './reducers/reducer';
import {BrowserRouter as Router} from 'react-router-dom';
import thunk from 'redux-thunk'
import logger from 'redux-logger'

const store = createStore(reducer, initialState, applyMiddleware(logger,thunk));

store.subscribe(() => {
    console.log('[Subscription]', store.getState)
})

ReactDOM.render(
    <Router>
        <Provider store={store}>
            <App/>
        </Provider>
    </Router>, document.getElementById('root'));

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
