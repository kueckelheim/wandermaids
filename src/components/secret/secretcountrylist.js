import React, { Component } from "react";

import Form from "../form/Form";

import CountryList from "../blog/countryList";

class SecretCountryList extends Component {
  render() {
    return (
      <div>
        <Form />
        <CountryList
          country={this.props.countryProp}
          linkAppend={this.props.linkAppend}
        />
      </div>
    );
  }
}

export default SecretCountryList;
