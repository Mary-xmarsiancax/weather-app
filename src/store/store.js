import {applyMiddleware, combineReducers, createStore} from "redux";
import React from 'react';
import Reducer from "./reducer";
import {composeWithDevTools} from "redux-devtools-extension";


let reducers = combineReducers({
    headerState: Reducer,
});


let store = createStore(
    reducers,
    composeWithDevTools());
window.store = store;
export default store;