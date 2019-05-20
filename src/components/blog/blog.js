import React, { Component } from "react";
import "./blog.scss";
import { Helmet } from "react-helmet";

import Header from "../header/header";
import Footer from "../footer/footer";

import Comments from "../comments/comments";

class Blog extends Component {
  render() {
    const main = this.props.blog.main.map((x, index) => {
      if (x.type === "paragraph") {
        return (
          <p key={index} dangerouslySetInnerHTML={{ __html: x.content }} />
        );
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
      if (x.type === "youtube") {
        return (
          <div className="videoContainer">
            <iframe
              width="560"
              height="315"
              src={x.content}
              frameborder="0"
              allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture"
              allowfullscreen="allowfullscreen"
              mozallowfullscreen="mozallowfullscreen"
              msallowfullscreen="msallowfullscreen"
              oallowfullscreen="oallowfullscreen"
              webkitallowfullscreen="webkitallowfullscreen"
              title="video"
            />
          </div>
        );
      } else {
        return null;
      }
    });

    let canonical = this.props.linkAppend === "/";
    if (!canonical) {
      canonical = (
        <link
          rel="canonical"
          href={"https://www.meetsoutheast.com/" + this.props.blog.title}
        />
      );
    } else {
      canonical = null;
    }

    return (
      <div>
        <Helmet>
          <title>{this.props.blog.title}</title>
          <meta
            name="description"
            content={this.props.blog.short_description}
          />
          {canonical}
        </Helmet>
        <Header linkAppend={this.props.linkAppend} />
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
            <Comments title={this.props.blog.title} />
          </div>
        </div>
        <Footer />
      </div>
    );
  }
}

export default Blog;
