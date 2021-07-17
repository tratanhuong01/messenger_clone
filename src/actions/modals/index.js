import * as Types from "../../constants/ActionTypes";

export const openModalRegister = () => {
  return {
    type: Types.OPEN_MODAL_REGISTER,
  };
};

export const closeModal = () => {
  return {
    type: Types.CLOSE_MODAL,
  };
};

export const showLoadingSubmitModal = () => {
  return {
    type: Types.ON_LOADING_SUBMIT_MODAL,
  };
};

export const hideLoadingSubmitModal = () => {
  return {
    type: Types.OFF_LOADING_SUBMIT_MODAL,
  };
};

export const openModalProfile = (user) => {
  return {
    type: Types.OPEN_MODAL_PROFILE,
    user,
  };
};

export const openModalAddFriend = () => {
  return {
    type: Types.OPEN_MODAL_ADD_FRIEND,
  };
};

export const openModalCreateGroup = () => {
  return {
    type: Types.OPEN_MODAL_CREATE_GROUP,
  };
};

export const openModalChangeNickName = () => {
  return {
    type: Types.OPEN_MODAL_CHANGE_NICK_NAME,
  };
};

export const openModalChangeIconChat = () => {
  return {
    type: Types.OPEN_MODAL_CHANGE_ICON_CHAT,
  };
};

export const openModalChangeColorChat = () => {
  return {
    type: Types.OPEN_MODAL_CHANGE_COLOR_CHAT,
  };
};

export const openModalWarningLeaveGroup = (data) => {
  return {
    type: Types.OPEN_MODAL_WARNING_LEAVE_GROUP,
    data,
  };
};

export const openModalMemberGroupChat = () => {
  return {
    type: Types.OPEN_MODAL_MEMBER_GROUP_CHAT,
  };
};

export const openModalChangeNameGroup = () => {
  return {
    type: Types.OPEN_MODAL_CHANGE_NAME_GROUP,
  };
};

export const openModalWarningMessage = (item) => {
  return {
    type: Types.OPEN_MODAL_WARNING_MESSGAE,
    item,
  };
};

export const openModalFeelMessage = (data) => {
  return {
    type: Types.OPEN_MODAL_FEEL_MESSAGE,
    data,
  };
};
