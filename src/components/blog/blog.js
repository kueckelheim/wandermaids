import React, { Component } from "react";
import "./blog.scss";

class Blog extends Component {
  state = {};
  render() {
    return (
      <div className="Blog">
        <div className="container">
          <h1>{this.props.blog.title}</h1>
          <hr />
          <div className="date">{this.props.blog.date}</div>
          <hr />
          <p>{this.props.blog.short_description}</p>
          <img
            src={require("../../images/" +
              this.props.blog.header_image +
              ".jpg")}
            alt="test"
            className="blogImage"
          />
          <p>{this.props.blog.text}</p>
        </div>
      </div>
    );
  }
}

export default Blog;
