import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import InformacionPage from './Pages/InformacionPage.js';
import App2 from  './Components/Galeria.js'
import * as serviceWorker from './serviceWorker';
import {BrowserRouter as Router,Switch,Route,Link,useRouteMatch} from "react-router-dom";
const Conections=
    <Router>
        <Route exact path="/" component={App} />
        <Route exact path="/Info" component={InformacionPage} />
        <Route exact path="/Galeria" component={App2} />
    </Router>;
ReactDOM.render(<App />, document.getElementById('root'));

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
