import React from "react";
import ItemGroupChat from "../../../../components/Friend/FriendRight/ListGroupChat/ItemGroupChat/ItemListGroupChat";
import FriendLeftList from "../../../../components/Friend/FriendLeft/FriendLeftList/FriendLeftList";

ListGroupChat.propTypes = {};

function ListGroupChat(props) {
  return (
    <>
      <FriendLeftList
        label="Danh sách nhóm"
        icon="fa fa-users"
        bgColor="bg-indigo-500"
      />
      <div className="w-full bg-gray-100 p-6 h-full">
        <div>
          <select
            class="w-60 p-2 ml-6 mb-3 rounded-full border-2 border-solid 
            border-gray-300 font-semibold"
          >
            <option value="">Tất cả (2)</option>
            <option value="">Nhóm do tôi quản lí</option>
          </select>
        </div>
        <div className="flex flex-wrap justify-center">
          <ItemGroupChat />
          <ItemGroupChat />
          <ItemGroupChat />
        </div>
      </div>
    </>
  );
}

export default ListGroupChat;
