import {combineReducers, createStore} from "redux";
import React from 'react';
import {composeWithDevTools} from "redux-devtools-extension";
import contentReducer from "./contentReducer";


let reducers = combineReducers({
    contentStore: contentReducer,
});


let store = createStore(
    reducers,
    composeWithDevTools());
window.store = store;
export default store;