import React, { Component } from "react";
import { Helmet } from "react-helmet";

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

    let canonical = this.props.linkAppend === "/";
    if (!canonical) {
      canonical = (
        <link
          rel="canonical"
          href={"https://www.wandermaidsontour.de/" + this.props.country}
        />
      );
    } else {
      canonical = null;
    }

    return (
      <div>
        <Helmet>
          <title>{this.props.country}</title>
          <meta
            name="description"
            content={
              "Wandermaidsontour: Alle Einträge über " + this.props.country
            }
          />
          {canonical}
        </Helmet>
        <Header linkAppend={this.props.linkAppend} />
        <div className="countryList">
          <div className="container">
            <h1 className="countryHeader">
              {this.props.country.toUpperCase()}
            </h1>
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
