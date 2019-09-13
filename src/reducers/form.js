import { UPDATE_FORM } from "../actions/types";
import { UPDATE_MAIN, UPDATE_IMAGES } from "../actions/types";

const initialState = {
  title: "",
  // one_sentence_description: "",
  short_description: "",
  country: "",
  // header_image: "",
  // header_image_label: "",
  date: "",
  coordinatesLongitude: 0,
  coordinatesAltitude: 0,
  main: [
    {
      type: "paragraph",
      content: "",
      value: ""
    }
  ],
  images: [
    {
      name: "",
      comment: ""
    }
  ],
  output: ""
};

export default function(state = initialState, action) {
  // check for which action
  switch (action.type) {
    case UPDATE_FORM:
      return {
        ...state,
        [action.title]: action.data
      };
    case UPDATE_MAIN:
      return {
        ...state,
        main: action.data
      };
    case UPDATE_IMAGES:
      return {
        ...state,
        images: action.data
      };

    default:
      return state;
  }
}
