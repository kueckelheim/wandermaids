import React, { Component } from "react";
import { connect } from "react-redux";
import PropTypes from "prop-types";
import { Link } from "react-router-dom";
import "./home.scss";
import { Helmet } from "react-helmet";

import Header from "../header/header";
import Footer from "../footer/footer";
import Map from "./map/map.js";

class Home extends Component {
  static propTypes = {
    blogs: PropTypes.array.isRequired
  };

  constructor(props) {
    super(props);
    this.state = {
      center: [112.5, 14.75],
      zoom: 0.6,
      country: ""
    };
  }

  // not needed anymore since travel is over
  componentWillMount() {
    const now = new Date().getTime();
    const asia = new Date("October 2, 2019 10:00:00").getTime();
    let distanceAsia = asia - now;
    distanceAsia = distanceAsia / (1000 * 60 * 60 * 24);
    if (distanceAsia >= 0) {
      const days = Math.floor(
        (distanceAsia * (1000 * 60 * 60 * 24)) / (1000 * 60 * 60 * 24)
      );
      const hours = Math.floor(
        ((distanceAsia * (1000 * 60 * 60 * 24)) % (1000 * 60 * 60 * 24)) /
          (1000 * 60 * 60)
      );
      const country = "Start in " + days + " Tagen und " + hours + " Stunden.";
      this.setState({ country: country });
    }
    if (distanceAsia < 0 && distanceAsia >= -26) {
      this.setState({ country: "Zurzeit sind wir in Südostasien" });
    }
    if (distanceAsia < -26 && distanceAsia >= -57) {
      this.setState({ country: "Zurzeit sind wir in Neuseeland" });
    }
    if (distanceAsia < -57 && distanceAsia >= -79) {
      this.setState({ country: "Zurzeit sind wir in Peru" });
    }
    if (distanceAsia < -79 && distanceAsia >= -88) {
      this.setState({ country: "Zurzeit sind wir in den USA" });
    }
  }

  onLink = () => {
    window.scrollTo(0, 0);
  };

  render() {
    let canonical = this.props.linkAppend === "/";
    if (!canonical) {
      canonical = (
        <link rel="canonical" href={"https://www.wandermaidsontour.de/"} />
      );
    } else {
      canonical = null;
    }

    return (
      <div className="Home">
        <Helmet>
          <title>wandermaidsontour</title>
          <meta name="description" content="In 91 Tagen um die Welt" />
          {canonical}
        </Helmet>
        <Header linkAppend={this.props.linkAppend} />
        <Map linkAppend={this.props.linkAppend} />
        <main>
          <div className="filler">{this.state.country}</div>

          {/* Little profile about us */}
          <div className="profileWrapper">
            <div className="container">
              <div className="description">
                <h1 className="headline">
                  In 91 Tagen um die Welt. Unsere Route führt uns durch
                  Südostasien, Neuseeland und Peru und endet bei Annas Freundin
                  Leyla in Indiana, bei der wir Weihnachten verbringen werden.
                </h1>
                <span className="hashTag">#wandermaidsontour </span>
                <span className="hashTag">#in91TagenumdieWelt</span>
                <p>Hallo, wir sind die Wandermaids!</p>
                <p>
                  Wie die meisten von euch sicher wissen, haben wir beide im
                  Frühjahr unser Studium beendet. Bevor Anna im Februar ihr
                  Referendariat startet und es Johannes für sechs Monate nach
                  Stockholm verschlägt, nehmen wir uns eine dreimonatige
                  Auszeit.
                </p>
                <p>
                  Unsere Route führt uns durch Südostasien, Neuseeland und Peru
                  und endet bei Annas Freundin Leyla in Indiana, bei der wir
                  Weihnachten verbringen werden.
                </p>
                <p>
                  Wir freuen uns, dass ihr unsere Reise verfolgt und versuchen
                  natürlich, euch regelmäßig auf dem Laufenden zu halten.
                </p>
                <p>Liebste Grüße von den Wandermaids,</p>
                <p className="signature">Anna &#38; Johannes</p>
              </div>
              <div className="image">
                <img
                  src={process.env.PUBLIC_URL + "/image/Johannes und Anna.jpg"}
                  alt="Wandermaids Johannes und Anna"
                />
              </div>
            </div>
          </div>
          {/* Blog list */}
          <div className="container">
            {this.props.blogs.map(blog => (
              <div className="blogEntry" key={blog.title}>
                <div>
                  <Link
                    to={this.props.linkAppend + blog.title}
                    className="link"
                    onClick={this.onLink}
                  >
                    <h2>{blog.title}</h2>
                  </Link>
                  <div className="country">{blog.country}</div>
                  <p>{blog.short_description}</p>
                  <div className="date">{blog.date}</div>
                </div>
                <hr />
              </div>
            ))}
          </div>
        </main>
        <Footer />
      </div>
    );
  }
}

const mapStateToProps = state => ({
  blogs: state.blogs.blogs
});

export default connect(mapStateToProps)(Home);
