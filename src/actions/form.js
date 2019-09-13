import { GET_VALUES } from "./types";
import { CHANGE_CLASSES } from "./types";
import { UPDATE_FORM } from "./types";
import { UPDATE_MAIN, UPDATE_IMAGES } from "./types";

export const getValues = (data, blogs) => {
  return { type: GET_VALUES, data };
};

export const changeClasses = data => ({ type: CHANGE_CLASSES, data });

export const updateForm = (data, e) => ({
  type: UPDATE_FORM,
  data,
  title: e
});

export const updateMain = data => ({ type: UPDATE_MAIN, data });
export const updateImages = data => ({ type: UPDATE_IMAGES, data });
