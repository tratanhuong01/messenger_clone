import { combineReducers } from "redux";
import modal from "./modal";
import loading from "./loading";
import isLogin from "./isLogin";

const myReducer = combineReducers({
  modal,
  loading,
  isLogin,
});

export default myReducer;
