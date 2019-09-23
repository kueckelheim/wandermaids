import React, { Component } from "react";
import "./footer.scss";

import Header from "../header/header";
import Footer from "../footer/footer";

import { Helmet } from "react-helmet";

class Impressum extends Component {
  state = {};
  render() {
    return (
      <div>
        <Helmet>
          <title>Impressum</title>
          <meta name="robots" content="noindex" />
        </Helmet>
        <Header linkAppend="/" />
        <div className="Impressum">
          <div className="container">
            <h4>Impressum</h4>
            <p>Verantwortlich für den Inhalt dieser Seite:</p>
            <ul>
              <li>Johannes Eckert und Anna Rudmann</li>
              <ul>
                <li>Moltkestraße 19</li>
                <li>79098 Freiburg</li>
                <li>Deutschland</li>
              </ul>
              <li>E-Mail: johnny0815@gmx.de</li>
              <li>Phone: +49 1769 3176738</li>
            </ul>
            <p>
              Die EU-Kommission bietet eine Plattform zur Online-Streitbeilegung
              zwischen Verbrauchern und Unternehmern an, die Sie unter folgendem
              Link erreichen:{" "}
              <a
                href="https://ec.europa.eu/consumers/odr/main/index.cfm?event=main.home.chooseLanguage"
                rel="nofollow"
              >
                Online-Streitbeilegung Website
              </a>
              .
            </p>

            <div className="source">
              <p>
                Source:
                <a href="https://language-boutique.de/muster-impressum">
                  Language-Boutique.de/Muster-Impressum
                </a>
              </p>
            </div>
          </div>
        </div>
        <Footer />
      </div>
    );
  }
}

export default Impressum;
