import React, { Component } from "react";
import { connect } from "react-redux";
import {
  getValues,
  updateForm,
  updateMain,
  updateImages
} from "../../actions/form";
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
    let output = this.props.blogs.blogs[this.props.blogs.blogs.length - 1];
    output = JSON.stringify(output);
    this.setState({ output: output });
  };
  deleteCode = e => {
    e.preventDefault();
    this.setState({ output: "" });
  };
  submitValues = e => {
    e.preventDefault();

    if (
      this.props.formValues.title === null ||
      this.props.formValues.title === "" ||
      this.props.formValues.title === " "
    ) {
      alert("Please add a title");
    } else {
      const data = {
        title: this.props.formValues.title,
        // one_sentence_description: this.props.formValues
        // .one_sentence_description,
        short_description: this.props.formValues.short_description,
        country: this.props.formValues.country,
        // header_image: this.props.formValues.header_image,
        // header_image_label: this.props.formValues.header_image_label,
        date: this.props.formValues.date,
        coordinates: [
          this.props.formValues.coordinatesLongitude,
          this.props.formValues.coordinatesAltitude
        ],
        main: this.props.formValues.main,
        images: this.props.formValues.images
      };
      this.props.getValues(data, this.props.blogs);
    }
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
  onChangeGalleryName = e => {
    let images = this.props.formValues.images;
    images[e.target.name].name = e.target.value;
    this.props.updateImages(images);
  };
  onChangeGalleryCom = e => {
    let images = this.props.formValues.images;
    images[e.target.name].comment = e.target.value;
    this.props.updateImages(images);
  };
  // onChangeImageLabel = e => {
  //   let main = this.props.formValues.main;
  //   main[e.target.name].image_label = e.target.value;
  //   main[e.target.name].valueLabel = e.target.value;

  //   this.props.updateMain(main);
  // };
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

  addYoutube = e => {
    e.preventDefault();
    let main = this.props.formValues.main;
    main.push({
      type: "youtube",
      content: "",
      value: ""
    });
    this.props.updateMain(main);
  };

  addImage = e => {
    e.preventDefault();
    let images = this.props.formValues.images;
    images.push({
      name: "",
      comment: ""
    });
    this.props.updateImages(images);
  };
  deleteImage = e => {
    e.preventDefault();
    let images = this.props.formValues.images;
    images.splice(-1, 1);
    this.props.updateImages(images);
  };
  render() {
    const gallery = this.props.formValues.images.map((x, index) => (
      <div key={index}>
        <label htmlFor={index}>Bild Name</label>
        <input
          name={index}
          component="input"
          type="text"
          onChange={this.onChangeGalleryName}
          value={x.name}
        />
        <label htmlFor={index}>&nbsp;Bild Kommentar</label>
        <input
          name={index}
          component="input"
          type="text"
          onChange={this.onChangeGalleryCom}
          value={x.comment}
        />
      </div>
    ));
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
      // if (x.type === "image") {
      //   return (
      //     <div key={index}>
      //       <label htmlFor={index}>Image</label>
      //       <input
      //         name={index}
      //         component="input"
      //         type="text"
      //         onChange={this.onChangeMain}
      //         value={x.value}
      //       />
      //       &nbsp; &nbsp;
      //       <label htmlFor={index}>Image Label</label>
      //       <input
      //         name={index}
      //         component="input"
      //         type="text"
      //         onChange={this.onChangeImageLabel}
      //         value={x.valueLabel}
      //       />
      //     </div>
      //   );
      // }
      if (x.type === "youtube") {
        return (
          <div key={index}>
            <label htmlFor={index}>Youtube (einfach Video-Link eingeben)</label>
            <input
              name={index}
              component="input"
              type="text"
              onChange={this.onChangeMain}
              value={x.value}
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
            <label htmlFor="title">Blog Title</label>
            <input
              name="title"
              component="input"
              type="text"
              onChange={this.onChange}
              value={this.props.formValues.title}
            />
          </div>
          {/* <div>
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
            </div> */}
          <div>
            <label htmlFor="short_description">
              Einleitungstext (wenige Sätze). Wird auch für Suchmaschienen
              verwendet.
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
            <label htmlFor="country">
              Land (kein Land auswählen geht auch)
            </label>
            <select
              name="country"
              onChange={this.onChange}
              value={this.props.formValues.country}
            >
              <option value=" "> </option>
              <option value="Suedostasien">Südostasien</option>
              <option value="Neuseeland">Neuseeland</option>
              <option value="Peru">Peru</option>
              <option value="USA">USA</option>
            </select>
          </div>
          {/* <div> */}
          {/* <p>
                Image must be in image folder for you to be able to see it.
                Before putting it in the folder make sure to resize it. You can
                do that on https://resizeimage.net/. Under "2. Crop your image",
                select "Fixed Aspect Ration" and choose 800 to 578. Then select
                from image and crop. Under "4. Resize your image", select "Keep
                Aspect Ratio". Then you can resize the image. The output file
                has to be a jpg file.
              </p> */}
          {/* <label htmlFor="header_image">Name of the main blog image</label>
              <input
                name="header_image"
                component="input"
                type="text"
                onChange={this.onChange}
                value={this.props.formValues.header_image}
              /> */}
          {/* </div> */}
          {/* <div>
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
            </div> */}
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
            <label htmlFor="coordinatesLongitude">Coordinates Longitude</label>
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
          <h3>Formatierung:</h3>
          <p>
            <b>Überschriften:</b> Überschrift-Text mit &lt;h3&gt; am Anfang und
            &lt;/h3&gt; nach Text.
          </p>
          <p>
            <b>Fettgedruckt:</b> Was fett erscheinen soll mit &lt;b&gt; am
            Anfang und &lt;/b&gt; am Ende einschließen.
          </p>
          <p>Je Absatz ein Paragraph-Element hinzufügen</p>
          {main}
          <p />

          <button onClick={this.deleteElement}>Letztes Element löschen</button>
          <button onClick={this.addParagraph}>Paragraph hinzufügen</button>
          <button onClick={this.addYoutube}>Youtube-Video</button>

          <p />
          <p />

          <h3>Bilder-Gallerie</h3>
          <p />
          {gallery}
          <p />
          <button onClick={this.addImage}>Bild hinzufügen</button>
          <button onClick={this.deleteImage}>Letztes Bild entfernen</button>

          <p />
          <h3>Output</h3>
          <button type="submit">Ergebnis auf Website anzeigen</button>
          <button onClick={this.createCode}>Code generieren</button>
          <button onClick={this.deleteCode}>Code verbergen</button>
          <p> &#123;"blogs":{this.state.output} &#125;</p>
          <p />
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
  { getValues, updateForm, updateMain, updateImages }
)(Form);
