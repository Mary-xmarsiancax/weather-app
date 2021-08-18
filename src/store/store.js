
import {combineReducers, createStore} from "redux";
import React from 'react';
import Reducer from "./reducer";



let reducers = combineReducers({
    headerState: Reducer,
});


let store = createStore(reducers);
window.store=store;
export default store;