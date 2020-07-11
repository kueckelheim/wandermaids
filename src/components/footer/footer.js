import React, { Component } from "react";
import "./footer.scss";
import { Link } from "react-router-dom";

class Footer extends Component {
  onLink = () => {
    window.scrollTo(0, 0);
  };
  render() {
    return (
      <footer>
        <p>Copyright &copy; 2020</p>
        <p>
          <Link
            to="/datenschutzerklaerung"
            className="link"
            onClick={this.onLink}
          >
            Datenschutzerklärung
          </Link>
        </p>
        <p>
          <Link to="/impressum" className="link" onClick={this.onLink}>
            Impressum
          </Link>
        </p>
        {/* <p>
          <Link to="/contact" className="link" onClick={this.onLink}>
            Contact
          </Link>
        </p> */}
      </footer>
    );
  }
}

export default Footer;
