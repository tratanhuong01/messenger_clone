import * as Config from "../constants/Config";
import ListFriendInvite from "../containers/Friend/FriendRight/ListFriendInvite/ListFriendInvite";
import ListFriendRequest from "../containers/Friend/FriendRight/ListFriendRequest/ListFriendRequest";
import ListGroupChat from "../containers/Friend/FriendRight/ListGroupChat/ListGroupChat";

const routes = [
  {
    path: `${Config.PAGE_FRIEND + Config.PAGE_FRIEND_LIST_CONNECT_FRIEND}`,
    exact: true,
    main: () => <ListFriendRequest />,
  },
  {
    path: `${Config.PAGE_FRIEND + Config.PAGE_FRIEND_LIST_INVITE_FRIEND}`,
    exact: true,
    main: () => <ListFriendInvite />,
  },
  {
    path: `${Config.PAGE_FRIEND + Config.PAGE_FRIEND_LIST_GROUP}`,
    exact: true,
    main: () => <ListGroupChat />,
  },
];
export default routes;
