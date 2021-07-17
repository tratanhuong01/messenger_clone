import * as Types from "../constants/ActionTypes";
// import api from "../api/api";

const initialState = {
  list: [],
};

const myReducer = (state = initialState, action) => {
  switch (action.type) {
    case Types.GET_ALL_USERS:
      state.list = action.list;
      return { ...state };
    default:
      return state;
  }
};

export default myReducer;
