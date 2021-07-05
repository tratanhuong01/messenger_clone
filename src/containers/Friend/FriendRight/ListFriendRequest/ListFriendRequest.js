import React from "react";
import FriendLeftList from "../../../../components/Friend/FriendLeft/FriendLeftList/FriendLeftList";
import ItemFriendRequest from "../../../../components/Friend/FriendRight/ListFriendRequest/ItemFriendRequest/ItemFriendRequest";

ListFriendRequest.propTypes = {};

function ListFriendRequest(props) {
  const { list } = props;
  const showItemFriendRequest = list.map((item, index) => {
    return <ItemFriendRequest item={item} key={index} />;
  });
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
          Gợi ý kết bạn ({list.length}){" "}
        </p>
        <div className="flex flex-wrap justify-center">
          {showItemFriendRequest}
        </div>
      </div>
    </>
  );
}

export default ListFriendRequest;
