import React from "react";
import ItemFriendInvite from "../../../../components/Friend/FriendRight/ListFriendInvite/ItemFriendInvite/ItemFriendInvite";
import FriendLeftList from "../../../../components/Friend/FriendLeft/FriendLeftList/FriendLeftList";

ListFriendInvite.propTypes = {};

function ListFriendInvite(props) {
  const { list } = props;
  const showItemFriendInvite = list.map((item, index) => {
    return <ItemFriendInvite item={item} key={index} />;
  });
  return (
    <>
      <div className="w-full flex cursor-pointer hover:bg-gray-200">
        <FriendLeftList
          label="Danh sách lời mời"
          icon="bx bx-user-plus"
          bgColor="bg-green-500"
        />
      </div>
      <div className="w-full bg-gray-100 dark:bg-dark-main p-6 h-full">
        <p className="font-semibold mb-4 ml-8 w-full dark:text-gray-300">
          Lời mời kết bạn ({list.length}){" "}
        </p>
        <div className="flex flex-wrap justify-center">
          {showItemFriendInvite}
        </div>
      </div>
    </>
  );
}

export default ListFriendInvite;
