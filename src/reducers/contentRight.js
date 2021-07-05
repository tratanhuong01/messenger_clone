import * as Types from "../constants/ActionTypes";
import ListFriendRequest from "../containers/Friend/FriendRight/ListFriendRequest/ListFriendRequest";
import ListGroupChat from "../containers/Friend/FriendRight/ListGroupChat/ListGroupChat";
import ListFriendInvite from "../containers/Friend/FriendRight/ListFriendInvite/ListFriendInvite";

const initialState = {
  active: 1,
  loading: true,
  content: "",
};

const myReducer = (state = initialState, action) => {
  switch (action.type) {
    case Types.LOAD_CONTENT_LIST_CONNECT_FRIEND:
      state.content = <ListFriendRequest list={action.list} />;
      state.active = 3;
      return { ...state };
    case Types.LOAD_CONTENT_LIST_GROUP:
      state.content = <ListGroupChat list={action.list} />;
      state.active = 2;
      return { ...state };
    case Types.LOAD_CONTENT_LIST_INVITE_FRIEND:
      state.content = <ListFriendInvite list={action.list} />;
      state.active = 1;
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
