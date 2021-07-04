import * as Types from "../constants/ActionTypes";
import ModalRegister from "../components/Modals/Login/ModalRegister/ModalRegister";
import ModalProfile from "../components/Modals/Friend/ModalProfile/ModalProfile";
import ModalAddFriend from "../components/Modals/Friend/ModalAddFriend/ModalAddFriend";
import ModalCreateGroup from "../components/Modals/Friend/ModalCreateGroup/ModalCreateGroup";
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
    //
    case Types.OPEN_MODAL_ADD_FRIEND:
      document.getElementsByTagName("body")[0].classList.add("overflow-hidden");
      state.StateModal = true;
      state.DataModal = <ModalAddFriend />;
      return { ...state };
    //
    case Types.OPEN_MODAL_CREATE_GROUP:
      document.getElementsByTagName("body")[0].classList.add("overflow-hidden");
      state.StateModal = true;
      state.DataModal = <ModalCreateGroup />;
      return { ...state };
    default:
      return state;
  }
};
export default myReducer;
