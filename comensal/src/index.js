import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import Restaurant from './Pages/ResComensalPage.js'
import App from './App.js';
import * as serviceWorker from './serviceWorker';
import {BrowserRouter as Router,Route} from "react-router-dom";
const Conections=
    <Router>
        <App/>
        <Route exact path="/" component={Restaurant}/>
        <Route path="/PerfilRes" component={Restaurant}/>
    </Router>;
ReactDOM.render(Conections, document.getElementById('root'));

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
