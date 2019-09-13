import React, { Component } from "react";
import "./blog.scss";
import { Helmet } from "react-helmet";

import Header from "../header/header";
import Footer from "../footer/footer";

import Comments from "../comments/comments";

class Blog extends Component {
  constructor(props) {
    super(props);
    this.state = {
      imgSelect: 0,
      overlayClass: "overlay",
      max: 1
    };
  }

  componentWillMount() {
    const max = this.props.blog.images.length;
    this.setState({ max });
  }

  onClickImg = e => {
    const index = e.target.name;
    this.setState({ imgSelect: index, overlayClass: "overlay shown" });
  };

  onClose = () => {
    this.setState({ overlayClass: "overlay" });
  };

  onLeft = () => {
    const imgSelect = this.state.imgSelect;
    if (imgSelect > 0) {
      this.setState({ imgSelect: imgSelect - 1 });
    }
  };

  onRight = () => {
    const imgSelect = Number(this.state.imgSelect);
    const max = this.props.blog.images.length - 1;
    if (max > imgSelect) {
      this.setState({ imgSelect: imgSelect + 1 });
    }
  };

  render() {
    const gallery = this.props.blog.images.map((x, index) => (
      <div className="imageCont" key={index}>
        <img
          src={process.env.PUBLIC_URL + "/image/" + x.name + ".jpg"}
          alt={x.comment}
          className="blogImage"
          name={index}
          onClick={this.onClickImg}
        />
        {/* <div className="commentImg">{x.comment}</div> */}
      </div>
    ));
    const main = this.props.blog.main.map((x, index) => {
      if (x.type === "paragraph") {
        return (
          <p key={index} dangerouslySetInnerHTML={{ __html: x.content }} />
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
          href={"https://www.wandermaidsontour.com/" + this.props.blog.title}
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

            {main}
            <hr />
            <div className="gallery">{gallery}</div>
            <div className={this.state.overlayClass}>
              <div className="image">
                <img
                  src={
                    process.env.PUBLIC_URL +
                    "/image/" +
                    this.props.blog.images[this.state.imgSelect].name +
                    ".jpg"
                  }
                  className="blogImage"
                />
                <div className="text">
                  {this.props.blog.images[this.state.imgSelect].comment}
                </div>
              </div>
              <div className="arrowLeft" onClick={this.onLeft}>
                <div className="left" />
              </div>
              <div className="arrowRight">
                <div className="right" onClick={this.onRight} />
              </div>
              <div className="close" onClick={this.onClose}>
                zurück
              </div>
              <div className="count">
                {Number(this.state.imgSelect) + 1}/{this.state.max}
              </div>
            </div>
            <Comments title={this.props.blog.title} />
          </div>
        </div>
        <Footer />
      </div>
    );
  }
}

export default Blog;
