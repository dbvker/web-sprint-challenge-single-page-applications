import React from "react";
import { render } from "react-dom";
import { BrowserRouter as Router } from "react-router-dom";

// CSS
import "./index.css";

// Views
import App from "./App";

// Components
import Header from './components/header/Header';

render(
    <Router>
        <Header />
        <App />
    </Router>, 
    document.getElementById("root")
);
