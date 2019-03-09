import React, { Component } from "react";
import "./blog.scss";

class Blog extends Component {
  state = {};
  render() {
    const main = this.props.blog.main.map((x, index) => {
      if (x.type === "paragraph") {
        return <p key={index}>{x.content}</p>;
      }
      if (x.type === "image") {
        return (
          <img
            key={index}
            src={process.env.PUBLIC_URL + "/image/" + x.content + ".jpg"}
            alt={x.image_label}
            className="blogImage"
          />
        );
      }
    });

    return (
      <div className="Blog">
        <div className="container">
          <h1>{this.props.blog.title}</h1>
          <hr />
          <div className="date">{this.props.blog.date}</div>
          <hr />
          <p>{this.props.blog.short_description}</p>
          <img
            src={
              process.env.PUBLIC_URL +
              "/image/" +
              this.props.blog.header_image +
              ".jpg"
            }
            alt={this.props.blog.header_image_label}
            className="blogImage"
          />
          {main}
        </div>
      </div>
    );
  }
}

export default Blog;
