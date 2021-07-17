import api from "../../api/api";
import * as actions from "../../actions/index";

export const addFeelRequest = (data) => {
  let feel = {
    feelUser: data.userFeel,
    feelMessage: data.message,
    typeFeel: data.type,
    iconFeel: data.icon,
  };
  return async (dispatch) => {
    try {
      //
      const message = await api(
        `messages/${data.message.idMessage}`,
        "GET",
        null,
        null
      );

      const result = await api(
        `checkIsFeel/${data.message.idMessage}/${data.userFeel.id}`,
        "GET",
        null,
        null
      );
      feel.feelMessage = message.data;

      if (result.data === "" || result.data === null)
        await api("feel", "POST", feel, null);
      else {
        feel.id = result.data.id;
        await api("feel", "PUT", feel, null);
      }
      dispatch(
        actions.loadAllMessageOfUserByIdRequest(data.userFeel.id, data.group.id)
      );
    } catch (error) {
      console.log(error);
    }
  };
};

export const deleteFeel = (data) => {
  return async (dispatch) => {
    try {
      await api(
        `deleteFeel/${data.message.idMessage}/${data.userFeel.id}`,
        "DELETE",
        null,
        null
      );

      dispatch(
        actions.loadAllMessageOfUserByIdRequest(data.userFeel.id, data.group.id)
      );
      //
    } catch (error) {
      console.log(error);
    }
  };
};
