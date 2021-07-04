import React from "react";
import FriendLeftList from "../../../../components/Friend/FriendLeft/FriendLeftList/FriendLeftList";
import ItemFriendRequest from "../../../../components/Friend/FriendRight/ListFriendRequest/ItemFriendRequest/ItemFriendRequest";

ListFriendRequest.propTypes = {};

function ListFriendRequest(props) {
  return (
    <>
      <div className="w-full flex cursor-pointer hover:bg-gray-200">
        <FriendLeftList
          label="Danh sách kết bạn"
          icon="bx bx-user-plus"
          bgColor="bg-blue-500"
        />
      </div>
      <div className="w-full bg-gray-100 dark:bg-dark-main p-6">
        <p className="font-semibold mb-4 ml-8 w-full dark:text-gray-300">
          Gợi ý kết bạn (46){" "}
        </p>
        <div className="flex flex-wrap justify-center">
          <ItemFriendRequest />
          <ItemFriendRequest />
          <ItemFriendRequest />
          <ItemFriendRequest />
          <ItemFriendRequest />
          <ItemFriendRequest />
          <ItemFriendRequest />
          <ItemFriendRequest />
        </div>
      </div>
    </>
  );
}

export default ListFriendRequest;
