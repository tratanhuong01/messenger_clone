import * as Types from "../constants/ActionTypes";
// import api from "../api/api";

const initialState = {};

const myReducer = (state = initialState, action) => {
  switch (action.type) {
    case Types.GET_ALL_INVITE_REQUEST:
      return { ...state };
    default:
      return state;
  }
};

export default myReducer;
