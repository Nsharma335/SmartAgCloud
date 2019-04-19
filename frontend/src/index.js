
import { BrowserRouter as Router, Route } from 'react-router-dom'
import { createStore,applyMiddleware,compose } from "redux";
import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import Home from './components/Home';
import AddCluster from './components/AddCluster';
import Dashboard from './components/Dashboard';
import reducer from './store/reducer';
import {Provider} from 'react-redux';
import promise from "redux-promise";
//to work with redux dev tool

const composePlugin = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;
const createStoreWithMiddleware = applyMiddleware(promise)(createStore);
//import createStore from redux
//import Provider from react-redux

//create a store and pass reducer as an argument
//const store = createStore(reducer);
const store = createStore(reducer, composePlugin(applyMiddleware(promise)));

ReactDOM.render(
    <Provider store = {store}>
       
            <Router>
                <div>
                <Route exact path="/" component={Home}/>
                <Route path="/addcluster" component={AddCluster}/>
                <Route path="/dashboard" component={Dashboard}/>
                
                </div>
            </Router>
 
    </Provider>
    ,
    document.getElementById('root')
);
