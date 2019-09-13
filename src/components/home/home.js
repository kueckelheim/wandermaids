import React, { Component } from "react";
import { connect } from "react-redux";
import PropTypes from "prop-types";
import { Link } from "react-router-dom";
import "./home.scss";
import { Helmet } from "react-helmet";

import Header from "../header/header";
import Footer from "../footer/footer";
import Map from "./map/map.js";

class Home extends Component {
  static propTypes = {
    blogs: PropTypes.array.isRequired
  };

  constructor(props) {
    super(props);
    this.state = {
      center: [112.5, 14.75],
      zoom: 0.6,
      days: "",
      hours: ""
    };
  }

  // not needed anymore since travel is over
  // componentWillMount() {
  //   this.getCountdown();
  // }
  // getCountdown = () => {
  //   const startDate = new Date("March 22, 2019 01:10:00").getTime();
  //   const now = new Date().getTime();
  //   const distance = now - startDate;
  //   const days = Math.floor(distance / (1000 * 60 * 60 * 24));
  //   const hours = Math.floor(
  //     (distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60)
  //   );
  //   this.setState({ days: days, hours: hours });
  // };

  onLink = () => {
    window.scrollTo(0, 0);
  };

  render() {
    let canonical = this.props.linkAppend === "/";
    if (!canonical) {
      canonical = (
        <link rel="canonical" href={"https://www.wandermaidsontour.de/"} />
      );
    } else {
      canonical = null;
    }

    return (
      <div className="Home">
        <Helmet>
          <title>wandermaidsontour</title>
          <meta name="description" content="" />
          {canonical}
        </Helmet>
        <Header linkAppend={this.props.linkAppend} />
        <Map linkAppend={this.props.linkAppend} />
        <main>
          <div className="filler">
            We were 123 days on the road.
            {/* not needed anymore since travel is over */}
            {/* {this.state.days} days and {this.state.hours} hours on the road. */}
          </div>

          {/* Little profile about us */}
          <div className="profileWrapper">
            <div className="container">
              <div className="description">
                <h1>WELCOME</h1>
                <p>
                  5 countries in 4 months: Thailand, the Philippines, Vietnam,
                  Cambodia, and Laos. Exploring different cultures, religions,
                  floras and faunas and satisfying our thirst for adventure.
                  This is our plan.
                </p>
                <p>
                  Soon, we will describe on this page our most surprising, most
                  pleasant, and most unpleasant experiences that we will make on
                  the road. And we will do this the most authentic way possible.
                </p>
              </div>
              <div className="image">
                <img
                  src={process.env.PUBLIC_URL + "/image/Caro and Erik.jpg"}
                  alt="Caro and Erik"
                />
              </div>
            </div>
          </div>
          {/* Blog list */}
          <div className="container">
            {this.props.blogs.map(blog => (
              <div className="blogEntry" key={blog.title}>
                <div>
                  <Link
                    to={this.props.linkAppend + blog.title}
                    className="link"
                    onClick={this.onLink}
                  >
                    <h2>{blog.title}</h2>
                  </Link>
                  <div className="date">{blog.date}</div>
                  <p>{blog.short_description}</p>
                </div>
                <hr />
              </div>
            ))}
          </div>
        </main>
        <Footer />
      </div>
    );
  }
}

const mapStateToProps = state => ({
  blogs: state.blogs.blogs
});

export default connect(mapStateToProps)(Home);
