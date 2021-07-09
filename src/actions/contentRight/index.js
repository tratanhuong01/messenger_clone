import * as Types from "../../constants/ActionTypes";
import api from "../../api/api";

export const loadListConnectFriendRequest = (id) => {
  return (dispatch) => {
    const headers = {
      "Content-Type": "application/json",
    };
    dispatch(changeContentToLoading());
    return api(`users`, "GET", null, { headers })
      .then((resUsers) => {
        api(`getFriendProposal/${id}`, "GET", null, { headers })
          .then((resProposal) => {
            api(
              "processUserTint",
              "POST",
              {
                idMain: id,
                userList: resUsers.data,
                relationshipUserList: resProposal.data,
              },
              { headers }
            )
              .then((resMain) => {
                dispatch(loadListConnectFriend(resMain.data));
                dispatch(changeLoadingToContent());
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

export const loadListConnectFriend = (list) => {
  return {
    type: Types.LOAD_CONTENT_LIST_CONNECT_FRIEND,
    list,
  };
};

export const loadListGroupRequest = (id) => {
  return (dispatch) => {
    dispatch(changeContentToLoading());
    return api(`getListGroupMessageById/${id}`, "GET", null, null)
      .then((res) => {
        dispatch(loadListGroup(res.data));
        dispatch(changeLoadingToContent());
      })
      .catch((err) => {
        console.log(err);
      });
  };
};

export const loadListGroup = (list) => {
  return {
    type: Types.LOAD_CONTENT_LIST_GROUP,
    list,
  };
};

export const loadListInviteFriendRequest = (id) => {
  return (dispatch) => {
    dispatch(changeContentToLoading());
    return api(`getInviteRequest/${id}/${1}`, "GET", null, null)
      .then((res) => {
        dispatch(loadListInviteFriend(res.data));
        dispatch(changeLoadingToContent());
      })
      .catch((err) => {
        console.log(err);
      });
  };
};

export const loadListInviteFriend = (list) => {
  return {
    type: Types.LOAD_CONTENT_LIST_INVITE_FRIEND,
    list,
  };
};

export const changeLoadingToContent = () => {
  return {
    type: Types.CHANGE_LOADING_TO_CONTENT,
  };
};

export const changeContentToLoading = () => {
  return {
    type: Types.CHANGE_CONTENT_TO_LOADING,
  };
};
