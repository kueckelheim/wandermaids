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
        <div class="grid">
          <div class="left one">
            <img
              src={process.env.PUBLIC_URL + "/image/wandermaids eins.jpg"}
              alt="Wandermaids Johannes und Anna"
            />
          </div>
          <div class="left two">
            <img
              src={process.env.PUBLIC_URL + "/image/wandermaids zwei.jpg"}
              alt="Wandermaids Johannes und Anna"
            />
          </div>
          <div class="left three">
            <img
              src={process.env.PUBLIC_URL + "/image/wandermaids drei.jpg"}
              alt="Wandermaids Johannes und Anna"
            />
          </div>
          <div class="text upper">
            <h1>Wer sind die Wandermaids?</h1>
            <p>
              Lorem ipsum dolor, sit amet consectetur adipisicing elit. Quis,
              consequatur placeat. Omnis ullam natus deleniti cumque tempora
              voluptate ex commodi, nulla rerum, ut soluta libero fugiat quos
              quidem repudiandae impedit.
            </p>
            <p>
              Lorem ipsum dolor, sit amet consectetur adipisicing elit. Quis,
              consequatur placeat. Omnis ullam natus deleniti cumque tempora
              voluptate ex commodi, nulla rerum, ut soluta libero fugiat quos
              quidem repudiandae impedit.
            </p>
          </div>
          <div class="text lower">
            <h1>Wer sind die Wandermaids?</h1>
            <p>
              Lorem ipsum dolor, sit amet consectetur adipisicing elit. Quis,
              consequatur placeat. Omnis ullam natus deleniti cumque tempora
              voluptate ex commodi, nulla rerum, ut soluta libero fugiat quos
              quidem repudiandae impedit.
            </p>
            <p>
              Lorem ipsum dolor, sit amet consectetur adipisicing elit. Quis,
              consequatur placeat. Omnis ullam natus deleniti cumque tempora
              voluptate ex commodi, nulla rerum, ut soluta libero fugiat quos
              quidem repudiandae impedit.
            </p>
          </div>
          <div class="right one">
            <img
              src={process.env.PUBLIC_URL + "/image/wandermaids vier.jpg"}
              alt="Wandermaids Johannes und Anna"
            />
          </div>
          <div class="right two">
            <img
              src={process.env.PUBLIC_URL + "/image/wandermaids fuenf.jpg"}
              alt="Wandermaids Johannes und Anna"
            />
          </div>
          <div class="right three">
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
