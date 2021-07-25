import React, { useEffect, useState } from "react";
import FriendLeftTop from "../../../components/Friend/FriendLeft/FriendLeftTop/FriendLeftTop";
import AddFriendByEmailPhone from "../../../components/Friend/FriendLeft/AddFriendByEmailPhone/AddFriendByEmailPhone";
import FriendLeftList from "../../../components/Friend/FriendLeft/FriendLeftList/FriendLeftList";
import ItemFriend from "../../../components/Friend/FriendLeft/ItemFriend/ItemFriend";
import { useDispatch, useSelector } from "react-redux";
import * as relationshipUsersAction from "../../../actions/relationshipusers/index";
import * as contentRightAction from "../../../actions/contentRight/index";

function FriendLeft(props) {
  //
  const states = useSelector((state) => {
    return {
      isLogin: state.isLogin,
      friends: state.friends,
    };
  });

  const { isLogin, friends } = states;

  const dispatch = useDispatch();

  useEffect(() => {
    async function load() {
      await dispatch(
        relationshipUsersAction.loadListFriendRequest(isLogin.user.id)
      );
      setListFriendsCurrent(friends.listFriends);
    }
    load();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [dispatch, isLogin]);

  const [listFriendsCurrent, setListFriendsCurrent] = useState(
    friends.listFriends
  );

  const showAllFriends = listFriendsCurrent.map((item, index) => {
    return <ItemFriend item={item} key={index} />;
  });

  return (
    <div
      className="w-24 md:w-5/12 xl:w-1/4 border-r-2 border-solid dark:border-dark-second
      border-gray-100 shadow-xl overflow-hidden pt-2"
    >
      <FriendLeftTop
        listFriendsCurrent={listFriendsCurrent}
        setListFriendsCurrent={setListFriendsCurrent}
      />
      <AddFriendByEmailPhone />
      <div
        className="w-full my-2.5 overflow-y-auto wrapper-content-right"
        style={{ maxHeight: "152px" }}
      >
        <FriendLeftList
          onClick={() => {
            dispatch(
              contentRightAction.loadListInviteFriendRequest(isLogin.user.id)
            );
          }}
          label="Danh sách lời mời"
          icon="bx bx-user-plus"
          bgColor="bg-green-500"
          idUser={isLogin.user.id}
          index={1}
        />
        <FriendLeftList
          onClick={() => {
            dispatch(contentRightAction.loadListGroupRequest(isLogin.user.id));
          }}
          label="Danh sách nhóm"
          icon="fa fa-users"
          bgColor="bg-indigo-500"
          index={2}
        />
        <FriendLeftList
          onClick={() => {
            dispatch(
              contentRightAction.loadListConnectFriendRequest(isLogin.user.id)
            );
          }}
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
        <div
          className="w-full my-2 overflow-y-auto"
          style={{ maxHeight: "350px" }}
        >
          {showAllFriends}
        </div>
      </div>
    </div>
  );
}

export default FriendLeft;
