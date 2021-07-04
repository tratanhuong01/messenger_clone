import React from "react";
import { connect } from "react-redux";
import * as modalsAction from "../../../../actions/modals/index";

FriendLeftTop.propTypes = {};

const mapDispatchToProps = (dispatch, props) => {
  return {
    openModalAddFriend: () => {
      dispatch(modalsAction.openModalAddFriend());
    },
    openModalCreateGroup: () => {
      dispatch(modalsAction.openModalCreateGroup());
    },
  };
};

function FriendLeftTop(props) {
  const { openModalAddFriend, openModalCreateGroup } = props;
  return (
    <div className="w-full my-2 flex relative">
      <div className="w-full flex px-4">
        <input
          type="text"
          placeholder="Tìm kiếm"
          className="w-full rounded-full py-2 bg-gray-200 dark:text-gray-300 
          pl-11 pr-3 flex items-center dark:bg-dark-third"
        />
        <i
          className="bx bx-search-alt-2 absolute left-7 top-1 text-gray-700 
          text-2xl dark:text-gray-300 "
        ></i>
      </div>
      <div className="flex mx-2">
        <span
          onClick={openModalAddFriend}
          className="bx bx-user-plus text-2xl flex items-center cursor-pointer 
          p-2 hover:bg-gray-200 rounded-full w-10 h-10 flex justify-center 
          dark:hover:bg-dark-third dark:text-gray-300"
        ></span>
      </div>
      <div className="flex mx-2">
        <span
          onClick={openModalCreateGroup}
          className="bx bx-shape-polygon text-2xl flex items-center cursor-pointer 
           p-2 hover:bg-gray-200 rounded-full w-10 h-10 flex justify-center 
           dark:hover:bg-dark-third dark:text-gray-300"
        ></span>
      </div>
    </div>
  );
}

export default connect(null, mapDispatchToProps)(FriendLeftTop);
