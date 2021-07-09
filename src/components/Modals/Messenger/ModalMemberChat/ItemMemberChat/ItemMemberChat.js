import React from "react";

function ItemMemberChat(props) {
  return (
    <div
      className="w-full hover:bg-gray-200 dark:hover:bg-dark-third 
        flex cursor-pointer relative p-2"
    >
      <div className="w-1/12">
        <img
          src="http://res.cloudinary.com/tratahuong01/image/upload/v1623289152/Avatar/d5peo862j01zy9btpuee.jpg"
          className="w-12 h-12 object-cover rounded-full"
          alt=""
        />
      </div>
      <div className="w-10/12 flex pl-3">
        <p className="flex items-center flex-wrap">
          <span className="w-full font-semibold dark:text-white">
            Trà Hưởng
          </span>
        </p>
      </div>
      <div className="w-1/12 flex justify-center">
        <i
          className="bx bx-dots-horizontal-rounded text-3xl flex 
          items-center cursor-pointer dark:text-white"
        ></i>
      </div>
    </div>
  );
}

export default ItemMemberChat;
