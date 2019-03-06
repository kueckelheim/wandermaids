import React, { Component } from "react";
import "./header.scss";
import Menu from "./menu";

class Header extends Component {
  state = {};
  render() {
    return (
      <header>
        <div className="upper">Backpacking in South East Asia</div>
        <div className="logo">
          <Menu />
          <div className="wrapper">
            <div>MEET</div>
            <div>
              <span>SOUTH</span>EAST
            </div>
          </div>
        </div>
        <div className="lower" />
      </header>
    );
  }
}

export default Header;
