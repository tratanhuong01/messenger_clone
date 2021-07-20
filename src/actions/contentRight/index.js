import * as Types from "../../constants/ActionTypes";
import api from "../../api/api";
//
export const loadListConnectFriendRequest = (id) => {
  return async (dispatch) => {
    try {
      dispatch(changeContentToLoading());
      const allPromises = [
        await api(`users`, "GET", null, null),
        await api(`getFriendProposal/${id}`, "GET", null, null),
      ];
      const getResponses = await Promise.all(allPromises);
      const data = {
        idMain: id,
        userList: getResponses[0].data,
        relationshipUserList: getResponses[1].data,
      };
      const result = await api("processUserTint", "POST", data, null);
      dispatch(loadListConnectFriend(result.data));
      dispatch(changeLoadingToContent());
    } catch (error) {
      console.log(error);
    }
  };
};
//
export const loadListConnectFriend = (list) => {
  return {
    type: Types.LOAD_CONTENT_LIST_CONNECT_FRIEND,
    list,
  };
};
//
export const loadListGroupRequest = (id) => {
  return async (dispatch) => {
    try {
      dispatch(changeContentToLoading());
      const result = await api(
        `getListGroupMessageById/${id}`,
        "GET",
        null,
        null
      );
      dispatch(loadListGroup(result.data));
      dispatch(changeLoadingToContent());
    } catch (error) {
      console.log(error);
    }
  };
};
//
export const loadListGroup = (list) => {
  return {
    type: Types.LOAD_CONTENT_LIST_GROUP,
    list,
  };
};
//
export const loadListInviteFriendRequest = (id) => {
  return async (dispatch) => {
    try {
      dispatch(changeContentToLoading());
      const result = await api(
        `getInviteRequest/${id}/${1}`,
        "GET",
        null,
        null
      );
      dispatch(loadListInviteFriend(result.data));
      dispatch(changeLoadingToContent());
    } catch (error) {
      console.log(error);
    }
  };
};
//
export const loadListInviteFriend = (list) => {
  return {
    type: Types.LOAD_CONTENT_LIST_INVITE_FRIEND,
    list,
  };
};
//
export const changeLoadingToContent = () => {
  return {
    type: Types.CHANGE_LOADING_TO_CONTENT,
  };
};
//
export const changeContentToLoading = () => {
  return {
    type: Types.CHANGE_CONTENT_TO_LOADING,
  };
};
//
