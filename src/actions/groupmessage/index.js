import * as Types from "../../constants/ActionTypes";
import api from "../../api/api";
import * as contentRightAction from "../contentRight/index";

export const addGroupMessageRequestSingle = (groupMessage) => {
  const headers = {
    "Content-Type": "application/json",
  };
  const data = {
    id: "",
    nameGroupMessage: null,
    colorChat: "#ccc",
    iconChat: "😱",
    typeGroupMessage: 0,
    dateCreated: "",
  };
  return (dispatch) => {
    return api("groupmessage", "POST", data, { headers })
      .then((res) => {
        let messOne = {
          id: "11111",
          groupMessage: res.data,
          userMesages: groupMessage.userSend,
          content: "",
          nickName: "",
          stateMessage: 0,
          typeMessage: 0,
          dateCreated: null,
        };
        let messTwo = {
          id: "22222",
          groupMessage: res.data,
          userMesages: groupMessage.userRecivice,
          content: "",
          nickName: "",
          stateMessage: 0,
          typeMessage: 0,
          dateCreated: "",
        };
        api("messages", "POST", messOne, { headers })
          .then((res) => {
            api("messages", "POST", messTwo, { headers })
              .then((res) => {
                dispatch(
                  contentRightAction.loadListInviteFriend(
                    groupMessage.listInvite
                  )
                );
              })
              .catch((err) => {
                console.log(err);
              });
          })
          .catch((err) => {
            console.log(err);
          });
      })
      .catch((err) => {
        console.log(err);
      });
  };
};

export const addGroupMessage = () => {
  return {
    type: Types.ADD_GROUP_MESSAGE,
  };
};
