import * as Types from "../../constants/ActionTypes";
import api from "../../api/api";
import * as actions from "../../actions/index";
import * as modalsAction from "../../actions/modals/index";
import * as process from "../../functions/process";
//
export const addMessageRequest = (data) => {
  const content = {
    data: [
      {
        id: 0,
        content: data.content,
        src: JSON.stringify(data.child),
      },
    ],
    type: data.type,
  };
  const mess = {
    id: null,
    groupMessage: data.group,
    userMesages: data.user,
    content: JSON.stringify(content),
    nickName: null,
    stateMessage: null,
    typeMessage: 2,
    dateCreated: null,
  };
  return async (dispatch) => {
    try {
      const members = await api(
        `getMemberGroupChat/${data.group.id}`,
        "GET",
        null,
        null
      );
      const message = await api("messages", "POST", mess, null);
      const { view, state } = process.generalStateAndViewMessage(
        members.data,
        message.data,
        data.user,
        data.group
      );
      await Promise.all(view);
      await Promise.all(state);
      dispatch(
        actions.loadAllMessageOfUserByIdRequest(data.user.id, data.group.id)
      );
      dispatch(
        sendEventMessage({
          socket: data.socket,
          members: data.members,
          type: 1,
        })
      );
    } catch (error) {
      console.log(error);
    }
  };
};
//
export const getAllMessageByGroup = (data, idUser, group, members) => {
  return {
    type: Types.GET_ALL_MESSAGES_BY_GROUP,
    data,
    idUser,
    group,
    members,
  };
};
//
export const updateNickNameByUserRequest = (data) => {
  const content = {
    data: [
      {
        id: 0,
        content: `đã đặt biệt danh cho`,
        src: JSON.stringify({
          nickName: data.nickName.nameNickName,
          user: data.data.user,
        }),
      },
    ],
    type: 1,
  };
  const mess = {
    id: null,
    groupMessage: data.data.group,
    userMesages: data.data.userMain,
    content: JSON.stringify(content),
    nickName: null,
    stateMessage: 0,
    typeMessage: 1,
    dateCreated: null,
  };
  return async (dispatch) => {
    try {
      await api("updateMessage/nickName", "PUT", data.nickName, null);
      const message = await api("messages", "POST", mess, null);
      const members = await api(
        `getMemberGroupChat/${data.data.group.id}`,
        "GET",
        null,
        null
      );
      const { view, state } = process.generalStateAndViewMessage(
        members.data,
        message.data,
        data.data.userMain,
        data.data.group
      );
      await Promise.all(view);
      await Promise.all(state);
      //
      if (
        data.data.group.typeGroupMessage === 0 &&
        data.data.userMain.id !== data.data.user.idUser
      ) {
        dispatch(updateNickNameByUser(data.nickName.nameNickName));
      }
      dispatch(
        actions.loadAllMessageOfUserByIdRequest(
          data.data.userMain.id,
          data.data.group.id
        )
      );
      dispatch(
        sendEventMessage({
          socket: data.socket,
          members: data.members,
          type: 1,
        })
      );
    } catch (error) {
      console.log(error);
    }
  };
};
//
export const updateNickNameByUser = (name) => {
  return {
    type: Types.UPDATE_NAME_GROUP_MESSAGE,
    name,
  };
};
//
export const addMemberToGroupMessageRequest = (data) => {
  return async (dispatch) => {
    try {
      let rs = await api("getIdNewMessage", "GET", null, null);
      let id = rs.data.id;
      let listNew = [];
      data.list.forEach((element) => {
        id++;
        listNew.push({
          id: id,
          groupMessage: data.group,
          userMesages: element.userRelationshipUser,
          content: null,
          nickName: null,
          stateMessage: 0,
          typeMessage: -1,
          dateCreated: null,
        });
      });
      data.list.forEach((element) => {
        id++;
        listNew.push({
          id: id,
          groupMessage: data.group,
          userMesages: data.user,
          content: JSON.stringify({
            data: [
              {
                id: 0,
                content: `đã thêm`,
                src: JSON.stringify(element.userRelationshipUser),
              },
            ],
            type: 3,
          }),
          nickName: null,
          stateMessage: 0,
          typeMessage: 1,
          dateCreated: null,
        });
      });
      await api("messagesGroup", "POST", listNew, null);
      dispatch(modalsAction.closeModal());
      dispatch(
        actions.loadAllMessageOfUserByIdRequest(data.user.id, data.group.id)
      );
    } catch (error) {
      console.log(error);
    }
  };
};
//
export const deleteUserOutGroupRequest = (data) => {
  const content = {
    data: [
      {
        id: 0,
        content: `đã xóa`,
        src: JSON.stringify({
          user: data.userDelete,
        }),
      },
    ],
    type: 4,
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
  return async (dispatch) => {
    try {
      await api(
        `deleteMessages/${data.group.id}/${data.userDelete.idUser}`,
        "DELETE",
        null,
        null
      );
      const members = await api(
        `getMemberGroupChat/${data.group.id}`,
        "GET",
        null,
        null
      );
      const message = await api("messages", "POST", mess, null);
      const { view, state } = process.generalStateAndViewMessage(
        members.data,
        message.data,
        data.group
      );
      await Promise.all(view);
      await Promise.all(state);
      //
      dispatch(modalsAction.closeModal());
      dispatch(
        actions.loadAllMessageOfUserByIdRequest(data.user.id, data.group.id)
      );
    } catch (error) {
      console.log(error);
    }
  };
};
//
export const deleteMessage = (data) => {
  return async (dispatch) => {
    let userStateMessage = { ...data.userStateMessage };
    userStateMessage.state = data.typeRemove;
    try {
      if (data.typeRemove === 1) {
        const members = await api(
          `stateMessage/${userStateMessage.stateMessage.id}`,
          "GET",
          null,
          null
        );
        const allPromises = [];
        members.data.forEach(async (element) => {
          const dt = { ...element };
          dt.state = data.typeRemove;
          allPromises.push(await api("stateMessage", "PUT", dt, null));
        });
        await Promise.all(allPromises);
      } else {
        await api("stateMessage", "PUT", userStateMessage, null);
      }
      dispatch(
        actions.loadAllMessageOfUserByIdRequest(data.user.id, data.group.id)
      );
      dispatch(
        sendEventMessage({
          socket: data.socket,
          members: data.members,
          type: 0,
        })
      );
      dispatch(modalsAction.closeModal());
    } catch (error) {
      console.log(error);
    }
  };
};
//
export const seenAllMessageByIdMessage = (data) => {
  return async (dispatch) => {
    try {
      const result = await api(
        `checkViewMessage/${data.group.id}/${data.user.id}`,
        "PUT",
        null,
        null
      );
      if (result.data.length !== 0) {
        await api(
          `updateViewMessage/${data.group.id}/${data.user.id}`,
          "PUT",
          null,
          null
        );
        dispatch(
          actions.loadAllMessageOfUserByIdRequest(data.user.id, data.group.id)
        );
        dispatch(
          sendEventMessage({
            socket: data.socket,
            members: data.members,
            type: 0,
          })
        );
      }
    } catch (error) {
      console.error(error);
    }
  };
};

export const sendEventMessage = (data) => {
  return (dispatch) => {
    data.members.forEach((element) => {
      data.socket.emit("chatMessage", {
        id: element.id,
        type: data.type,
      });
    });
  };
};

export const setTypingMessage = (typing) => {
  return {
    type: Types.SET_TYPING_MESSAGE,
    typing,
  };
};
