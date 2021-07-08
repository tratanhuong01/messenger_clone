import * as Types from "../constants/ActionTypes";

const initialState = {
  list: null,
  data: null,
};
const myReducer = (state = initialState, action) => {
  switch (action.type) {
    //
    case Types.LOAD_ALL_MESSAGE_OF_USER_BY_ID:
      state.list = action.listInList;
      return { ...state };
    //
    case Types.GET_ALL_MESSAGES_BY_GROUP:
      state.data = action.data;
      return { ...state };
    default:
      return state;
  }
};
export default myReducer;
