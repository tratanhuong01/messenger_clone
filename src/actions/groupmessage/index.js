import * as Types from "../../constants/ActionTypes";
import api from "../../api/api";
import * as contentRightAction from "../contentRight/index";
import * as modalsAction from "../modals/index";
import * as actions from "../index";
// import * as process from "../../functions/process";

export const addGroupMessageWaitRequest = (groupMessage) => {
  const data = {
    id: null,
    nameGroupMessage: null,
    colorChat: "#ccc",
    iconChat: "😱",
    typeGroupMessage: -1,
    dateCreated: "",
  };
  const content = {
    data: [
      {
        id: 0,
        content: "Các bạn chưa là bạn bè trên Ensonet",
        src: "",
      },
    ],
    type: -1,
  };
  const contentWait = {
    data: [
      {
        id: 0,
        content: groupMessage.content,
        src: "",
      },
    ],
    type: 0,
  };
  return async (dispatch) => {
    try {
      let result = await api("getIdNewMessage", "GET", null, null);
      let idGet = Number(result.data.id);
      result = await api("groupmessage", "POST", data, null);
      const group = result.data;
      let messOne = {
        id: ++idGet,
        groupMessage: group,
        userMesages: groupMessage.userSend,
        content: null,
        nickName: null,
        stateMessage: null,
        typeMessage: -1,
        dateCreated: null,
      };
      let messTwo = {
        id: ++idGet,
        groupMessage: group,
        userMesages: groupMessage.userRecivice,
        content: null,
        nickName: null,
        stateMessage: null,
        typeMessage: -1,
        dateCreated: null,
      };
      let messThree = {
        id: ++idGet,
        groupMessage: group,
        userMesages: groupMessage.userSend,
        content: JSON.stringify(content),
        nickName: null,
        stateMessage: null,
        typeMessage: 1,
        dateCreated: null,
      };
      let messFour = {
        id: ++idGet,
        groupMessage: group,
        userMesages: groupMessage.userSend,
        content: JSON.stringify(contentWait),
        nickName: null,
        stateMessage: null,
        typeMessage: 2,
        dateCreated: null,
      };
      const allPromises = [
        await api("messages", "POST", messOne, null),
        await api("messages", "POST", messTwo, null),
        await api("messages", "POST", messThree, null),
        await api("messages", "POST", messFour, null),
      ];
      await Promise.all(allPromises);
    } catch (error) {
      console.log(error);
    }
  };
};

export const addGroupMessageRequestSingle = (groupMessage) => {
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
  return async (dispatch) => {
    try {
      let result = await api("getIdNewMessage", "GET", null, null);
      let idGet = Number(result.data.id);
      result = await api("groupmessage", "POST", data, null);
      const group = result.data;
      let messOne = {
        id: ++idGet,
        groupMessage: group,
        userMesages: groupMessage.userSend,
        content: null,
        nickName: null,
        stateMessage: null,
        typeMessage: -1,
        dateCreated: null,
      };
      let messTwo = {
        id: ++idGet,
        groupMessage: group,
        userMesages: groupMessage.userRecivice,
        content: null,
        nickName: null,
        stateMessage: null,
        typeMessage: -1,
        dateCreated: null,
      };
      let messThree = {
        id: ++idGet,
        groupMessage: group,
        userMesages: groupMessage.userRecivice,
        content: JSON.stringify(content),
        nickName: null,
        stateMessage: null,
        typeMessage: 1,
        dateCreated: null,
      };
      const allPromises = [
        await api("messages", "POST", messOne, null),
        await api("messages", "POST", messTwo, null),
        await api("messages", "POST", messThree, null),
      ];
      await Promise.all(allPromises);
      dispatch(
        contentRightAction.loadListInviteFriend(groupMessage.listInvite)
      );
    } catch (error) {
      console.log(error);
    }
  };
};

export const addGroupMessage = () => {
  return {
    type: Types.ADD_GROUP_MESSAGE,
  };
};

export const addGroupMessageRequestGroup = (groupMessage) => {
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
  return async (dispatch) => {
    try {
      let result = await api("getIdNewMessage", "GET", null, null);
      let idGet = Number(result.data.id);
      result = await api("groupmessage", "POST", data, null);
      const group = result.data;
      let newDataMess = [];
      groupMessage.users.forEach((element) => {
        newDataMess.push({
          id: ++idGet,
          groupMessage: group,
          userMesages: element.userRelationshipUser,
          content: null,
          nickName: null,
          stateMessage: null,
          typeMessage: -1,
          dateCreated: null,
        });
      });
      newDataMess.push({
        id: ++idGet,
        groupMessage: group,
        userMesages: groupMessage.user,
        content: null,
        nickName: null,
        stateMessage: null,
        typeMessage: -1,
        dateCreated: null,
      });
      newDataMess.push({
        id: ++idGet,
        groupMessage: group,
        userMesages: groupMessage.user,
        content: JSON.stringify(content),
        nickName: null,
        stateMessage: null,
        typeMessage: 1,
        dateCreated: null,
      });
      await api("messagesGroup", "POST", newDataMess, null);
      dispatch(modalsAction.closeModal());
    } catch (error) {
      console.log(error);
    }
  };
};

export const updateColorChatRequest = (data) => {
  const content = {
    data: [
      {
        id: 0,
        content: `đã thay đổi màu sắc cuộc trò chuyện.`,
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
    stateMessage: null,
    typeMessage: 1,
    dateCreated: null,
  };
  return async (dispatch) => {
    try {
      const allPromises = [
        await api(
          `updateGroupMessage/colorChat/${data.group.id}/${data.color}`,
          "GET",
          null,
          null
        ),
        await api("messages", "POST", mess, null),
      ];
      await Promise.all(allPromises);
      //
      dispatch(updateColorChat("#" + data.color));
      dispatch(modalsAction.closeModal());
      dispatch(
        actions.loadAllMessageOfUserByIdRequest(data.user.id, data.group.id)
      );
    } catch (error) {
      console.log(error);
    }
  };
};

export const updateColorChat = (color) => {
  return {
    type: Types.UPDATE_COLOR_CHAT,
    color,
  };
};

export const updateNameGroupMessageRequest = (data) => {
  const content = {
    data: [
      {
        id: 0,
        content: `đã đổi tên cuộc trò chuyện thành ${data.name}`,
        src: "",
      },
    ],
    type: 2,
  };
  const mess = {
    id: null,
    groupMessage: data.group,
    userMesages: data.user,
    content: JSON.stringify(content),
    nickName: null,
    stateMessage: null,
    typeMessage: 1,
    dateCreated: null,
  };
  return async (dispatch) => {
    try {
      const allPromises = [
        await api(
          `updateGroupMessage/nameGroupMessage/${data.id}/${data.name}`,
          "GET",
          null,
          null
        ),
        await api("messages", "POST", mess, null),
      ];
      await Promise.all(allPromises);
      dispatch(updateNameGroupMessage(data.name));
      dispatch(modalsAction.closeModal());
      dispatch(
        actions.loadAllMessageOfUserByIdRequest(data.user.id, data.group.id)
      );
    } catch (error) {
      console.log(error);
    }
  };
};

export const updateNameGroupMessage = (name) => {
  return {
    type: Types.UPDATE_NAME_GROUP_MESSAGE,
    name,
  };
};

export const updateIonChatMessageRequest = (data) => {
  const content = {
    data: [
      {
        id: 0,
        content: `đã đổi biểu tưởng cảm xúc thành ${data.data.icon}`,
        src: "",
      },
    ],
    type: 5,
  };
  const mess = {
    id: null,
    groupMessage: data.group,
    userMesages: data.user,
    content: JSON.stringify(content),
    nickName: null,
    stateMessage: null,
    typeMessage: 1,
    dateCreated: null,
  };
  return async (dispatch) => {
    try {
      const allPromises = [
        await api("updateGroupMessage/iconChat", "PUT", data.data, null),
        await api("messages", "POST", mess, null),
      ];
      await Promise.all(allPromises);
      //
      dispatch(updateIconChatMessage(data.data.icon));
      dispatch(modalsAction.closeModal());
      dispatch(
        actions.loadAllMessageOfUserByIdRequest(data.user.id, data.group.id)
      );
    } catch (error) {
      console.log(error);
    }
  };
};

export const updateIconChatMessage = (icon) => {
  return {
    type: Types.UPDATE_ICON_CHAT_MESSAGE,
    icon,
  };
};
