import React, { Component } from "react";
import "./menu.scss";
import { Link } from "react-router-dom";

class Menu extends Component {
  constructor(props) {
    super(props);
    this.state = {
      btnClass: "menu-btn",
      showMenu: false,
      overlayClass: "menu-overlay",
      searchClass: "search none"
    };
  }
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
      searchClass: "search none"
    });
  };
  render() {
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
            <Link to="/blogs1" className="link" onClick={this.onLink}>
              <li>Blog1</li>
            </Link>
            <li>About</li>
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

export default Menu;
