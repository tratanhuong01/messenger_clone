import * as Types from "../../constants/ActionTypes";
import api from "../../api/api";
import * as contentRightAction from "../contentRight/index";
import * as groupMessagesAction from "../groupmessage/index";

export const addRelationsipUserRequest = (relationship) => {
  return (dispatch) => {
    const headers = {
      "Content-Type": "application/json",
    };
    const dataSend = {
      userRelationshipUser: relationship.userSend,
      idRecivice: relationship.userRecivice.id,
      status: 1,
      block: 0,
    };
    const dataRecivice = {
      userRelationshipUser: relationship.userRecivice,
      idRecivice: relationship.userSend.id,
      status: 2,
      block: 0,
    };
    return api("relationshipuser", "POST", dataSend, { headers })
      .then((res) => {
        api("relationshipuser", "POST", dataRecivice, { headers })
          .then((resMain) => {
            api(`users`, "GET", null, { headers })
              .then((resUsers) => {
                api(
                  `getFriendProposal/${relationship.userSend.id}`,
                  "GET",
                  null,
                  { headers }
                )
                  .then((resProposal) => {
                    api(
                      "processUserTint",
                      "POST",
                      {
                        userList: resUsers.data,
                        relationshipUserList: resProposal.data,
                      },
                      { headers }
                    )
                      .then((resMain) => {
                        dispatch(
                          contentRightAction.loadListConnectFriend(resMain.data)
                        );
                        dispatch(contentRightAction.changeLoadingToContent());
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
      })
      .catch((err) => {
        console.log(err);
      });
  };
};

export const loadInformationProfile = (idMain, idView) => {
  return (dispatch) => {
    return api(
      `checkStatusBetweenTwoUser/${idMain}/${idView}`,
      "GET",
      null,
      null
    )
      .then((res) => {
        if (res.data === "") {
          dispatch(statusFriend(0));
        } else {
          dispatch(statusFriend(res.data.status));
        }
      })
      .catch((err) => {
        console.log(err);
      });
  };
};

export const statusFriend = (status) => {
  return {
    type: Types.STATUS_FRIEND,
    status,
  };
};

export const updateStatusRelationShipRequest = (relationship) => {
  return (dispatch) => {
    const requestOne = api(
      `updateStatusRelationShip/${relationship.userSend.id}/${relationship.userRecivice.id}`,
      "GET",
      null,
      null
    );
    const requestTwo = api(
      `updateStatusRelationShip/${relationship.userRecivice.id}/${relationship.userSend.id}`,
      "GET",
      null,
      null
    );
    const requestFour = api(
      `relationshipuser/${relationship.userSend.id}`,
      "GET",
      null,
      null
    );
    return requestOne
      .then((res) => {
        requestTwo
          .then((res) => {
            api(
              `getInviteRequest/${relationship.userSend.id}/${1}`,
              "GET",
              null,
              null
            )
              .then((resListInvite) => {
                relationship.listInvite = resListInvite.data;
                requestFour
                  .then((resFriend) => {
                    dispatch(loadListFriend(resFriend.data));
                    // console.log(resFriend.data);
                    dispatch(
                      groupMessagesAction.addGroupMessageRequestSingle(
                        relationship
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

export const deleteRelationShipRequest = (relationship) => {
  return (dispatch) => {
    const headers = {
      "Content-Type": "application/json",
    };
    return api(
      `relationshipuser/${relationship.userSend.id}/${relationship.userRecivice.id}`,
      "GET",
      null,
      { headers }
    )
      .then((res) => {
        api(
          `relationshipuser/${relationship.userRecivice.id}/${relationship.userSend.id}`,
          "GET",
          null,
          { headers }
        )
          .then((res) => {
            api(
              `getInviteRequest/${relationship.userSend.id}/${1}`,
              "GET",
              null,
              null
            )
              .then((response) => {
                dispatch(
                  contentRightAction.loadListInviteFriend(response.data)
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

export const loadListFriendRequest = (id) => {
  return (dispatch) => {
    return api(`relationshipuser/${id}`, "GET", null, null)
      .then((res) => {
        dispatch(loadListFriend(res.data));
      })
      .catch((err) => {
        console.log(err);
      });
  };
};

export const loadListFriend = (list) => {
  return {
    type: Types.LOAD_LIST_FRIEND,
    list,
  };
};
