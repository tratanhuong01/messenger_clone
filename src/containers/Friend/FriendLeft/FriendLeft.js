import React, { useEffect } from "react";
import FriendLeftTop from "../../../components/Friend/FriendLeft/FriendLeftTop/FriendLeftTop";
import AddFriendByEmailPhone from "../../../components/Friend/FriendLeft/AddFriendByEmailPhone/AddFriendByEmailPhone";
import FriendLeftList from "../../../components/Friend/FriendLeft/FriendLeftList/FriendLeftList";
import ItemFriend from "../../../components/Friend/FriendLeft/ItemFriend/ItemFriend";
import { connect } from "react-redux";
import * as contentRightAction from "../../../actions/contentRight/index";
import * as relationshipUsersAction from "../../../actions/relationshipusers/index";

FriendLeft.propTypes = {};

const mapStateToProps = (state) => {
  return {
    isLogin: state.isLogin,
    friends: state.friends,
  };
};

const mapDispatchToProps = (dispatch, props) => {
  return {
    loadListInviteFriendRequest: (id) => {
      dispatch(contentRightAction.loadListInviteFriendRequest(id));
    },
    loadListConnectFriendRequest: (id) => {
      dispatch(contentRightAction.loadListConnectFriendRequest(id));
    },
    loadListGroupRequest: () => {
      dispatch(contentRightAction.loadListGroupRequest());
    },
    loadListFriendRequest: (id) => {
      dispatch(relationshipUsersAction.loadListFriendRequest(id));
    },
  };
};

function FriendLeft(props) {
  const {
    loadListInviteFriendRequest,
    isLogin,
    loadListConnectFriendRequest,
    loadListGroupRequest,
    friends,
    loadListFriendRequest,
  } = props;
  useEffect(() => {
    loadListFriendRequest(isLogin.user.id);
  }, [loadListFriendRequest, isLogin]);
  const showAllFriends = friends.listFriends.map((item, index) => {
    return <ItemFriend item={item} key={index} />;
  });
  return (
    <div
      className="w-24 md:w-5/12 xl:w-1/4 border-r-2 border-solid dark:border-dark-second
      border-gray-100 shadow-xl overflow-hidden pt-2"
    >
      <FriendLeftTop />
      <AddFriendByEmailPhone />
      <div
        className="w-full my-2.5 overflow-y-auto wrapper-content-right"
        style={{ maxHeight: "152px" }}
      >
        <FriendLeftList
          onClick={loadListInviteFriendRequest}
          label="Danh sách lời mời"
          icon="bx bx-user-plus"
          bgColor="bg-green-500"
          idUser={isLogin.user.id}
          index={1}
        />
        <FriendLeftList
          onClick={loadListGroupRequest}
          label="Danh sách nhóm"
          icon="fa fa-users"
          bgColor="bg-indigo-500"
          index={2}
        />
        <FriendLeftList
          onClick={loadListConnectFriendRequest}
          label="Danh sách kết bạn"
          icon="bx bx-user-plus"
          bgColor="bg-blue-500"
          idUser={isLogin.user.id}
          index={3}
        />
      </div>
      <div className="w-full my-2.5">
        <div className="w-full flex py-2 px-4  dark:text-gray-300">
          <div className="w-full md:w-1/2 flex text-sm justify-start">
            <span
              className="w-full flex items-center font-semibold cursor-pointer justify-center 
              md:justify-start"
            >
              Bạn bè ({friends.listFriends.length})
            </span>
          </div>
          <div className="w-1/2 flex justify-end hidden md:flex">
            <span
              className="bx bxs-chevron-right text-xl flex items-center 
              cursor-pointer"
            ></span>
          </div>
        </div>
        <div className="w-full my-2">{showAllFriends}</div>
      </div>
    </div>
  );
}

export default connect(mapStateToProps, mapDispatchToProps)(FriendLeft);
