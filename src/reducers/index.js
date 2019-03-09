import { combineReducers } from "redux";
import blogs from "./blogs";
import form from "./form";

export default combineReducers({ blogs: blogs, form: form });
