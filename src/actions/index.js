import * as Types from "../constants/ActionTypes";
import api from "../api/api";
import * as messagesAction from "../actions/messages/index";

export const loadAllMessageOfUserByIdRequest = (id, slug) => {
  return (dispatch) => {
    return api(`createAllMessagesUser/${id}`, "GET", null, null)
      .then((resList) => {
        dispatch(loadAllMessageOfUserById(resList.data));
        if (typeof slug === "undefined") {
        } else {
          let index = resList.data.findIndex(
            (item) => item[0].idGroupMessage === slug
          );
          api(`groupmessage/${slug}`, "GET", null, null)
            .then((res) => {
              dispatch(
                messagesAction.getAllMessageByGroup(
                  resList.data[index],
                  id,
                  res.data
                )
              );
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

export const loadAllMessageOfUserById = (listInList) => {
  return {
    type: Types.LOAD_ALL_MESSAGE_OF_USER_BY_ID,
    listInList,
  };
};
