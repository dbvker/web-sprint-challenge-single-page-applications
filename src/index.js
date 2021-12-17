import React from "react";
import { render } from "react-dom";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";

// CSS
import "./index.css";

// Views
import App from "./App";
import Order from "./views/Order";
import Confirmation from "./views/Confirmation";

// Components
import Header from './components/header/Header';

render(
    <Router>
    <Header />
        <Switch>
            <Route exact path='/' component={App} />
            <Route path='/order' component={Order} />
            <Route path='/confirmation' component={Confirmation} />
        </Switch>
    </Router>, 
    document.getElementById("root")
);
