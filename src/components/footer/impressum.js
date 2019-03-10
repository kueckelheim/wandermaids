import React, { Component } from "react";
import "./footer.scss";

import Header from "../header/header";
import Footer from "../footer/footer";

class Impressum extends Component {
  state = {};
  render() {
    return (
      <div>
        <Header linkAppend="/" />
        <div className="Impressum">
          <div className="container">
            <h4>Impressum</h4>
            <p>
              The following information (Impressum) is required under German
              law:
            </p>
            <ul>
              <li>Erik Kückelheim</li>
              <ul>
                <li>Pforrgasse 7</li>
                <li>79206 Breisach</li>
                <li>Germany</li>
              </ul>
              <li>E-Mail: info@meetsoutheast.com</li>
              <li>Phone: +55 11 96644-4270</li>
              <li>
                Verantwortlicher im Sinne des Presserechts (V.i.S.d.P.): Erik
                Kückelheim
              </li>
            </ul>
            <p>
              Online Dispute Resolution website of the EU Commission In order
              for consumers and traders to resolve a dispute out-of-court, the
              European Commission developed the Online Dispute Resolution
              Website:{" "}
              <a
                href="https://ec.europa.eu/consumers/odr/main/index.cfm?event=main.home.chooseLanguage"
                rel="nofollow"
              >
                Online Dispute Resolution Website
              </a>
              .
            </p>
            <h4>Legal Disclaimer</h4>
            <p>
              The contents of these pages were prepared with utmost care.
              Nonetheless, we cannot assume liability for the timeless accuracy
              and completeness of the information. Our website contains links to
              external websites. As the contents of these third-party websites
              are beyond our control, we cannot accept liability for them.
              Responsibility for the contents of the linked pages is always held
              by the provider or operator of the pages.
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
