import * as Types from "../constants/ActionTypes";

let data = {
  user: null,
  isLogin: false,
};
if (localStorage && localStorage.getItem("user")) {
  data.user = JSON.parse(localStorage.getItem("user"));
  data.isLogin = true;
}
const initialState = data;
const myReducer = (state = initialState, action) => {
  switch (action.type) {
    //
    case Types.LOGIN:
      state.isLogin = true;
      state.user = action.user;
      return { ...state };
    //
    case Types.LOGOUT:
      state.isLogin = false;
      state.user = null;
      return { ...state };
    //
    default:
      return state;
  }
};
export default myReducer;
