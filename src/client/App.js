import React, { Component } from "react";
import "./App.css";
import Root from "./components/Root.js";
import Footer from "./components/Footer.js";
import CompOne from "./components/ComponentOne.js";
import CompTwo from "./components/ComponentTwo.js";
import FourOhFour from "./components/404.js";
import styled from "styled-components";
import { createGlobalStyle } from "styled-components";
//import iconSVG from "./icons/icon.svg";
//import SVG from "react-inlinesvg";
import Icon from "./icons/icon.png";
//import { ReactComponent as Logo } from "./icons/icon.svg";

import { BrowserRouter as Router, Link, Route, Switch } from "react-router-dom";

const GlobalStyle = createGlobalStyle`
  body {
    background-color: white;
    color:rgb(85,85,85);
  }
  .icon {
    width:32px;height:32px
  }
`;

class App extends Component {
  render() {
    return (
      <div className="App">
        <Router>
          <div>
            <img src={Icon} className="icon" />
            <Link to="/"> Home</Link>
            <Link to="/ComponentOne"> RouteOne</Link>
            <Link to="/ComponentTwo"> RouteTwo</Link>

            <Switch>
              <Route exact path="/" component={Root} />
              <Route path="/ComponentOne" component={CompOne} />
              <Route path="/ComponentTwo" component={CompTwo} />
              <Route component={FourOhFour} />
            </Switch>
          </div>
        </Router>

        <Footer />

        <GlobalStyle />
      </div>
    );
  }
}

export default App;
