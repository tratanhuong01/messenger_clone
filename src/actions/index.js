import * as Types from "../constants/ActionTypes";
import api from "../api/api";

export const loadAllMessageOfUserByIdRequest = (id) => {
  return (dispatch) => {
    return api(`createAllMessagesUser/${id}`, "GET", null, null)
      .then((res) => {
        dispatch(loadAllMessageOfUserById(res.data));
      })
      .catch((err) => {
        console.log(err);
      });
  };
};

export const loadAllMessageOfUserById = (listInList) => {
  return {
    type: Types.LOAD_ALL_MESSAGE_OF_USER_BY_ID,
    listInList,
  };
};
