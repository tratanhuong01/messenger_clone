import * as Types from "../constants/ActionTypes";
import api from "../api/api";
import { Redirect } from "react-router-dom";

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

export const registerAccountRequest = (user) => {
  return (dispatch) => {
    const headers = {
      "Content-Type": "application/json",
    };
    dispatch(showLoadingSubmitModal());
    return api(`checkEmailOrPhoneIsset`, "POST", user, { headers })
      .then((res) => {
        if (res.data === "") {
          dispatch(hideLoadingSubmitModal());
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
            dateCreated: "",
          };
          api("users", "POST", userNew, headers)
            .then((res) => {
              dispatch(hideLoadingSubmitModal());
              dispatch(closeModal());
            })
            .catch((err) => {
              console.log(err);
            });
        }
      })
      .catch((err) => {
        console.log(err);
      });
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

export const loginAccountRequest = (user) => {
  return (dispatch) => {
    const headers = {
      "Content-Type": "application/json",
    };
    return api("checkLogin", "POST", user, { headers })
      .then((res) => {
        if (res.data === "") {
          alert("Thông tin đăng nhập không chính xác !!");
        } else {
          localStorage.setItem("user", JSON.stringify(res.data));
          dispatch(login(user));
        }
      })
      .catch((err) => {
        console.log(err);
      });
  };
};

export const login = (user) => {
  return {
    type: Types.LOGIN,
    user,
  };
};

export const logout = () => {
  return {
    type: Types.LOGOUT,
  };
};
