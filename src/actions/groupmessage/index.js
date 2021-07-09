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
  const content = {
    data: [
      {
        id: 0,
        content: "Các bạn hiện là bạn bè trên Ensonet",
        src: "",
      },
    ],
    type: -1,
  };
  return (dispatch) => {
    return api("groupmessage", "POST", data, { headers })
      .then((res) => {
        let messOne = {
          id: null,
          groupMessage: res.data,
          userMesages: groupMessage.userSend,
          content: null,
          nickName: null,
          stateMessage: 0,
          typeMessage: -1,
          dateCreated: null,
        };
        let messTwo = {
          id: null,
          groupMessage: res.data,
          userMesages: groupMessage.userRecivice,
          content: null,
          nickName: null,
          stateMessage: 0,
          typeMessage: -1,
          dateCreated: null,
        };
        let messThree = {
          id: null,
          groupMessage: res.data,
          userMesages: groupMessage.userRecivice,
          content: JSON.stringify(content),
          nickName: null,
          stateMessage: 0,
          typeMessage: 1,
          dateCreated: null,
        };
        api("messages", "POST", messOne, { headers })
          .then((res) => {
            api("messages", "POST", messTwo, { headers })
              .then((res) => {
                api("messages", "POST", messThree, { headers })
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
