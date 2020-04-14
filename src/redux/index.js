import thunk from 'redux-thunk'
import logger from 'redux-logger'
import {composeWithDevTools} from "redux-devtools-extension";
import {rootReducer} from './reducer';
import {createStore, applyMiddleware, compose} from 'redux';

export const store = createStore(rootReducer, composeWithDevTools(applyMiddleware(logger,thunk)));