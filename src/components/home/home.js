import React, { Component } from "react";
import { connect } from "react-redux";
import PropTypes from "prop-types";

class Home extends Component {
  static propTypes = {
    blogs: PropTypes.array.isRequired
  };

  render() {
    return (
      <div>
        {this.props.blogs.map(blog => (
          <div key={blog.title}>
            <p>{blog.title}</p>
            <p>{blog.text}</p>
          </div>
        ))}
      </div>
    );
  }
}

const mapStateToProps = state => ({
  blogs: state.blogs.blogs
});

// connect connectst the home component to the store
// mapStateToProps allows us to acces the data in this.props.leads
export default connect(mapStateToProps)(Home);
