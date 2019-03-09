import { GET_VALUES } from "./types";
import { CHANGE_CLASSES } from "./types";

export const getValues = data => ({ type: GET_VALUES, data });

export const changeClasses = data => ({ type: CHANGE_CLASSES, data });
