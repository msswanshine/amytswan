import React, { Component} from "react";
import {hot} from "react-hot-loader";

import Header from "./components/header";
import Footer from "./components/footer";

import "./App.css";

class App extends Component{
  render(){
    return(
      <div className="App">
        <Header />
        <Footer />
      </div>
    );
  }
}

export default hot(module)(App);
