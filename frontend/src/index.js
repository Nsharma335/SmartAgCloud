
import { BrowserRouter as Router, Route } from 'react-router-dom'
import { createStore,applyMiddleware,compose } from "redux";
import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import Home from './components/Home';
import AddCluster from './components/AddCluster';
import AddNode from './components/AddNode';
import DeleteNode from './components/DeleteNode';
import UpdateNode from './components/UpdateNode.js';
import Dashboard from './components/Dashboard';
import ListFarmers from './components/ListFarmers';
import ListClusters from './components/ListClusters';
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
                <Route path="/addNode" component={AddNode}/>
                <Route path="/updateNode" component={UpdateNode}/>
                <Route path="/deleteNode" component={DeleteNode}/>
                <Route path="/dashboard" component={Dashboard}/>
                <Route path="/getFarmerList" component={ListFarmers}/>
                <Route path="/getClusterList" component={ListClusters}/>    
                </div>
            </Router>
 
    </Provider>
    ,
    document.getElementById('root')
);
