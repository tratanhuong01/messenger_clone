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

export const getAllMessageByGroup = (data, idUser) => {
  return {
    type: Types.GET_ALL_MESSAGES_BY_GROUP,
    data,
    idUser,
  };
};

export const updateColorChatRequest = (color, id) => {
  return (dispatch) => {
    return api(`updateGroupMessage/colorChat/${id}/${color}`, "GET", null, null)
      .then((res) => {
        dispatch(updateColorChat(color));
      })
      .catch((err) => {
        console.log(err);
      });
  };
};

export const updateColorChat = (color) => {
  return {
    type: Types.UPDATE_COLOR_CHAT,
    color,
  };
};

export const updateNameGroupMessageRequest = (name, id) => {
  return (dispatch) => {
    return api(
      `updateGroupMessage/nameGroupMessage/${id}/${name}`,
      "GET",
      null,
      null
    )
      .then((res) => {
        dispatch(updateNameGroupMessage(name));
      })
      .catch((err) => {
        console.log(err);
      });
  };
};

export const updateNameGroupMessage = (name) => {
  return {
    type: Types.UPDATE_NAME_GROUP_MESSAGE,
    name,
  };
};
