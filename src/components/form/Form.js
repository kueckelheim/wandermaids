import React, { Component } from "react";
import { connect } from "react-redux";
import { getValues, updateForm, updateMain } from "../../actions/form";
import PropTypes from "prop-types";
import "./form.scss";

class Form extends Component {
  static propTypes = {
    getValues: PropTypes.func.isRequired
  };

  constructor(props) {
    super(props);
    this.state = {
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

    if(this.props.formValues.title === null || this.props.formValues.title === "" || this.props.formValues.title === " "){
      alert("Please add a title")
    }else{

    const data = {
      title: this.props.formValues.title,
      one_sentence_description: this.props.formValues.one_sentence_description,
      short_description: this.props.formValues.short_description,
      country: this.props.formValues.country,
      header_image: this.props.formValues.header_image,
      header_image_label: this.props.formValues.header_image_label,
      date: this.props.formValues.date,
      coordinates: [
        this.props.formValues.coordinatesLongitude,
        this.props.formValues.coordinatesAltitude
      ],
      main: this.props.formValues.main
    };
    this.props.getValues(data, this.props.blogs);}
  };
  onChange = e => {
    this.props.updateForm(e.target.value, e.target.name);
  };

  onChangeMain = e => {
    let main = this.props.formValues.main;
    main[e.target.name].content = e.target.value;
    main[e.target.name].value = e.target.value;
    this.props.updateMain(main);
  };
  onChangeImageLabel = e => {
    let main = this.props.formValues.main;
    main[e.target.name].image_label = e.target.value;
    main[e.target.name].valueLabel = e.target.value;

    this.props.updateMain(main);
  };
  addParagraph = e => {
    e.preventDefault();
    let main = this.props.formValues.main;
    main.push({
      type: "paragraph",
      content: "",
      value: ""
    });
    this.props.updateMain(main);
  };
  deleteElement = e => {
    e.preventDefault();
    let main = this.props.formValues.main;
    main.splice(-1, 1);
    this.props.updateMain(main);
  };
  addImage = e => {
    e.preventDefault();
    let main = this.props.formValues.main;
    main.push({
      type: "image",
      content: "",
      image_label: "",
      valueLabel: "",
      value: ""
    });
    this.props.updateMain(main);
  };
  render() {
    const main = this.props.formValues.main.map((x, index) => {
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
              value={x.value}
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
              value={x.value}
            />
            &nbsp; &nbsp;
            <label htmlFor={index}>Image Label</label>
            <input
              name={index}
              component="input"
              type="text"
              onChange={this.onChangeImageLabel}
              value={x.valueLabel}
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
                value={this.props.formValues.title}
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
                value={this.props.formValues.one_sentence_description}
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
                value={this.props.formValues.short_description}
              />
            </div>
            <div>
              <label htmlFor="country">Country (or none)</label>
              <select
                name="country"
                onChange={this.onChange}
                value={this.props.formValues.country}
              >
                <option value=" "> </option>
                <option value="Thailand">Thailand</option>
                <option value="Philippines">Philippines</option>
                <option value="Vietnam">Vietnam</option>
                <option value="Cambodia">Cambodia</option>
                <option value="Laos">Laos</option>
              </select>
            </div>
            <div>
              <label htmlFor="header_image">Name of the main blog image</label>
              <input
                name="header_image"
                component="input"
                type="text"
                onChange={this.onChange}
                value={this.props.formValues.header_image}
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
                value={this.props.formValues.header_image_label}
              />
            </div>
            <div>
              <label htmlFor="date">Date (: January 28th, 2019)</label>
              <input
                name="date"
                component="input"
                type="text"
                onChange={this.onChange}
                value={this.props.formValues.date}
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
                value={this.props.formValues.coordinatesLongitude}
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
                value={this.props.formValues.coordinatesAltitude}
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
  blogs: state.blogs,
  formValues: state.form
});

export default connect(
  mapStateToProps,
  { getValues, updateForm, updateMain }
)(Form);
