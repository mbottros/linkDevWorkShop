import React, { Component } from "react";
import { BrowserRouter, Route, Switch } from "react-router-dom";
import "./App.scss";
import Header from "./component/layout/header/Header";
import Home from "./component/layout/content/home/Home";
import NewsListing from "./component/layout/content/NewsListing/NewsListing";
import NewsDetails from "./component/layout/content/NewsDetails/NewsDetails";
import Footer from "./component/layout/footer/Footer";
import './fonts/CalibriRegular.ttf';
class App extends Component {
  render() {
    return (
      <BrowserRouter>
        <div className="App">
          <Header name="Header" />
          <div className="">
            <Switch>
              <Route exact path="/" component={Home} />
              <Route path="/NewsListing" component={NewsListing } />
              <Route path="/NewsDetails" component={ NewsDetails } />
            </Switch>
          </div>
          <Footer name="footer" />
        </div>
      </BrowserRouter>
    );
  }
}

export default App;
