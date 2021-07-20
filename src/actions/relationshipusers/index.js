import * as Types from "../../constants/ActionTypes";
import api from "../../api/api";
import * as contentRightAction from "../contentRight/index";
import * as groupMessagesAction from "../groupmessage/index";
//
export const addRelationsipUserRequest = (relationship) => {
  const dataSend = {
    userRelationshipUser: relationship.userSend,
    idReceive: relationship.userReceive.id,
    status: 1,
    block: 0,
  };
  const dataReceive = {
    userRelationshipUser: relationship.userReceive,
    idReceive: relationship.userSend.id,
    status: 2,
    block: 0,
  };
  return async (dispatch) => {
    try {
      const allPromises = [
        await api("relationshipUser", "POST", dataSend, null),
        await api("relationshipUser", "POST", dataReceive, null),
        await api(`users`, "GET", null, null),
        await api(
          `getFriendProposal/${relationship.userSend.id}`,
          "GET",
          null,
          null
        ),
      ];
      const getResponses = await Promise.all(allPromises);
      const userTint = await api(
        "processUserTint",
        "POST",
        {
          userList: getResponses[2].data,
          relationshipUserList: getResponses[3].data,
          idMain: relationship.userSend.id,
        },
        null
      );
      //
      dispatch(contentRightAction.loadListConnectFriend(userTint.data));
      dispatch(contentRightAction.changeLoadingToContent());
    } catch (error) {
      console.log(error);
    }
  };
};
//
export const loadInformationProfile = (idMain, idView) => {
  return async (dispatch) => {
    try {
      const result = await api(
        `checkStatusBetweenTwoUser/${idMain}/${idView}`,
        "GET",
        null,
        null
      );
      if (result.data === "") {
        dispatch(statusFriend(0));
      } else {
        dispatch(statusFriend(result.data.status));
      }
    } catch (error) {
      console.log(error);
    }
  };
};
//
export const statusFriend = (status) => {
  return {
    type: Types.STATUS_FRIEND,
    status,
  };
};
//
export const updateStatusRelationShipRequest = (relationships) => {
  let relationship = { ...relationships };
  const idSend = relationship.userSend.id;
  const idReceive = relationship.userReceive.id;
  return async (dispatch) => {
    try {
      const allPromises = [
        await api(
          `updateStatusRelationShip/${idSend}/${idReceive}`,
          "GET",
          null,
          null
        ),
        await api(
          `updateStatusRelationShip/${idReceive}/${idSend}`,
          "GET",
          null,
          null
        ),
      ];
      await Promise.all(allPromises);
      const listInvite = await api(
        `getInviteRequest/${idSend}/${1}`,
        "GET",
        null,
        null
      );
      relationship.listInvite = listInvite.data;
      const listFriend = await api(
        `relationshipUser/${idSend}`,
        "GET",
        null,
        null
      );
      //
      dispatch(loadListFriend(listFriend.data));
      dispatch(groupMessagesAction.addGroupMessageRequestSingle(relationship));
    } catch (error) {
      console.log(error);
    }
  };
};
//
export const deleteRelationShipRequest = (relationships) => {
  let relationship = { ...relationships };
  const idSend = relationship.userSend.id;
  const idReceive = relationship.userReceive.id;
  return async (dispatch) => {
    try {
      const allPromises = [
        await api(`relationshipUser/${idSend}/${idReceive}`, "GET", null, null),
        await api(`relationshipUser/${idReceive}/${idSend}`, "GET", null, null),
      ];
      await Promise.all(allPromises);
      const result = await api(
        `getInviteRequest/${idSend}/${1}`,
        "GET",
        null,
        null
      );
      dispatch(contentRightAction.loadListInviteFriend(result.data));
    } catch (error) {
      console.log(error);
    }
  };
};
//
export const loadListFriendRequest = (id) => {
  return async (dispatch) => {
    try {
      const result = await api(`relationshipUser/${id}`, "GET", null, null);
      //
      dispatch(loadListFriend(result.data));
    } catch (error) {
      console.log(error);
    }
  };
};
//
export const loadListFriend = (list) => {
  return {
    type: Types.LOAD_LIST_FRIEND,
    list,
  };
};
//
