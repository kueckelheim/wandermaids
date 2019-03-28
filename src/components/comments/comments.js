import React, { Component } from "react";
import axios from "axios";
import "./comments.scss";
import { HashLink as Link } from "react-router-hash-link";

class Comments extends Component {
  constructor(props) {
    super(props);
    this.state = {
      comments: [],
      comments_loaded: false,
      name: "",
      email: "",
      message: "",
      lastName: "",
      checkbox: false
    };
  }

  onChange = e => this.setState({ [e.target.name]: e.target.value });
  onCheckbox = () => {
    if (!this.state.checkbox) {
      this.setState({ checkbox: true });
    } else {
      this.setState({ checkbox: false });
    }
  };

  componentDidMount() {
    this.getComments();
  }

  getComments() {
    axios
      .get("https://ek578.pythonanywhere.com/api/getcomments")
      .then(response => {
        this.setState({ comments: response.data, comments_loaded: true });
      })
      .catch();
  }

  onSubmit = e => {
    e.preventDefault();
    const { name, email, message } = this.state;
    const comment = {
      name: name,
      email: email,
      message: message,
      title: this.props.title
    };
    if (this.state.lastName === "") {
      if (this.state.checkbox) {
        this.postComment(comment);
      } else {
        alert(
          "You need to agree to our terms and conditions before being able to post a comment."
        );
      }
    }
  };

  postComment(comment) {
    axios
      .post("https://ek578.pythonanywhere.com/api/postcomment/", comment)
      .then(res => {
        alert("Thank you for your comment. It will be shown upon approval.");
        this.setState({
          name: "",
          email: "",
          message: ""
        });
      })
      .catch(err => {
        if (err.response.data.name) {
          alert(`Name: ${err.response.data.name.join()}`);
        } else {
          if (err.response.data.email) {
            alert(`Email: ${err.response.data.email.join()}`);
          } else {
            if (err.response.data.message) {
              alert(`Email: ${err.response.data.message.join()}`);
            } else {
              alert("Sorry. Something went wrong.");
            }
          }
        }
      });
  }

  render() {
    let comments;

    if (this.state.comments_loaded) {
      comments = this.state.comments.map((x, index) => {
        if (x.title === this.props.title) {
          const date = x.created_at.substring(0, 10);
          return (
            <div key={index} className="comment">
              <p>
                <span className="name">
                  <b>{x.name}</b>
                </span>
                <span className="date">{date}</span>
              </p>
              <div className="message">{x.message}</div>
            </div>
          );
        } else return null;
      });
    }
    const { name, email, message } = this.state;

    return (
      <div className="Comments">
        <p />
        <hr />
        <h3>Comments</h3>
        <div className="commentsWrapper">{comments}</div>
        <p />
        <div>
          <h3>Leave a Comment</h3>
          <form onSubmit={this.onSubmit}>
            <ul className="formStyle">
              <li>
                <label>
                  Name<span className="required">*</span>
                </label>
                <input
                  className="field-long"
                  type="text"
                  name="name"
                  onChange={this.onChange}
                  value={name}
                />
              </li>
              <input
                type="text"
                name="lastName"
                className="lastName"
                onChange={this.onChange}
              />
              <li>
                <label>
                  Email<span className="required">*</span>
                </label>
                <input
                  className="field-long"
                  type="email"
                  name="email"
                  onChange={this.onChange}
                  value={email}
                />
              </li>
              <li>
                <label>
                  Message<span className="required">*</span>
                </label>
                <textarea
                  className="field-long field-textarea"
                  type="text"
                  name="message"
                  onChange={this.onChange}
                  value={message}
                />
              </li>
              <li>
                <input
                  type="checkbox"
                  name="conditions"
                  onClick={this.onCheckbox}
                />{" "}
                I agree to our{" "}
                <Link to="/privacy policy#comments" className="link">
                  terms and conditions
                </Link>
                .
              </li>
              <li>
                <button type="submit" className="btn btn-primary">
                  Submit
                </button>
              </li>
            </ul>
          </form>
        </div>
      </div>
    );
  }
}

export default Comments;
