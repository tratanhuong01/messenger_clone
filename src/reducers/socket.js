import * as Types from "../constants/ActionTypes";
import socketIOClient from "socket.io-client";

const initialState = socketIOClient.connect("http://192.168.1.8:4444");
const myReducer = (state = initialState, action) => {
  switch (action.type) {
    //
    case Types.LOAD_SOCKET:
      return state;
    //
    default:
      return state;
  }
};
export default myReducer;
