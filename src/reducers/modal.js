import * as Types from "../constants/ActionTypes";
import ModalRegister from "../components/Modals/Login/ModalRegister/ModalRegister";
const initialState = {
  StateModal: false,
  DataModal: "",
};
const myReducer = (state = initialState, action) => {
  switch (action.type) {
    //
    case Types.OPEN_MODAL_REGISTER:
      document.getElementsByTagName("body")[0].classList.add("overflow-hidden");
      state.StateModal = true;
      state.DataModal = <ModalRegister />;
      return { ...state };
    //
    case Types.CLOSE_MODAL:
      document
        .getElementsByTagName("body")[0]
        .classList.remove("overflow-hidden");
      state.StateModal = false;
      state.DataModal = "";
      return { ...state };
    //
    default:
      return state;
  }
};
export default myReducer;
