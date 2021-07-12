import * as Types from "../../constants/ActionTypes";
import api from "../../api/api";
import * as modalsAction from "../modals/index";

export const registerAccountRequest = (user) => {
  return (dispatch) => {
    const headers = {
      "Content-Type": "application/json",
    };
    dispatch(modalsAction.showLoadingSubmitModal());
    return api(`checkEmailOrPhoneIsset`, "POST", user, { headers })
      .then((res) => {
        if (res.data === "") {
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
          api("users", "POST", userNew, headers)
            .then((res) => {
              dispatch(modalsAction.hideLoadingSubmitModal());
              dispatch(modalsAction.closeModal());
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
          dispatch(login(res.data));
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

export const searchUserByEmailOrPhone = (search) => {
  return (dispatch) => {
    api(`searchUserByEmailOrPhone/${search}`, "GET", null, null)
      .then((res) => {
        if (res.data === "") {
          alert("Không tìm thấy tài khoản");
        } else {
          dispatch(modalsAction.openModalProfile(res.data));
        }
      })
      .catch((err) => {
        console.log(err);
      });
  };
};

export const getAllUsers = () => {
  return (dispatch) => {
    return api("users", "GET", null, null)
      .then((res) => {})
      .catch((err) => {
        console.log(err);
      });
  };
};

export const updateDarkModeByUser = (user, typeCurrent) => {
  return (dispatch) => {
    if (typeCurrent === 0) typeCurrent = 1;
    else typeCurrent = 0;
    return api(
      `updateUser/darkMode/${typeCurrent}/${user.id}`,
      "GET",
      null,
      null
    )
      .then((res) => {
        let userChange = { ...user };
        userChange.darkMode = typeCurrent;
        dispatch(login(userChange));
        localStorage.setItem("user", JSON.stringify(userChange));
      })
      .catch((err) => {
        console.log(err);
      });
  };
};
