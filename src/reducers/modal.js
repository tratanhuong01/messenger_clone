import * as Types from "../constants/ActionTypes";
import ModalRegister from "../components/Modals/Login/ModalRegister/ModalRegister";
import ModalProfile from "../components/Modals/Friend/ModalProfile/ModalProfile";
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
    case Types.OPEN_MODAL_PROFILE:
      document.getElementsByTagName("body")[0].classList.add("overflow-hidden");
      state.StateModal = true;
      state.DataModal = <ModalProfile />;
      return { ...state };
    default:
      return state;
  }
};
export default myReducer;
