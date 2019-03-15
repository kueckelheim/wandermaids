import React, { Component } from "react";
import { Provider } from "react-redux";
import store from "./store";
import App from "./App";
import "babel-polyfill";

class App2 extends Component {
  state = {};
  render() {
    return (
      <Provider store={store}>
        <App />
      </Provider>
    );
  }
}

export default App2;
