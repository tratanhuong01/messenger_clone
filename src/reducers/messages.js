import * as Types from "../constants/ActionTypes";
import * as process from "../functions/process";

const initialState = {
  list: null,
  data: null,
  color: null,
  name: null,
};
const myReducer = (state = initialState, action) => {
  switch (action.type) {
    //
    case Types.LOAD_ALL_MESSAGE_OF_USER_BY_ID:
      state.list = action.listInList;
      return { ...state };
    //
    case Types.GET_ALL_MESSAGES_BY_GROUP:
      state.data = action.data;
      state.color = action.data[0].colorChat;
      const { name } = process.dataUsersChat(action.data, action.idUser);
      state.name = name;
      return { ...state };
    //
    case Types.UPDATE_COLOR_CHAT:
      state.color = action.color;
      return { ...state };
    //
    case Types.UPDATE_NAME_GROUP_MESSAGE:
      state.name = action.name;
      return { ...state };
    default:
      return state;
  }
};
export default myReducer;
