import * as Types from "../constants/ActionTypes";
import api from "../api/api";
import * as messagesAction from "../actions/messages/index";
//
export const loadAllMessageOfUserByIdRequest = (id, slug) => {
  return async (dispatch) => {
    try {
      const resList = await api(
        `createAllMessagesUser/${id}`,
        "GET",
        null,
        null
      );
      //
      dispatch(loadAllMessageOfUserById(resList.data));
      if (typeof slug === "undefined") {
      } else {
        let index = resList.data.findIndex(
          (item) => item[0].idGroupMessage === slug
        );
        const resultMain = await api(`groupMessage/${slug}`, "GET", null, null);
        if (
          resultMain.data !== null &&
          resultMain.data !== "" &&
          index !== -1
        ) {
          const members = await api(
            `getMemberGroupChat/${slug}/${id}`,
            "GET",
            null,
            null
          );
          dispatch(
            messagesAction.getAllMessageByGroup(
              resList.data[index],
              id,
              resultMain.data,
              members.data
            )
          );
        }
      }
    } catch (error) {
      console.log(error);
    }
  };
};
//
export const loadAllMessageOfUserById = (listInList) => {
  return {
    type: Types.LOAD_ALL_MESSAGE_OF_USER_BY_ID,
    listInList,
  };
};
//
