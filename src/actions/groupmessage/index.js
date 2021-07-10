import * as Types from "../../constants/ActionTypes";
import api from "../../api/api";
import * as contentRightAction from "../contentRight/index";
import * as modalsAction from "../modals/index";

export const addGroupMessageRequestSingle = (groupMessage) => {
  const headers = {
    "Content-Type": "application/json",
  };
  const data = {
    id: null,
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

export const addGroupMessageRequestGroup = (groupMessage) => {
  return (dispatch) => {
    const headers = {
      "Content-Type": "application/json",
    };
    const data = {
      id: "",
      nameGroupMessage: groupMessage.groupMessage.nameGroup,
      colorChat: groupMessage.groupMessage.colorChat,
      iconChat: "😱",
      typeGroupMessage: 1,
      dateCreated: "",
    };
    const content = {
      data: [
        {
          id: 0,
          content: `${groupMessage.user.lastName} đã tạo nhóm này.`,
          src: "",
        },
      ],
      type: -1,
    };
    return api("groupmessage", "POST", data, { headers })
      .then((resGM) => {
        let newDataMess = [];
        api("getIdNewMessage", "GET", null, null)
          .then((res) => {
            let id = Number(res.data.id);
            groupMessage.users.forEach((element) => {
              id++;
              newDataMess.push({
                id: id,
                groupMessage: resGM.data,
                userMesages: element.userRelationshipUser,
                content: null,
                nickName: null,
                stateMessage: 0,
                typeMessage: -1,
                dateCreated: null,
              });
            });
            id++;
            newDataMess.push({
              id: id,
              groupMessage: resGM.data,
              userMesages: groupMessage.user,
              content: null,
              nickName: null,
              stateMessage: 0,
              typeMessage: -1,
              dateCreated: null,
            });
            id++;
            newDataMess.push({
              id: id,
              groupMessage: resGM.data,
              userMesages: groupMessage.user,
              content: JSON.stringify(content),
              nickName: null,
              stateMessage: 0,
              typeMessage: 1,
              dateCreated: null,
            });
            api("messagesGroup", "POST", newDataMess, { headers })
              .then((res) => {
                console.log("success");
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

export const updateColorChatRequest = (data) => {
  return (dispatch) => {
    const headers = {
      "Content-Type": "application/json",
    };
    const content = {
      data: [
        {
          id: 0,
          content: `${data.user.lastName} đã thay đổi màu sắc cuộc trò chuyện.`,
          src: "",
        },
      ],
      type: 0,
    };
    const mess = {
      id: null,
      groupMessage: data.group,
      userMesages: data.user,
      content: JSON.stringify(content),
      nickName: null,
      stateMessage: 0,
      typeMessage: 1,
      dateCreated: null,
    };
    return api(
      `updateGroupMessage/colorChat/${data.id}/${data.color}`,
      "GET",
      null,
      null
    )
      .then((res) => {
        api("messages", "POST", mess, { headers })
          .then((res) => {
            dispatch(updateColorChat("#" + data.color));
            dispatch(modalsAction.closeModal());
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
        dispatch(modalsAction.closeModal());
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
