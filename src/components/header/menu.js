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
        overlayClass: "menu-overlay show animated slideInRight",
        searchClass: "search animated bounceInLeft"
      });
    } else {
      this.setState({
        btnClass: "menu-btn",
        showMenu: false,
        overlayClass: "menu-overlay show animated slideOutRight",
        searchClass: "search animated bounceOutLeft",
        countryOverlayClass: "countryOverlay"
      });
    }
  };
  onLink = () => {
    window.scrollTo(0, 0);
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
    // let countries = this.props.blogs.map(a => a.country);
    // remove double occurences
    // countries = [...new Set(countries)];
    // remove empty entries
    // countries = countries.filter(el => {
    // return el !== null && el !== "" && el !== " ";
    // });

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
            <Link
              to={this.props.linkAppend}
              className="link"
              onClick={this.onLink}
            >
              <li>Home</li>
            </Link>
            <hr />
            <Link
              to={this.props.linkAppend + "ueber uns"}
              className="link"
              onClick={this.onLink}
            >
              <li>Über Uns</li>
            </Link>
            <hr />
            <Link
              to={this.props.linkAppend + "suedostasien"}
              className="link"
              onClick={this.onLink}
            >
              <li>Südostasien</li>
            </Link>
            <hr />
            <Link
              to={this.props.linkAppend + "neuseeland"}
              className="link"
              onClick={this.onLink}
            >
              <li>Neuseeland</li>
            </Link>
            <hr />
            {/* <Link
              to={this.props.linkAppend + "peru"}
              className="link"
              onClick={this.onLink}
            >
              <li>Peru</li>
            </Link>
            <hr />
            <Link
              to={this.props.linkAppend + "usa"}
              className="link"
              onClick={this.onLink}
            >
              <li>USA</li>
            </Link>
            <hr /> */}
            <Link
              to={this.props.linkAppend + "galerie"}
              className="link"
              onClick={this.onLink}
            >
              <li>Galerie</li>
            </Link>
          </ul>
        </nav>
      </React.Fragment>
    );
  }
}

const mapStateToProps = state => ({
  blogs: state.blogs.blogs
});

export default connect(mapStateToProps)(Menu);
