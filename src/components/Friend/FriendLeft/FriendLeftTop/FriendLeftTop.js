import React, { useState } from "react";
import { useDispatch } from "react-redux";
import * as modalsAction from "../../../../actions/modals/index";
import * as process from "../../../../functions/process";

function FriendLeftTop(props) {
  //
  const dispatch = useDispatch();

  const { listFriendsCurrent, setListFriendsCurrent } = props;

  const [data, setData] = useState("");

  const onChange = (event) => {
    setData(event.target.value);
    const cloneList = [...listFriendsCurrent];
    setListFriendsCurrent(process.searchUser(event.target.value, cloneList));
  };

  return (
    <div className="w-full my-2 flex relative">
      <div className="w-full flex px-4">
        <input
          type="text"
          placeholder="Tìm kiếm"
          className="w-full rounded-full py-2 bg-gray-200 dark:text-gray-300 
          pl-11 pr-3 flex items-center dark:bg-dark-third"
          onChange={onChange}
          value={data}
        />
        <i
          className="bx bx-search-alt-2 absolute left-7 top-1 text-gray-700 
          text-2xl dark:text-gray-300 "
        ></i>
      </div>
      <div className="flex mx-2">
        <span
          onClick={() => dispatch(modalsAction.openModalAddFriend())}
          className="bx bx-user-plus text-2xl flex items-center cursor-pointer 
          p-2 hover:bg-gray-200 rounded-full w-10 h-10 flex justify-center 
          dark:hover:bg-dark-third dark:text-gray-300"
        ></span>
      </div>
      <div className="flex mx-2">
        <span
          onClick={() => dispatch(modalsAction.openModalCreateGroup())}
          className="bx bx-shape-polygon text-2xl flex items-center cursor-pointer 
           p-2 hover:bg-gray-200 rounded-full w-10 h-10 flex justify-center 
           dark:hover:bg-dark-third dark:text-gray-300"
        ></span>
      </div>
    </div>
  );
}

export default FriendLeftTop;
