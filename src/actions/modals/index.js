import * as Types from "../../constants/ActionTypes";
// import api from "../../api/api";

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
