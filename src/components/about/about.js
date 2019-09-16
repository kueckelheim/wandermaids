import React, { Component } from "react";
import "./about.scss";
import { Helmet } from "react-helmet";

import Header from "../header/header";
import Footer from "../footer/footer";

class About extends Component {
  render() {
    let canonical = this.props.linkAppend === "/";
    if (!canonical) {
      canonical = (
        <link
          rel="canonical"
          href={"https://www.wandermaidsontour.com/ueber uns"}
        />
      );
    } else {
      canonical = null;
    }
    return (
      <div className="about">
        <Helmet>
          <title>Über uns: wandermaidsontour</title>
          <meta name="description" content="Wer sind die wandermaidsontour" />
          {canonical}
        </Helmet>
        <Header linkAppend={this.props.linkAppend} />
        <div className="grid">
          <div className="left one">
            <img
              src={process.env.PUBLIC_URL + "/image/wandermaids eins.jpg"}
              alt="Wandermaids Johannes und Anna"
            />
          </div>
          <div className="left two">
            <img
              src={process.env.PUBLIC_URL + "/image/wandermaids zwei.jpg"}
              alt="Wandermaids Johannes und Anna"
            />
          </div>
          <div className="left three">
            <img
              src={process.env.PUBLIC_URL + "/image/wandermaids drei.jpg"}
              alt="Wandermaids Johannes und Anna"
            />
          </div>
          <div className="text upper">
            <p>
              <b>
                Liebe Freunde, Verwandte, Interessierte und Wandermaids-Fans!
              </b>
            </p>
            <p>
              Wir freuen uns, dass ihr unsere Reise verfolgt und unserem
              Reisetagebuch einen Besuch abstattet.
            </p>
            <p>
              In 91 Tagen wollen wir einmal um die Welt reisen. Wir starten
              unsere Reise im Norden Vietnams und machen uns von dort aus auf
              den Weg in den Süden des Landes. Unterwegs planen wir einen
              Abstecher nach Kambodscha, um uns eines der vergessenen
              Weltwunder, Angkor Wat, anzuschauen.
            </p>
            <p>
              Von Ho Chi Minh City aus fliegen wir weiter nach Neuseeland. Mit
              einem Camper fahren wir von der Südinsel aus einmal quer durchs
              Land bis zur Hauptstadt Auckland auf der Nordinsel. Unterwegs
              wollen wir die einzigartige Landschaft Neuseelands entdecken,
              durchs Auenland wandern und unseren Mut beim Skydiving testen.
            </p>
          </div>
          <div className="text lower">
            <p>
              Ende November geht es weiter über den Pazifik nach Lima in Peru.
              Von dort aus reisen wir der Küste entlang nach Süden, vorbei am
              Titicacasee bis in den Gebirgsdschungel nach Cusco, wo wir uns ein
              weiteres Weltwunder, Machu Picchu, anschauen wollen.
            </p>
            <p>
              Kurz vor Weihnachten fliegen wir schließlich in die USA zu Annas
              Freundin Leyla, die sie aus ihrer Zeit in Nicaragua kennt. Bei
              deren Familie verbringen wir die Feiertage und lassen unsere Reise
              langsam ausklingen. Im Anschluss werden wir noch zwei Tage in
              Chicago verbringen, bevor wir unsere Reise beenden und uns auf den
              Weg zurück nach Deutschland machen.
            </p>
            <p>
              An dieser Stelle möchten wir uns noch herzlichst bei unserem
              persönlichen Social Media Beauftragten Erik bedanken, der uns
              diese Website nach unseren eigenen Wünschen erstellt hat.
            </p>
            {/* <p>&nbsp;</p> */}
            <p>
              Jetzt bleibt uns nur noch euch viel Spaß beim Lesen zu wünschen.
              Liebste Grüße von den Wandermaids,
            </p>
            <p className="signature">Anna &#38; Johannes</p>
          </div>
          <div className="right one">
            <img
              src={process.env.PUBLIC_URL + "/image/wandermaids vier.jpg"}
              alt="Wandermaids Johannes und Anna"
            />
          </div>
          <div className="right two">
            <img
              src={process.env.PUBLIC_URL + "/image/wandermaids fuenf.jpg"}
              alt="Wandermaids Johannes und Anna"
            />
          </div>
          <div className="right three">
            <img
              src={process.env.PUBLIC_URL + "/image/wandermaids sechs.jpg"}
              alt="Wandermaids Johannes und Anna"
            />
          </div>
        </div>
        <Footer />
      </div>
    );
  }
}

export default About;
