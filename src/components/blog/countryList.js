import React, { Component } from "react";

import { connect } from "react-redux";
import PropTypes from "prop-types";

import { Link } from "react-router-dom";

import "./countryList.scss";

class CountryList extends Component {
  static propTypes = {
    blogs: PropTypes.array.isRequired
  };

  render() {
    let countryBlogs = this.props.blogs.filter(el => {
      return el.country === this.props.country;
    });
    return (
      <div className="countryList">
        <div className="container">
          <div className="imageWrapper">
            <img
              src={require("../../images/" +
                this.props.country.toLowerCase() +
                ".jpg")}
              alt={this.props.country}
            />
            <h1 className="countryHeader">
              {this.props.country.toUpperCase()}
            </h1>
          </div>
          {countryBlogs.map(country => (
            <div className="blogEntry" key={country.title}>
              <div>
                <Link to={"/" + country.title} className="link">
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
    );
  }
}

const mapStateToProps = state => ({
  blogs: state.blogs.blogs
});

export default connect(mapStateToProps)(CountryList);
