import React from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter, Route, Switch, Link, Redirect } from 'react-router-dom';


// Authenticated Routes functions
import {AppliedRoute} from './containers/AppliedRoute';
import {AuthenticatedRoute} from './containers/AuthenticatedRoute';

import App from './App';
import './styles/css/App.css';

import Login from './components/Login.js';
import './styles/css/login.css';

import Dashboard from './components/Dashboard/Dashboard.js';
import registerServiceWorker from './registerServiceWorker';

ReactDOM.render(
    <BrowserRouter>
        <Switch>
            <AppliedRoute exact path='/' component={App} /> 
            <Route path='/login' component={Login} />   
            <Route path='/dashboard' component={Dashboard} />
        </Switch>
    </BrowserRouter>
, document.getElementById('root'));
registerServiceWorker();
