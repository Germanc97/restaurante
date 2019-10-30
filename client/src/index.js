import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import InformacionPage from './Pages/InformacionPage.js';
import galeria from  './Pages/GaleriaPage.js'
import Mesas from  './Pages/MesasPage'
import App from './App.js';
import * as serviceWorker from './serviceWorker';
import {BrowserRouter as Router,Route} from "react-router-dom";
const Conections=
    <Router>
        <App/>
        <Route exact path="/" component={InformacionPage}/>
        <Route path="/Galeria" component={galeria} />
        <Route path="/Mesas" component={Mesas} />
    </Router>;
ReactDOM.render(Conections, document.getElementById('root'));

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
