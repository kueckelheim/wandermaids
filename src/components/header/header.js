import React, { Component } from "react";
import "./header.scss";
import Menu from "./menu";
import { Link } from "react-router-dom";
// import { HashLink } from "react-router-hash-link";

// import CookieConsent from "react-cookie-consent";

class Header extends Component {
  render() {
    return (
      <header>
        {/* <CookieConsent>
          This website uses cookies to enhance the user experience. &nbsp;
          <HashLink to="/privacy policy#cookies" className="link">
            Read more information.
          </HashLink>
        </CookieConsent> */}
        {/* <div className="upper">Backpacking in Southeast Asia</div> */}
        <div className="logo">
          <Menu linkAppend={this.props.linkAppend} />

          <div className="wrapper">
            <Link
              to={this.props.linkAppend}
              className="link"
              onClick={this.onLink}
            >
              <div>WANDERMAIDS</div>
              <div>
                <span>ON </span>TOUR
              </div>
            </Link>
          </div>
        </div>
        <div className="lower" />
      </header>
    );
  }
}

export default Header;
