import React, { Component } from "react";

import Form from "../form/Form";

import Gallery from "../gallery/gallery";

class SecretGallery extends Component {
  render() {
    return (
      <div>
        <Form />
        <Gallery blogs={this.props.blogs} linkAppend={this.props.linkAppend} />
      </div>
    );
  }
}

export default SecretGallery;
