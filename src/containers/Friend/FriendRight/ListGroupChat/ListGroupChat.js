import React from "react";
import ItemGroupChat from "../../../../components/Friend/FriendRight/ListGroupChat/ItemGroupChat/ItemListGroupChat";
import FriendLeftList from "../../../../components/Friend/FriendLeft/FriendLeftList/FriendLeftList";
import { useSelector } from "react-redux";

function ListGroupChat(props) {
  //
  const states = useSelector((state) => {
    return {
      contentRight: state.contentRight,
    };
  });

  const { contentRight } = states;

  const showListGroups = contentRight.list.map((item, index) => {
    return <ItemGroupChat item={item} key={index} />;
  });

  return (
    <>
      <FriendLeftList
        onClick={() => ""}
        label="Danh sách nhóm"
        icon="fa fa-users"
        bgColor="bg-indigo-500"
      />
      <div className="w-full bg-gray-100  dark:bg-dark-main p-1 md:p-6 h-full">
        <div>
          <select
            className="w-60 p-2 ml-6 mb-3 rounded-full border-2 border-solid 
            border-gray-300 font-semibold dark:bg-dark-second dark:text-gray-300"
          >
            <option value="">Tất cả ({contentRight.list.length})</option>
            <option value="">Nhóm do tôi quản lí</option>
          </select>
        </div>
        <div
          className="flex flex-wrap justify-center overflow-y-auto"
          style={{ maxHeight: "540px" }}
        >
          {showListGroups}
        </div>
      </div>
    </>
  );
}

export default ListGroupChat;
