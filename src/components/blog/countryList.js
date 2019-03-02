import React, { Component } from "react";

import { connect } from "react-redux";
import PropTypes from "prop-types";

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
            <p>{country.title}</p>
            <p>{country.text}</p>
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
