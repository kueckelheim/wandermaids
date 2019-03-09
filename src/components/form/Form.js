import React, { Component } from "react";
import { connect } from "react-redux";
import { getValues } from "../../actions/form";
import PropTypes from "prop-types";
import "./form.scss";
class Form extends Component {
  static propTypes = {
    getValues: PropTypes.func.isRequired
  };

  constructor(props) {
    super(props);
    this.state = {
      title: "",
      one_sentence_description: "",
      short_description: "",
      country: "",
      header_image: "",
      header_image_label: "",
      date: "",
      coordinatesLongitude: null,
      coordinatesAltitude: null,
      main: [
        {
          type: "paragraph",
          content: ""
        }
      ],
      output: ""
    };
  }
  createCode = e => {
    e.preventDefault();
    const output = JSON.stringify(this.props.blogs.blogs);
    this.setState({ output: output });
  };
  deleteCode = e => {
    e.preventDefault();
    this.setState({ output: "" });
  };
  submitValues = e => {
    e.preventDefault();
    const data = {
      title: this.state.title,
      one_sentence_description: this.state.one_sentence_description,
      short_description: this.state.short_description,
      country: this.state.country,
      header_image: this.state.header_image,
      header_image_label: this.state.header_image_label,
      date: this.state.date,
      coordinates: [
        this.state.coordinatesLongitude,
        this.state.coordinatesAltitude
      ],
      main: this.state.main
    };
    this.props.getValues(data);
  };
  onChange = e => this.setState({ [e.target.name]: e.target.value });

  onChangeMain = e => {
    let main = this.state.main;
    main[e.target.name].content = e.target.value;
    this.setState({ main: main });
  };
  onChangeImageLabel = e => {
    let main = this.state.main;
    main[e.target.name].image_label = e.target.value;
    this.setState({ main: main });
  };
  addParagraph = e => {
    e.preventDefault();
    let main = this.state.main;
    main.push({
      type: "paragraph",
      content: ""
    });
    this.setState({ main: main });
  };
  deleteElement = e => {
    e.preventDefault();
    let main = this.state.main;
    main.splice(-1, 1);
    this.setState({ main: main });
  };
  addImage = e => {
    e.preventDefault();
    let main = this.state.main;
    main.push({
      type: "image",
      content: "",
      image_label: ""
    });
    this.setState({ main: main });
  };
  render() {
    const main = this.state.main.map((x, index) => {
      if (x.type === "paragraph") {
        return (
          <div key={index}>
            <label htmlFor={index}>Paragraph</label>
            <textarea
              name={index}
              component="input"
              type="text"
              onChange={this.onChangeMain}
              cols="60"
              rows="7"
            />
          </div>
        );
      }
      if (x.type === "image") {
        return (
          <div key={index}>
            <label htmlFor={index}>Image</label>
            <input
              name={index}
              component="input"
              type="text"
              onChange={this.onChangeMain}
            />
            &nbsp; &nbsp;
            <label htmlFor={index}>Image Label</label>
            <input
              name={index}
              component="input"
              type="text"
              onChange={this.onChangeImageLabel}
            />
          </div>
        );
      } else {
        return null;
      }
    });
    return (
      <form onSubmit={this.submitValues}>
        <div className="gridWrapper">
          <div>
            <div>
              <label htmlFor="title">Blog Title</label>
              <input
                name="title"
                component="input"
                type="text"
                onChange={this.onChange}
              />
            </div>
            <div>
              <label htmlFor="one_sentence_description">
                Describe in a few words
              </label>
              <textarea
                name="one_sentence_description"
                component="textarea"
                type="text"
                onChange={this.onChange}
                rows="5"
                cols="30"
              />
            </div>
            <div>
              <label htmlFor="short_description">
                Short Introduction (few sentences)
              </label>
              <textarea
                name="short_description"
                component="input"
                type="text"
                onChange={this.onChange}
                rows="5"
                cols="30"
              />
            </div>
            <div>
              <label htmlFor="country">
                Name of the country (first letter uppercase)
              </label>
              <input
                name="country"
                component="input"
                type="text"
                onChange={this.onChange}
              />
            </div>
            <div>
              <label htmlFor="header_image">Name of the main blog image</label>
              <input
                name="header_image"
                component="input"
                type="text"
                onChange={this.onChange}
              />
            </div>
            <div>
              <label htmlFor="header_image_label">
                Label of the main blog image
              </label>
              <input
                name="header_image_label"
                component="input"
                type="text"
                onChange={this.onChange}
              />
            </div>
            <div>
              <label htmlFor="date">Date (: January 28th, 2019)</label>
              <input
                name="date"
                component="input"
                type="text"
                onChange={this.onChange}
              />
            </div>
            <div>
              <label htmlFor="coordinatesLongitude">
                Coordinates Longitude
              </label>
              <input
                name="coordinatesLongitude"
                component="input"
                type="number"
                step="any"
                onChange={this.onChange}
              />
            </div>
            <div>
              <label htmlFor="coordinatesAltitude">Coordinates Latitude</label>
              <input
                name="coordinatesAltitude"
                component="input"
                type="number"
                step="any"
                onChange={this.onChange}
              />
            </div>
          </div>
          <div>
            {main}
            <p />

            <button onClick={this.deleteElement}>Delete Last Element</button>
            <button onClick={this.addParagraph}>Add paragraph</button>
            <button onClick={this.addImage}>Add image</button>

            <p />
            <hr />
            <p />

            <button type="submit">Have a look</button>
            <button onClick={this.createCode}>Create code output</button>
            <button onClick={this.deleteCode}>Delete code output</button>
            <p> &#123;"blogs":{this.state.output} &#125;</p>
            <p />
          </div>
        </div>
      </form>
    );
  }
}
const mapStateToProps = state => ({
  blogs: state.blogs
});

export default connect(
  mapStateToProps,
  { getValues }
)(Form);
