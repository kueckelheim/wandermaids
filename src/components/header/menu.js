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
      countryOverlayClass: "countryOverlay"
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
        searchClass: "search animated bounceOutLeft",
        countryOverlayClass: "countryOverlay"
      });
    }
  };
  onLink = () => {
    this.setState({
      btnClass: "menu-btn",
      showMenu: false,
      overlayClass: "menu-overlay show animated flipOutX",
      searchClass: "search none",
      countryOverlayClass: "countryOverlay"
    });
  };
  foldCountry = () => {
    this.setState({
      countryOverlayClass: "countryOverlay show animated bounceInUp"
    });
  };
  foldCountryClose = () => {
    this.setState({
      countryOverlayClass: "countryOverlay show animated fadeOutLeft"
    });
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
            <li>Contact</li>
          </ul>
        </nav>
        <div className={this.state.searchClass}>
          <div className="circle" />
          <div className="stiel" />
          <input className="searchtext" type="text" placeholder="Search..." />
        </div>
        <div className={this.state.countryOverlayClass}>
          <ul>
            {countries.map((country, index) => (
              <Link
                to={"/" + country}
                className="link"
                onClick={this.onLink}
                key={index}
              >
                <li>{country}</li>
              </Link>
            ))}
          </ul>
          <div
            className="arrowBox animated bounceInDown"
            onClick={this.foldCountryClose}
          >
            <div className="after" onClick={this.foldCountryClose} />
            <div className="before" onClick={this.foldCountryClose} />
            Back
          </div>
        </div>
      </React.Fragment>
    );
  }
}

const mapStateToProps = state => ({
  blogs: state.blogs.blogs
});

export default connect(mapStateToProps)(Menu);
