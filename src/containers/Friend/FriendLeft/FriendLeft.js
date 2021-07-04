import React from "react";
import FriendLeftTop from "../../../components/Friend/FriendLeft/FriendLeftTop/FriendLeftTop";
import AddFriendByEmailPhone from "../../../components/Friend/FriendLeft/AddFriendByEmailPhone/AddFriendByEmailPhone";
import FriendLeftList from "../../../components/Friend/FriendLeft/FriendLeftList/FriendLeftList";
import ItemFriend from "../../../components/Friend/FriendLeft/ItemFriend/ItemFriend";

FriendLeft.propTypes = {};

function FriendLeft(props) {
  return (
    <div
      className="w-24 md:w-5/12 xl:w-1/4 border-r-2 border-solid dark:border-dark-second
    border-gray-100 shadow-xl overflow-hidden "
    >
      <FriendLeftTop />
      <AddFriendByEmailPhone />
      <div className="w-full my-2.5">
        <FriendLeftList
          label="Danh sách kết bạn"
          icon="bx bx-user-plus"
          bgColor="bg-blue-500"
        />
        <FriendLeftList
          label="Danh sách nhóm"
          icon="fa fa-users"
          bgColor="bg-indigo-500"
        />
      </div>
      <div className="w-full my-2.5">
        <div className="w-full flex py-2 px-4  dark:text-gray-300">
          <div className="w-full md:w-1/2 flex text-sm justify-start">
            <span
              className="w-full flex items-center font-semibold cursor-pointer justify-center 
              md:justify-start"
            >
              Bạn bè (65)
            </span>
          </div>
          <div className="w-1/2 flex justify-end hidden md:flex">
            <span
              className="bx bxs-chevron-right text-xl flex items-center 
              cursor-pointer"
            ></span>
          </div>
        </div>
        <div className="w-full my-2">
          <ItemFriend />
          <ItemFriend />
          <ItemFriend />
          <ItemFriend />
        </div>
      </div>
    </div>
  );
}

export default FriendLeft;
