import React from "react";

FriendLeftTop.propTypes = {};

function FriendLeftTop(props) {
  return (
    <div className="w-full my-2 flex relative">
      <div className="w-full flex px-4">
        <input
          type="text"
          placeholder="Tìm kiếm"
          className="w-full rounded-full py-2 bg-gray-200 
          pl-11 pr-3 flex items-center"
        />
        <i
          className="bx bx-search-alt-2 absolute left-7 top-1 text-gray-700 
          text-2xl"
        ></i>
      </div>
      <div className="flex mx-2">
        <span
          className="bx bx-user-plus text-2xl flex items-center cursor-pointer 
          p-2 hover:bg-gray-200 rounded-full w-10 h-10 flex justify-center"
        ></span>
      </div>
      <div className="flex mx-2">
        <span
          className="bx bx-shape-polygon text-2xl flex items-center cursor-pointer 
           p-2 hover:bg-gray-200 rounded-full w-10 h-10 flex justify-center"
        ></span>
      </div>
    </div>
  );
}

export default FriendLeftTop;
