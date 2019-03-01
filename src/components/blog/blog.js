import React, { Component } from "react";

class Blog extends Component {
  state = {};
  render() {
    return (
      <div>
        <p>{this.props.blog.title}</p>
        <p>{this.props.blog.text}</p>
      </div>
    );
  }
}

export default Blog;
