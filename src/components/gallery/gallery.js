import React, { Component } from "react";
import "./gallery.scss";
import { Helmet } from "react-helmet";

import Header from "../header/header";
import Footer from "../footer/footer";

class Gallery extends Component {
  constructor(props) {
    super(props);
    this.state = {
      imgSelect: 0,
      overlayClass: "overlay"
    };
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
    const max = this.props.blogs.map(x => x.images).flat().length - 1;
    const imgSelect = Number(this.state.imgSelect);
    if (max > imgSelect) {
      this.setState({ imgSelect: imgSelect + 1 });
    }
  };

  render() {
    console.log(this.state.imgSelect);
    let canonical = this.props.linkAppend === "/";
    if (!canonical) {
      canonical = (
        <link
          rel="canonical"
          href={"https://www.wandermaidsontour.com/galerie"}
        />
      );
    } else {
      canonical = null;
    }

    // Get all images
    let images = this.props.blogs.map(x => x.images).flat();
    const gallery = images.map((x, index) => (
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
    return (
      <div className="gal">
        <Helmet>
          <title>Galerie: wandermaidsontour</title>
          <meta
            name="description"
            content="Alle Bilder von wandermaidsontour"
          />
          {canonical}
        </Helmet>
        <Header linkAppend={this.props.linkAppend} />
        <div className="container">
          <h1>Galerie</h1>
          <p />
          <div className="gallery">{gallery}</div>
          <div className={this.state.overlayClass}>
            <div className="image">
              <img
                src={
                  process.env.PUBLIC_URL +
                  "/image/" +
                  images[this.state.imgSelect].name +
                  ".jpg"
                }
                className="blogImage"
              />
              <div className="text">{images[this.state.imgSelect].comment}</div>
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
              {Number(this.state.imgSelect) + 1}/{images.length}
            </div>
          </div>
          <p />
        </div>
        <Footer />
      </div>
    );
  }
}

export default Gallery;
