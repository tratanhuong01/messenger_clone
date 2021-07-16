import * as Types from "../../constants/ActionTypes";
import api from "../../api/api";
import * as actions from "../../actions/index";
import * as modalsAction from "../../actions/modals/index";
import * as process from "../../functions/process";

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
      await api("messages", "POST", mess, null);

      dispatch(
        actions.loadAllMessageOfUserByIdRequest(data.user.id, data.group.id)
      );
    } catch (error) {
      console.log(error);
    }
  };
};

export const getAllMessageByGroup = (data, idUser, group) => {
  return {
    type: Types.GET_ALL_MESSAGES_BY_GROUP,
    data,
    idUser,
    group,
  };
};

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
      const allPromises = [
        await api("updateMessage/nickName", "PUT", data.nickName, null),
        await api("messages", "POST", mess, null),
      ];
      await Promise.all(allPromises);
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
    } catch (error) {
      console.log(error);
    }
  };
};

export const updateNickNameByUser = (name) => {
  return {
    type: Types.UPDATE_NAME_GROUP_MESSAGE,
    name,
  };
};

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
      const allPromises = [
        await api(
          `deleteMessages/${data.group.id}/${data.userDelete.idUser}`,
          "DELETE",
          null,
          null
        ),
        await api("messages", "POST", mess, null),
      ];
      await Promise.all(allPromises);
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

export const deleteMessage = (data) => {
  return async (dispatch) => {
    try {
      switch (data.type) {
        case 0:
          break;
        case 1:
          break;
        default:
          break;
      }
    } catch (error) {
      console.log(error);
    }
  };
};
