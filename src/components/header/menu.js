import React, { Component } from "react";
import "./menu.scss";
import { Link } from "react-router-dom";

import { connect } from "react-redux";
import PropTypes from "prop-types";

class Menu extends Component {
  constructor(props) {
    super(props);
    this.state = {
      btnClass: "menu-btn",
      showMenu: false,
      overlayClass: "menu-overlay",
      searchClass: "search none",
      countryClass: "country",
      countriesShown: false
    };
  }

  static propTypes = {
    blogs: PropTypes.array.isRequired
  };

  handleClick = () => {
    if (!this.state.showMenu) {
      this.setState({
        btnClass: "menu-btn close",
        showMenu: true,
        overlayClass: "menu-overlay show animated lightSpeedIn",
        searchClass: "search animated bounceInLeft"
      });
    } else {
      this.setState({
        btnClass: "menu-btn",
        showMenu: false,
        overlayClass: "menu-overlay show animated bounceOutUp",
        searchClass: "search animated bounceOutLeft"
      });
    }
  };
  onLink = () => {
    this.setState({
      btnClass: "menu-btn",
      showMenu: false,
      overlayClass: "menu-overlay show animated flipOutX",
      searchClass: "search none",
      countryClass: "country",
      countriesShown: false
    });
  };
  foldCountry = () => {
    if (!this.state.countriesShown) {
      this.setState({
        countryClass: "country show",
        countriesShown: true
      });
    } else {
      this.setState({
        countryClass: "country",
        countriesShown: false
      });
    }
  };
  render() {
    // get array of countries
    let countries = this.props.blogs.map(a => a.country);
    // remove double occurences
    countries = [...new Set(countries)];

    return (
      <React.Fragment>
        <div className={this.state.btnClass} onClick={this.handleClick}>
          <div className="btn-line-wrapper">
            <div className="btn-line" />
            <div className="btn-line" />
            <div className="btn-line" />
            <div className="btn-line-close1" />
            <div className="btn-line-close2" />
          </div>
        </div>
        <nav className={this.state.overlayClass}>
          <ul>
            <Link to="/" className="link" onClick={this.onLink}>
              <li>Home</li>
            </Link>
            <li onClick={this.foldCountry} className="foldCountry">
              By Country
            </li>
            {countries.map((country, index) => (
              <div key={index} className={this.state.countryClass}>
                <Link to={"/" + country} className="link" onClick={this.onLink}>
                  <li>{country}</li>
                </Link>
              </div>
            ))}

            <li>Contact</li>
          </ul>
          <div className={this.state.searchClass}>
            <div className="circle" />
            <div className="stiel" />
            <input className="searchtext" type="text" placeholder="Search..." />
          </div>
        </nav>
      </React.Fragment>
    );
  }
}

const mapStateToProps = state => ({
  blogs: state.blogs.blogs
});

export default connect(mapStateToProps)(Menu);
