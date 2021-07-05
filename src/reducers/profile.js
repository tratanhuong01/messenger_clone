import * as Types from "../constants/ActionTypes";

const initialState = {
  statusFriend: 0,
};
const myReducer = (state = initialState, action) => {
  switch (action.type) {
    //
    case Types.STATUS_FRIEND:
      console.log(action.status);
      state.statusFriend = action.status;
      return { ...state };
    //
    default:
      return state;
  }
};
export default myReducer;
