import React, { Component } from "react";
import { HashRouter as Router, Route, Switch } from "react-router-dom";
import { connect } from "react-redux";
import PropTypes from "prop-types";

import Header from "./components/header/header";
import Home from "./components/home/home";
import Blog from "./components/blog/blog";
import CountryList from "./components/blog/countryList";
import Footer from "./components/footer/footer";
import Policy from "./components/footer/policy";
import Impressum from "./components/footer/impressum";

import "./components/config/animate.min.css";
import "./app.scss";

class App extends Component {
  static propTypes = {
    blogs: PropTypes.array.isRequired
  };

  render() {
    // get array of countries
    let countries = this.props.blogs.map(a => a.country);
    // remove double occurences
    countries = [...new Set(countries)];

    return (
      <Router>
        <React.Fragment>
          <Header />
          <Switch>
            <Route exact path="/" component={Home} />
            {this.props.blogs.map((blog, index) => (
              <Route
                key={index}
                path={"/" + blog.title}
                render={props => <Blog {...props} blog={blog} />}
              />
            ))}
            {countries.map((country, index) => (
              <Route
                key={index}
                path={"/" + country}
                render={props => <CountryList {...props} country={country} />}
              />
            ))}
            <Route exact path="/privacy policy" component={Policy} />
            <Route exact path="/impressum" component={Impressum} />
          </Switch>
          <Footer />
        </React.Fragment>
      </Router>
    );
  }
}

const mapStateToProps = state => ({
  blogs: state.blogs.blogs
});

// connect connectst the home component to the store
// mapStateToProps allows us to acces the data in this.props.leads
export default connect(mapStateToProps)(App);
