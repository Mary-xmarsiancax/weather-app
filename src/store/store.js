import {applyMiddleware, combineReducers, createStore} from "redux";
import React from 'react';
import {composeWithDevTools} from "redux-devtools-extension";
import contentReducer from "./contentReducer";
import thunk from "redux-thunk";

let reducers = combineReducers({
    contentStore: contentReducer,
});

let store = createStore(
    reducers,
    composeWithDevTools(applyMiddleware(thunk)));
window.store = store;
export default store;