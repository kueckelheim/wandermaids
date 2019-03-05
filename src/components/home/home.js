import React, { Component } from "react";
import { connect } from "react-redux";
import PropTypes from "prop-types";
import { Link } from "react-router-dom";
import "./home.scss";

import {
  ComposableMap,
  ZoomableGroup,
  Geographies,
  Geography,
  Annotation,
  Markers,
  Marker
} from "react-simple-maps";
import { Motion, spring } from "react-motion";

class Home extends Component {
  static propTypes = {
    blogs: PropTypes.array.isRequired
  };

  constructor(props) {
    super(props);
    this.state = {
      center: [112.5, 14.75],
      zoom: 0.7,
      countries: [
        { name: "Thailand", coordinates: [98.4684384, 12.7996671] },
        { name: "Philippines", coordinates: [122.095, 12.26552] },
        { name: "Vietnam", coordinates: [106.597532, 15.911419] },
        { name: "Cambodia", coordinates: [105.393584, 12.686335] },
        { name: "Laos", coordinates: [103.575512, 17.465869] }
      ]
    };
  }

  handleHover = () => {
    this.setState({
      zoom: 0.72
    });
  };
  handleOut = () => {
    this.setState({
      zoom: 0.7
    });
  };

  render() {
    const markers = this.props.blogs.map(blog => ({
      markerOffset: -35,
      name: blog.title,
      coordinates: blog.coordinates
    }));
    console.log(markers);
    return (
      <div className="Home">
        <div className="mapWrapper">
          <div
            className="map"
            onMouseOver={this.handleHover}
            onMouseOut={this.handleOut}
          >
            <Motion
              defaultStyle={{
                zoom: 0.7
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
                  height={401}
                  className="mapFrame"
                >
                  <ZoomableGroup
                    center={this.state.center}
                    zoom={zoom}
                    disablePanning
                  >
                    <Geographies geography={require("../../maps/map.json")}>
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
                    <Geographies
                      geography={require("../../maps/thailand.json")}
                    >
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
                    <Geographies
                      geography={require("../../maps/cambodia.json")}
                    >
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
                    <Geographies geography={require("../../maps/laos.json")}>
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
                    <Geographies
                      geography={require("../../maps/philippines.json")}
                    >
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
                    <Geographies geography={require("../../maps/vietnam.json")}>
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
                    <Annotation
                      dx={-20}
                      dy={24}
                      subject={[99.4684384, 14.7996671]}
                      strokeWidth={1}
                      stroke="#607D8B"
                    >
                      <text>{"Thailand"}</text>
                    </Annotation>
                    <Annotation
                      dx={-20}
                      dy={24}
                      subject={[103.8684384, 11.7996671]}
                      strokeWidth={1}
                      stroke="#607D8B"
                    >
                      <text>{"Cambodia"}</text>
                    </Annotation>
                    <Annotation
                      dx={-30}
                      dy={-4}
                      subject={[100.8684384, 20.7996671]}
                      strokeWidth={1}
                      stroke="#607D8B"
                    >
                      <text>{"Laos"}</text>
                    </Annotation>
                    <Annotation
                      dx={30}
                      dy={-4}
                      subject={[108.2684384, 15.7996671]}
                      strokeWidth={1}
                      stroke="#607D8B"
                    >
                      <text>{"Vietnam"}</text>
                    </Annotation>
                    <Annotation
                      dx={60}
                      dy={-18}
                      subject={[125.2684384, 12.7996671]}
                      strokeWidth={1}
                      stroke="#607D8B"
                    >
                      <text>{"Philippines"}</text>
                    </Annotation>
                    <Markers>
                      {markers.map((marker, i) => (
                        <Marker
                          key={i}
                          marker={marker}
                          style={{
                            default: { stroke: "black" },
                            hover: { stroke: "#FF5722" },
                            pressed: { stroke: "#FF5722" }
                          }}
                        >
                          <g transform="translate(-12, -24)">
                            <path
                              fill="white"
                              strokeWidth="2"
                              strokeLinecap="square"
                              strokeMiterlimit="10"
                              strokeLinejoin="miter"
                              d="M20,9c0,4.9-8,13-8,13S4,13.9,4,9c0-5.1,4.1-8,8-8S20,3.9,20,9z"
                            />
                            <circle
                              fill="white"
                              strokeWidth="2"
                              strokeLinecap="square"
                              strokeMiterlimit="10"
                              strokeLinejoin="miter"
                              cx="12"
                              cy="9"
                              r="3"
                            />
                          </g>
                        </Marker>
                      ))}
                    </Markers>
                  </ZoomableGroup>
                </ComposableMap>
              )}
            </Motion>
          </div>
        </div>
        <main>
          <div className="container">
            {this.props.blogs.map(blog => (
              <div key={blog.title}>
                <Link to={"/" + blog.title}>
                  <h3>{blog.title}</h3>
                </Link>
                <p>{blog.short_description}</p>
              </div>
            ))}
          </div>
        </main>
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
