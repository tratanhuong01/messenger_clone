import { combineReducers } from "redux";
import modal from "./modal";
import loading from "./loading";
import isLogin from "./isLogin";
import profile from "./profile";
import contentRight from "./contentRight";
import users from "./users";
import friends from "./friends";
import messages from "./messages";
import socket from "./socket";

const myReducer = combineReducers({
  modal,
  loading,
  isLogin,
  profile,
  contentRight,
  users,
  friends,
  messages,
  socket,
});

export default myReducer;
