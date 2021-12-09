import * as Types from "../constants/ActionTypes";
import socketIOClient from "socket.io-client";
import { SERVER_NODE } from "../constants/Config";

const initialState = socketIOClient.connect(SERVER_NODE);
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
