import React, { Component } from "react";

import Form from "../form/Form";

import Blog from "../blog/blog";

class SecretBlog extends Component {
  render() {
    return (
      <div>
        <Form />
        <Blog blog={this.props.blogProp} linkAppend={this.props.linkAppend} />
      </div>
    );
  }
}

export default SecretBlog;
