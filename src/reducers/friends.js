import * as Types from "../constants/ActionTypes";

const initialState = {
  listFriends: [],
};
const myReducer = (state = initialState, action) => {
  switch (action.type) {
    case Types.LOAD_LIST_FRIEND:
      state.listFriends = action.list;
      return { ...state };
    default:
      return state;
  }
};
export default myReducer;
