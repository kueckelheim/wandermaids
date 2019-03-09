import { GET_VALUES } from "../actions/types";

const initialState = {
  formValues: {
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
  }
};

export default function(state = initialState, action) {
  // check for which action
  switch (action.type) {
    // case GET_VALUES:
    //   if (!state.added) {
    //     return {
    //       ...state,
    //       blogs: [...state.blogs, action.data],
    //       classes: [
    //         ...state.classes,
    //         {
    //           overlayClass: "mapOverlay",
    //           title: action.data.title,
    //           markerColor: "black"
    //         }
    //       ],
    //       added: true
    //     };
    //   } else {
    //     return {
    //       ...state,
    //       blogs: [...state.blogs.splice(0, 1), action.data],
    //       classes: [
    //         ...state.classes.splice(0, 1),
    //         {
    //           overlayClass: "mapOverlay",
    //           title: action.data.title,
    //           markerColor: "black"
    //         }
    //       ],
    //       added: true
    //     };
    //   }
    default:
      return state;
  }
}
