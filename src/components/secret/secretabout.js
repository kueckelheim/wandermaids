import React, { Component } from "react";

import Form from "../form/Form";

import About from "../about/about";

class SecretAbout extends Component {
  render() {
    return (
      <div>
        <Form />
        <About linkAppend={this.props.linkAppend} />
      </div>
    );
  }
}

export default SecretAbout;
