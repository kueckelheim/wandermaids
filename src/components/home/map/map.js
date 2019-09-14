import React, { Component } from "react";
import "../home.scss";
import { Link } from "react-router-dom";

import { connect } from "react-redux";
import PropTypes from "prop-types";
import { changeClasses } from "../../../actions/form";

import {
  ComposableMap,
  ZoomableGroup,
  Geographies,
  Geography,
  // Annotation,
  Markers,
  Marker
} from "react-simple-maps";
import { Motion, spring } from "react-motion";

class Map extends Component {
  static propTypes = {
    blogs: PropTypes.array.isRequired,
    classes: PropTypes.array.isRequired
  };
  constructor(props) {
    super(props);
    this.state = {
      center: [28.5, 0],
      zoom: 0.103,
      days: "",
      hours: ""
    };
  }

  handleBlogClick = evt => {
    const names = this.props.blogs.map(blog => blog.title);
    const classes = this.props.blogs.map(blog => ({
      overlayClass: "mapOverlay",
      title: blog.title,
      markerColor: "black"
    }));
    classes[names.indexOf(evt.name)].overlayClass = "mapOverlay shown";
    classes[names.indexOf(evt.name)].markerColor = "#FF5722";
    this.props.changeClasses(classes);
  };
  render() {
    const markers = this.props.blogs.map(blog => ({
      markerOffset: -35,
      name: blog.title,
      coordinates: blog.coordinates
    }));
    const classes = this.props.classes;

    return (
      <div className="mapWrapper">
        <div className="map">
          <Motion
            defaultStyle={{
              zoom: 0.103
            }}
            style={{
              zoom: spring(this.state.zoom, { stiffness: 110, damping: 20 })
            }}
          >
            {({ zoom }) => (
              <ComposableMap
                projectionConfig={{
                  scale: 2005,
                  rotation: this.state.rotation
                }}
                width={820}
                height={339}
                className="mapFrame"
              >
                <ZoomableGroup
                  center={this.state.center}
                  zoom={zoom}
                  disablePanning
                >
                  {/* general map of all countries */}
                  <Geographies geography={require("./maps/map.json")}>
                    {(geographies, projection) =>
                      geographies.map(
                        (geography, i) =>
                          geography.id !== "ATA" && (
                            <Geography
                              key={i}
                              geography={geography}
                              projection={projection}
                              style={{
                                default: {
                                  fill: "#e6e6e6",
                                  stroke: "#607D8B",
                                  strokeWidth: 0.45,
                                  outline: "none"
                                },
                                hover: {
                                  fill: "#e6e6e6",
                                  stroke: "#607D8B",
                                  strokeWidth: 0.45,
                                  outline: "none"
                                },
                                pressed: {
                                  fill: "#e6e6e6",
                                  stroke: "#607D8B",
                                  strokeWidth: 0.45,
                                  outline: "none"
                                }
                              }}
                            />
                          )
                      )
                    }
                  </Geographies>
                  {/* Cambodia shapes */}
                  <Geographies geography={require("./maps/cambodia.json")}>
                    {(geographies, projection) =>
                      geographies.map(
                        (geography, i) =>
                          geography.id !== "ATA" && (
                            <Geography
                              key={i}
                              geography={geography}
                              projection={projection}
                              style={{
                                default: {
                                  fill: "#f3d8c5",
                                  stroke: "#607D8B",
                                  strokeWidth: 0.65,
                                  outline: "none"
                                },
                                hover: {
                                  fill: "#f3d8c5",
                                  stroke: "#607D8B",
                                  strokeWidth: 0.65,
                                  outline: "none"
                                },
                                pressed: {
                                  fill: "#f3d8c5",
                                  stroke: "#607D8B",
                                  strokeWidth: 0.65,
                                  outline: "none"
                                }
                              }}
                            />
                          )
                      )
                    }
                  </Geographies>
                  {/* Laos shapes */}
                  <Geographies geography={require("./maps/laos.json")}>
                    {(geographies, projection) =>
                      geographies.map(
                        (geography, i) =>
                          geography.id !== "ATA" && (
                            <Geography
                              key={i}
                              geography={geography}
                              projection={projection}
                              style={{
                                default: {
                                  fill: "#bbd8b9",
                                  stroke: "#607D8B",
                                  strokeWidth: 0.65,
                                  outline: "none"
                                },
                                hover: {
                                  fill: "#bbd8b9",
                                  stroke: "#607D8B",
                                  strokeWidth: 0.65,
                                  outline: "none"
                                },
                                pressed: {
                                  fill: "#bbd8b9",
                                  stroke: "#607D8B",
                                  strokeWidth: 0.65,
                                  outline: "none"
                                }
                              }}
                            />
                          )
                      )
                    }
                  </Geographies>
                  {/* Vietnam shapes */}
                  <Geographies geography={require("./maps/vietnam.json")}>
                    {(geographies, projection) =>
                      geographies.map(
                        (geography, i) =>
                          geography.id !== "ATA" && (
                            <Geography
                              key={i}
                              geography={geography}
                              projection={projection}
                              style={{
                                default: {
                                  fill: "#e19b93",
                                  stroke: "#607D8B",
                                  strokeWidth: 0.65,
                                  outline: "none"
                                },
                                hover: {
                                  fill: "#e19b93",
                                  stroke: "#607D8B",
                                  strokeWidth: 0.65,
                                  outline: "none"
                                },
                                pressed: {
                                  fill: "#e19b93",
                                  stroke: "#607D8B",
                                  strokeWidth: 0.65,
                                  outline: "none"
                                }
                              }}
                            />
                          )
                      )
                    }
                  </Geographies>
                  {/* New Zealand shapes */}
                  <Geographies geography={require("./maps/new_zealand.json")}>
                    {(geographies, projection) =>
                      geographies.map(
                        (geography, i) =>
                          geography.id !== "ATA" && (
                            <Geography
                              key={i}
                              geography={geography}
                              projection={projection}
                              style={{
                                default: {
                                  fill: "#c3abd4",
                                  stroke: "#607D8B",
                                  strokeWidth: 0.65,
                                  outline: "none"
                                },
                                hover: {
                                  fill: "#c3abd4",
                                  stroke: "#607D8B",
                                  strokeWidth: 0.65,
                                  outline: "none"
                                },
                                pressed: {
                                  fill: "#c3abd4",
                                  stroke: "#607D8B",
                                  strokeWidth: 0.65,
                                  outline: "none"
                                }
                              }}
                            />
                          )
                      )
                    }
                  </Geographies>
                  {/* Peru shapes */}
                  <Geographies geography={require("./maps/peru.json")}>
                    {(geographies, projection) =>
                      geographies.map(
                        (geography, i) =>
                          geography.id !== "ATA" && (
                            <Geography
                              key={i}
                              geography={geography}
                              projection={projection}
                              style={{
                                default: {
                                  fill: "#f7eb89",
                                  stroke: "#607D8B",
                                  strokeWidth: 0.65,
                                  outline: "none"
                                },
                                hover: {
                                  fill: "#f7eb89",
                                  stroke: "#607D8B",
                                  strokeWidth: 0.65,
                                  outline: "none"
                                },
                                pressed: {
                                  fill: "#f7eb89",
                                  stroke: "#607D8B",
                                  strokeWidth: 0.65,
                                  outline: "none"
                                }
                              }}
                            />
                          )
                      )
                    }
                  </Geographies>
                  {/* USA shapes */}
                  <Geographies geography={require("./maps/usa.json")}>
                    {(geographies, projection) =>
                      geographies.map(
                        (geography, i) =>
                          geography.id !== "ATA" && (
                            <Geography
                              key={i}
                              geography={geography}
                              projection={projection}
                              style={{
                                default: {
                                  fill: "#e6ccb3",
                                  stroke: "#607D8B",
                                  strokeWidth: 0.65,
                                  outline: "none"
                                },
                                hover: {
                                  fill: "#e6ccb3",
                                  stroke: "#607D8B",
                                  strokeWidth: 0.65,
                                  outline: "none"
                                },
                                pressed: {
                                  fill: "#e6ccb3",
                                  stroke: "#607D8B",
                                  strokeWidth: 0.65,
                                  outline: "none"
                                }
                              }}
                            />
                          )
                      )
                    }
                  </Geographies>
                  {/* Labeling Cambodia */}
                  {/* <Annotation
                    dx={-20}
                    dy={24}
                    subject={[103.8684384, 11.7996671]}
                    strokeWidth={2}
                    stroke="#607D8B"
                  >
                    <text>{"Cambodia"}</text>
                  </Annotation>
                  Labeling Laos */}
                  {/* <Annotation
                    dx={-30}
                    dy={-4}
                    subject={[100.8684384, 20.7996671]}
                    strokeWidth={10}
                    stroke="#607D8B"
                  >
                    <text>{"Laos"}</text>
                  </Annotation>
                  Labeling Vietnam */}
                  {/* <Annotation
                    dx={30}
                    dy={-4}
                    subject={[108.2684384, 15.7996671]}
                    strokeWidth={1}
                    stroke="#607D8B"
                  >
                    <text>{"Vietnam"}</text>
                  </Annotation>
                  Labeling the Philippines */}
                  {/* <Annotation
                    dx={60}
                    dy={-18}
                    subject={[127.2684384, 8.7996671]}
                    strokeWidth={1}
                    stroke="#607D8B"
                  >
                    <text>{"Philippines"}</text>
                  </Annotation> */}
                  {/*   Add clickable Markers for each blog entry with coordinates */}
                  <Markers>
                    {markers.map((marker, i) => (
                      <Marker
                        key={i}
                        marker={marker}
                        style={{
                          default: {
                            stroke: this.props.classes[i].markerColor
                          },
                          hover: { stroke: "#FF5722" },
                          pressed: { stroke: "#FF5722" }
                        }}
                        // When maker is clicked, show overlay
                        onClick={this.handleBlogClick}
                      >
                        <g transform="translate(-6, -12)" className="marker">
                          <path
                            fill="white"
                            strokeWidth="1"
                            strokeLinecap="square"
                            strokeMiterlimit="5"
                            strokeLinejoin="miter"
                            d="M10,4.5c0,2.45-4,6.5-4,6.5S2,6.95,2,4.5c0-2.55,2.05-4,4-4S10,1.95,10,4.5z"
                          />
                          <circle
                            fill="white"
                            strokeWidth="1"
                            strokeLinecap="square"
                            strokeMiterlimit="5"
                            strokeLinejoin="miter"
                            cx="6"
                            cy="4.5"
                            r="1.5"
                          />
                        </g>
                      </Marker>
                    ))}
                  </Markers>
                </ZoomableGroup>
              </ComposableMap>
            )}
          </Motion>
          {/* overlay for each blog entry */}
          {this.props.blogs.map((blog, i) => (
            <div className={classes[i].overlayClass} key={i}>
              <div className="overlayWrapper">
                {/* <img
                  src={
                    process.env.PUBLIC_URL +
                    "/image/" +
                    blog.header_image +
                    ".jpg"
                  }
                  alt={blog.header_image_label}
                  className="overlayImage"
                /> */}
                <div className="innerBox">
                  <h2 className="overlayTitle">{blog.title}</h2>
                  <div className="date">{blog.date}</div>

                  <Link
                    to={this.props.linkAppend + blog.title}
                    className="link"
                    onClick={this.onLink}
                  >
                    <div className="linkWrapper">Zum Artikel...</div>
                  </Link>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    );
  }
}

const mapStateToProps = state => ({
  blogs: state.blogs.blogs,
  classes: state.blogs.classes
});

export default connect(
  mapStateToProps,
  { changeClasses }
)(Map);
