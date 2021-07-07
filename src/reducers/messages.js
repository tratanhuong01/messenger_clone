import * as Types from "../constants/ActionTypes";

const initialState = {
  list: [[]],
};
const myReducer = (state = initialState, action) => {
  switch (action.type) {
    //
    case Types.LOAD_ALL_MESSAGE_OF_USER_BY_ID:
      state.list = action.listInList;
      return { ...state };
    //
    default:
      return state;
  }
};
export default myReducer;
