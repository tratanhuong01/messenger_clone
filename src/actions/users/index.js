import * as Types from "../../constants/ActionTypes";
import api from "../../api/api";
import * as modalsAction from "../modals/index";
//
export const registerAccountRequest = (user) => {
  return async (dispatch) => {
    try {
      dispatch(modalsAction.showLoadingSubmitModal());
      const result = api(`checkEmailOrPhoneIsset`, "POST", user, null);
      if (result.data === "") {
        dispatch(modalsAction.hideLoadingSubmitModal());
        alert("Emal hoặc số điện thoại đã tồn tại!!");
      } else {
        const userNew = {
          id: "",
          firstName: user.firstName,
          lastName: user.lastName,
          sex: user.sex,
          birthday: user.birthday,
          email: user.emailOrPhone,
          phone: user.emailOrPhone,
          password: user.password,
          avatar: "",
          typeAccoount: 1,
          darkMode: 0,
          dateCreated: "",
        };
        await api("users", "POST", userNew, null);
        dispatch(modalsAction.hideLoadingSubmitModal());
        dispatch(modalsAction.closeModal());
      }
    } catch (error) {
      console.log(error);
    }
  };
};
//
export const loginAccountRequest = (user) => {
  return async (dispatch) => {
    try {
      const result = await api("checkLogin", "POST", user, null);

      if (result.data === "") {
        alert("Thông tin đăng nhập không chính xác !!");
      } else {
        localStorage.setItem("user", JSON.stringify(result.data));
        dispatch(login(result.data));
      }
    } catch (error) {
      console.log(error);
    }
  };
};
//
export const login = (user) => {
  return {
    type: Types.LOGIN,
    user,
  };
};
//
export const logout = () => {
  return {
    type: Types.LOGOUT,
  };
};
//
export const searchUserByEmailOrPhone = (search) => {
  return async (dispatch) => {
    try {
      const result = await api(
        `searchUserByEmailOrPhone/${search}`,
        "GET",
        null,
        null
      );
      if (result.data === "") {
        alert("Không tìm thấy tài khoản");
      } else {
        dispatch(modalsAction.openModalProfile(result.data));
      }
    } catch (error) {
      console.log(error);
    }
  };
};
//
export const getAllUsersRequest = () => {
  return async (dispatch) => {
    try {
      const result = await api("users", "GET", null, null);
      dispatch(getAllUsers(result.data));
    } catch (error) {
      console.log(error);
    }
  };
};
//
export const updateDarkModeByUser = (user, typeCurrent) => {
  return async (dispatch) => {
    try {
      if (typeCurrent === 0) typeCurrent = 1;
      else typeCurrent = 0;
      await api(
        `updateUser/darkMode/${typeCurrent}/${user.id}`,
        "GET",
        null,
        null
      );
      //
      let userChange = { ...user };
      userChange.darkMode = typeCurrent;
      dispatch(login(userChange));
      localStorage.setItem("user", JSON.stringify(userChange));
    } catch (error) {
      console.log(error);
    }
  };
};
//
export const getAllUsers = (list) => {
  return {
    type: Types.GET_ALL_USERS,
    list,
  };
};
//
