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
      zoom: 1,
      countries: [
        { name: "Thailand", coordinates: [98.4684384, 11.7996671] },
        { name: "Philippines", coordinates: [122.095, 12.26552] },
        { name: "Vietnam", coordinates: [106.597532, 15.911419] },
        { name: "Cambodia", coordinates: [105.393584, 12.686335] },
        { name: "Laos", coordinates: [103.575512, 17.465869] }
      ]
    };
  }

  handleCountry = evt => {
    console.log(evt.target.value);
    const select = evt.target.value;
    const select_object = this.state.countries[select];
    this.setState({
      center: select_object.coordinates,
      zoom: 1
    });
  };
  handleReset = () => {
    this.setState({
      center: [112.5, 14.75],
      zoom: 1
    });
  };

  render() {
    return (
      <div className="Home">
        <div className="mapWrapper">
          <div className="map">
            <Motion
              defaultStyle={{
                zoom: 1,
                x: 112.5,
                y: 14.75
              }}
              style={{
                zoom: spring(this.state.zoom, { stiffness: 210, damping: 20 }),
                x: spring(this.state.center[0], {
                  stiffness: 210,
                  damping: 20
                }),
                y: spring(this.state.center[1], { stiffness: 210, damping: 20 })
              }}
            >
              {({ zoom, x, y }) => (
                <ComposableMap
                  projectionConfig={{
                    scale: 2005,
                    rotation: [-11, 0, 0]
                  }}
                  width={820}
                  height={551}
                  className="mapFrame"
                >
                  <ZoomableGroup center={[x, y]} zoom={zoom} disablePanning>
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
                  </ZoomableGroup>
                </ComposableMap>
              )}
            </Motion>
          </div>
          <div className="countryList">
            <ul>
              <li>
                <button onClick={this.handleCountry} value="0">
                  Thailand
                </button>
              </li>
              <li>
                <button onClick={this.handleCountry} value="1">
                  Philippines
                </button>
              </li>
              <li>
                <button onClick={this.handleCountry} value="2">
                  Vietnam
                </button>
              </li>
              <li>
                <button onClick={this.handleCountry} value="3">
                  Cambodia
                </button>
              </li>
              <li>
                <button onClick={this.handleCountry} value="4">
                  Laos
                </button>
              </li>
              <li>
                <button onClick={this.handleReset}>Reset</button>
              </li>
            </ul>
          </div>
        </div>
        <main>
          {this.props.blogs.map(blog => (
            <div key={blog.title}>
              <Link to={"/" + blog.title}>
                <h3>{blog.title}</h3>
              </Link>
              <p>{blog.short_description}</p>
            </div>
          ))}
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
