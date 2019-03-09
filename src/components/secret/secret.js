import React, { Component } from "react";

import Form from "../form/Form";

import Home from "../home/home";

class Secret extends Component {
  render() {
    return (
      <div>
        <Form />
        <Home linkAppend="/secretpath/" />
      </div>
    );
  }
}

export default Secret;
