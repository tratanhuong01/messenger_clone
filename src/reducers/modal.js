import * as Types from "../constants/ActionTypes";
import ModalRegister from "../components/Modals/Login/ModalRegister/ModalRegister";
import ModalProfile from "../components/Modals/Friend/ModalProfile/ModalProfile";
import ModalAddFriend from "../components/Modals/Friend/ModalAddFriend/ModalAddFriend";
import ModalCreateGroup from "../components/Modals/Friend/ModalCreateGroup/ModalCreateGroup";
import ModalChangeNickName from "../components/Modals/Messenger/ModalChangeNickName/ModalChangeNickName";
import ModalChangeColor from "../components/Modals/Messenger/ModalChangeColor/ModalChangeColor";
import ModalWarningLeaveGroup from "../components/Modals/Messenger/ModalWarningLeaveGroup/ModalWarningLeaveGroup";
import ModalChangeNameChat from "../components/Modals/Messenger/ModalChangeNameChat/ModalChangeNameChat";
import ModalAddMemberGroup from "../components/Modals/Messenger/ModalAddMemberGroup/ModalAddMemberGroup";
import ModalEmojii from "../components/Modals/Messenger/ModalEmojii/ModalEmojii";
import ModalWarningMessage from "../components/Modals/Messenger/ModalWarningMessage/ModalWarningMessage";
import ModalFeel from "../components/Modals/Messenger/ModalFeel/ModalFeel";

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
      state.DataModal = <ModalProfile user={action.user} />;
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
    //
    case Types.OPEN_MODAL_CHANGE_COLOR_CHAT:
      document.getElementsByTagName("body")[0].classList.add("overflow-hidden");
      state.StateModal = true;
      state.DataModal = <ModalChangeColor />;
      return { ...state };
    //
    case Types.OPEN_MODAL_CHANGE_ICON_CHAT:
      document.getElementsByTagName("body")[0].classList.add("overflow-hidden");
      state.StateModal = true;
      state.DataModal = <ModalEmojii />;
      return { ...state };
    //
    case Types.OPEN_MODAL_CHANGE_NICK_NAME:
      document.getElementsByTagName("body")[0].classList.add("overflow-hidden");
      state.StateModal = true;
      state.DataModal = <ModalChangeNickName />;
      return { ...state };
    //
    case Types.OPEN_MODAL_WARNING_LEAVE_GROUP:
      document.getElementsByTagName("body")[0].classList.add("overflow-hidden");
      state.StateModal = true;
      state.DataModal = <ModalWarningLeaveGroup data={action.data} />;
      return { ...state };
    //
    case Types.OPEN_MODAL_MEMBER_GROUP_CHAT:
      document.getElementsByTagName("body")[0].classList.add("overflow-hidden");
      state.StateModal = true;
      state.DataModal = <ModalAddMemberGroup />;
      return { ...state };
    //
    case Types.OPEN_MODAL_CHANGE_NAME_GROUP:
      document.getElementsByTagName("body")[0].classList.add("overflow-hidden");
      state.StateModal = true;
      state.DataModal = <ModalChangeNameChat />;
      return { ...state };
    //
    case Types.OPEN_MODAL_WARNING_MESSGAE:
      document.getElementsByTagName("body")[0].classList.add("overflow-hidden");
      state.StateModal = true;
      console.log(action.item);
      state.DataModal = (
        <ModalWarningMessage
          messageCurrent={action.item.messageCurrent}
          userStateMessage={action.item.userStateMessage}
        />
      );
      return { ...state };
    case Types.OPEN_MODAL_FEEL_MESSAGE:
      document.getElementsByTagName("body")[0].classList.add("overflow-hidden");
      state.StateModal = true;
      state.DataModal = <ModalFeel data={action.data} />;
      return { ...state };
    default:
      return state;
  }
};
export default myReducer;
