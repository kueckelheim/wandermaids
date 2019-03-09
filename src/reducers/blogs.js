import { GET_VALUES } from "../actions/types";
import { CHANGE_CLASSES } from "../actions/types";

const blogs = require("../code/code.json");

const classes = blogs.blogs.map(blog => ({
  overlayClass: "mapOverlay",
  title: blog.title,
  markerColor: "black"
}));

const initialState = { blogs: blogs.blogs, classes: classes, added: false };

export default function(state = initialState, action) {
  // check for which action
  switch (action.type) {
    case GET_VALUES:
      if (!state.added) {
        return {
          ...state,
          blogs: [...state.blogs, action.data],
          classes: [
            ...state.classes,
            {
              overlayClass: "mapOverlay",
              title: action.data.title,
              markerColor: "black"
            }
          ],
          added: true
        };
      } else {
        return {
          ...state,
          blogs: [...state.blogs.splice(0, 1), action.data],
          classes: [
            ...state.classes.splice(0, 1),
            {
              overlayClass: "mapOverlay",
              title: action.data.title,
              markerColor: "black"
            }
          ],
          added: true
        };
      }
    case CHANGE_CLASSES:
      return {
        ...state,
        classes: [action.data[0]]
      };
    default:
      return state;
  }
}
