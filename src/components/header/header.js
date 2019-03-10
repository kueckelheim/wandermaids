import React, { Component } from "react";
import "./header.scss";
import Menu from "./menu";
import { Link } from "react-router-dom";

class Header extends Component {
  state = {};
  render() {
    return (
      <header>
        <div className="upper">Backpacking in South East Asia</div>
        <div className="logo">
          <Menu linkAppend={this.props.linkAppend} />

          <div className="wrapper">
            <Link
              to={this.props.linkAppend}
              className="link"
              onClick={this.onLink}
            >
              <div>MEET</div>
              <div>
                <span>SOUTH</span>EAST
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
