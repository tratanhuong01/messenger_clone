import * as Types from "../constants/ActionTypes";

const initialState = {
  loadingModal: false,
  loadingSubmit: false,
};
const myReducer = (state = initialState, action) => {
  switch (action.type) {
    //
    case Types.ON_LOADING_SUBMIT_MODAL:
      state.loadingSubmit = true;
      return { ...state };
    //
    case Types.OFF_LOADING_SUBMIT_MODAL:
      state.loadingSubmit = false;
      return { ...state };
    //
    default:
      return state;
  }
};
export default myReducer;
