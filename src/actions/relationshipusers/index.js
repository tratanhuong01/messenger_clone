import * as Types from "../../constants/ActionTypes";
import api from "../../api/api";

export const addRelationsipUserRequest = (relationship) => {
  return (dispatch) => {
    const headers = {
      "Content-Type": "application/json",
    };
    return api("relationshipuser", "POST", relationship, { headers })
      .then((res) => {
        api("add");
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
