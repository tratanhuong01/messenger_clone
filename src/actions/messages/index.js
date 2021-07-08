import * as Types from "../../constants/ActionTypes";
import api from "../../api/api";

export const addMessageRequest = (message) => {
  const headers = {
    "Content-Type": "application/json",
  };
  return (dispatch) => {
    return api("messages", "POST", message, { headers })
      .then((res) => {})
      .catch((err) => {
        console.log(err);
      });
  };
};
export const addMessage = () => {
  return {
    type: Types.ADD_MESSAGE,
  };
};

export const getAllMessageByGroup = (data) => {
  return {
    type: Types.GET_ALL_MESSAGES_BY_GROUP,
    data,
  };
};
