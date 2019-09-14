import React, { Component } from "react";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import { connect } from "react-redux";
import PropTypes from "prop-types";

import Home from "./components/home/home";
import Blog from "./components/blog/blog";
import CountryList from "./components/blog/countryList";
import About from "./components/about/about";
import Gallery from "./components/gallery/gallery";
import Policy from "./components/footer/policy";
import Impressum from "./components/footer/impressum";
import Secret from "./components/secret/secret";
import SecretBlog from "./components/secret/secretblog";
import SecretGallery from "./components/secret/secretgallery";
import SecretCountryList from "./components/secret/secretcountrylist";
import SecretAbout from "./components/secret/secretabout";

import "./components/config/animate.min.css";
import "./app.scss";

class App extends Component {
  static propTypes = {
    blogs: PropTypes.array.isRequired
  };

  render() {
    // // get array of countries
    // let countries = this.props.blogs.map(a => a.country);
    // // remove double occurences
    // countries = [...new Set(countries)];
    // // remove empty entries
    // countries = countries.filter(el => {
    //   return el !== null && el !== "" && el !== " ";
    // });
    const countries = ["Suedostasien", "Peru", "Neuseeland", "USA"];

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
            <Route
              path={"/galerie"}
              render={props => (
                <Gallery {...props} blogs={this.props.blogs} linkAppend="/" />
              )}
            />
            <Route
              path={"/ueber uns"}
              render={() => <About linkAppend="/" />}
            />
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
            <Route
              path={"/secretpath/galerie"}
              render={props => (
                <SecretGallery
                  {...props}
                  blogs={this.props.blogs}
                  linkAppend="/secretpath/"
                />
              )}
            />
            <Route
              path={"/secretpath/ueber uns"}
              render={props => (
                <SecretAbout {...props} linkAppend="/secretpath/" />
              )}
            />
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
