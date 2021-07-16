import * as Types from "../constants/ActionTypes";
import ListFriendRequest from "../containers/Friend/FriendRight/ListFriendRequest/ListFriendRequest";
import ListGroupChat from "../containers/Friend/FriendRight/ListGroupChat/ListGroupChat";
import ListFriendInvite from "../containers/Friend/FriendRight/ListFriendInvite/ListFriendInvite";

const initialState = {
  active: 1,
  loading: true,
  content: "",
  list: [],
};

const myReducer = (state = initialState, action) => {
  switch (action.type) {
    case Types.LOAD_CONTENT_LIST_CONNECT_FRIEND:
      state.content = <ListFriendRequest />;
      state.active = 3;
      state.list = action.list;
      return { ...state };
    case Types.LOAD_CONTENT_LIST_GROUP:
      state.content = <ListGroupChat />;
      state.active = 2;
      state.list = action.list;
      return { ...state };
    case Types.LOAD_CONTENT_LIST_INVITE_FRIEND:
      state.content = <ListFriendInvite />;
      state.active = 1;
      state.list = action.list;
      return { ...state };
    case Types.CHANGE_LOADING_TO_CONTENT:
      state.loading = false;
      return { ...state };
    case Types.CHANGE_CONTENT_TO_LOADING:
      state.loading = true;
      return { ...state };
    default:
      return state;
  }
};

export default myReducer;
