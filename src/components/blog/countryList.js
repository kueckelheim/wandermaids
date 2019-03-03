import React, { Component } from "react";

import { connect } from "react-redux";
import PropTypes from "prop-types";

import { Link } from "react-router-dom";

class CountryList extends Component {
  static propTypes = {
    blogs: PropTypes.array.isRequired
  };

  render() {
    let countryBlogs = this.props.blogs.filter(el => {
      return el.country === this.props.country;
    });
    return (
      <div>
        {countryBlogs.map((country, index) => (
          <div key={index}>
            <Link to={"/" + country.title}>
              <h3>{country.title}</h3>
            </Link>
            <p>{country.short_description}</p>
          </div>
        ))}
      </div>
    );
  }
}

const mapStateToProps = state => ({
  blogs: state.blogs.blogs
});

export default connect(mapStateToProps)(CountryList);
