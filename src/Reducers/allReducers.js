import counterReducer from "./counterReducer";
import postReducer from "./postReducer";
import { combineReducers } from "redux";

export default combineReducers({
  counter: counterReducer,
  posts: postReducer
});
