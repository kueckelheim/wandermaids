import React, { Component } from "react";

import { connect } from "react-redux";
import PropTypes from "prop-types";

import { Link } from "react-router-dom";

import "./countryList.scss";

import Header from "../header/header";
import Footer from "../footer/footer";

class CountryList extends Component {
  static propTypes = {
    blogs: PropTypes.array.isRequired
  };
  onLink = () => {
    window.scrollTo(0, 0);
  };
  render() {
    let countryBlogs = this.props.blogs.filter(el => {
      return el.country === this.props.country;
    });
    return (
      <div>
        <Header linkAppend={this.props.linkAppend} />
        <div className="countryList">
          <div className="container">
            <div className="imageWrapper">
              <img
                src={
                  process.env.PUBLIC_URL +
                  "/image/" +
                  this.props.country.toLowerCase() +
                  ".jpg"
                }
                alt={this.props.country}
              />
              <h1 className="countryHeader">
                {this.props.country.toUpperCase()}
              </h1>
            </div>
            {countryBlogs.map(country => (
              <div className="blogEntry" key={country.title}>
                <div>
                  <Link
                    to={this.props.linkAppend + country.title}
                    className="link"
                    onClick={this.onLink}
                  >
                    <h2>{country.title}</h2>
                  </Link>
                  <div className="date">{country.date}</div>
                  <p>{country.short_description}</p>
                </div>
                <hr />
              </div>
            ))}
          </div>
        </div>
        <Footer />
      </div>
    );
  }
}

const mapStateToProps = state => ({
  blogs: state.blogs.blogs
});

export default connect(mapStateToProps)(CountryList);
