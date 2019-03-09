import React, { Component } from "react";
import { HashRouter as Router, Route, Switch } from "react-router-dom";
import { connect } from "react-redux";
import PropTypes from "prop-types";

import Home from "./components/home/home";
import Blog from "./components/blog/blog";
import CountryList from "./components/blog/countryList";
import Policy from "./components/footer/policy";
import Impressum from "./components/footer/impressum";
import Secret from "./components/secret/secret";
import SecretBlog from "./components/secret/secretblog";
import SecretCountryList from "./components/secret/secretcountrylist";

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
          <Switch>
            <Route
              exact
              path="/"
              render={props => <Home {...props} linkAppend="/" />}
            />
            {this.props.blogs.map((blog, index) => (
              <Route
                key={index}
                path={"/" + blog.title}
                render={props => <Blog {...props} blog={blog} linkAppend="/" />}
              />
            ))}
            {countries.map((country, index) => (
              <Route
                key={index}
                path={"/" + country}
                render={props => (
                  <CountryList {...props} country={country} linkAppend="/" />
                )}
              />
            ))}
            <Route path="/privacy policy" component={Policy} />
            <Route path="/impressum" component={Impressum} />
            {/* +++++++++++ "Admin" area +++++++++++++ */}
            <Route exact path="/secretpath/" component={Secret} />
            {this.props.blogs.map((blog, index) => (
              <Route
                key={index}
                path={"/secretpath/" + blog.title}
                render={props => (
                  <SecretBlog
                    {...props}
                    blogProp={blog}
                    linkAppend="/secretpath/"
                  />
                )}
              />
            ))}
            {countries.map((country, index) => (
              <Route
                key={index}
                path={"/secretpath/" + country}
                render={props => (
                  <SecretCountryList
                    {...props}
                    countryProp={country}
                    linkAppend="/secretpath/"
                  />
                )}
              />
            ))}
          </Switch>
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
