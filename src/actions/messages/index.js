import * as Types from "../../constants/ActionTypes";
import api from "../../api/api";
import * as actions from "../../actions/index";
import * as modalsAction from "../../actions/modals/index";

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

export const getAllMessageByGroup = (data, idUser, group) => {
  return {
    type: Types.GET_ALL_MESSAGES_BY_GROUP,
    data,
    idUser,
    group,
  };
};

export const updateNickNameByUserRequest = (data) => {
  return (dispatch) => {
    const headers = {
      "Content-Type": "application/json",
    };
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

    return api("updateMessage/nickName", "PUT", data.nickName, null)
      .then((res) => {
        api("messages", "POST", mess, { headers })
          .then((res) => {
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

export const updateNickNameByUser = (name) => {
  return {
    type: Types.UPDATE_NAME_GROUP_MESSAGE,
    name,
  };
};

export const addMemberToGroupMessageRequest = (data) => {
  return async (dispatch) => {
    const headers = {
      "Content-Type": "application/json",
    };

    let rs = await api("getIdNewMessage", "GET", null, null);

    if (rs.status !== 200) console.log("error");

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

    rs = await api("messagesGroup", "POST", listNew, { headers });

    if (rs.status !== 200) console.log("error");

    dispatch(modalsAction.closeModal());
    dispatch(
      actions.loadAllMessageOfUserByIdRequest(data.user.id, data.group.id)
    );
  };
};

export const deleteUserOutGroupRequest = (data) => {
  return (dispatch) => {
    return api(`deleteMessages/${data.group.id}/${data.userDelete.idUser}`)
      .then((res) => {
        dispatch(modalsAction.closeModal());
        dispatch(
          actions.loadAllMessageOfUserByIdRequest(data.user.id, data.group.id)
        );
      })
      .catch((err) => {
        console.log(err);
      });
  };
};
