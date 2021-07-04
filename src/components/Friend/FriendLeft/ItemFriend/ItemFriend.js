import React from "react";

ItemFriend.propTypes = {};

function ItemFriend(props) {
  return (
    <div
      className="w-full md:py-2 md:px-4 py-3 hover:bg-gray-200 flex cursor-pointer 
    dark:hover:bg-dark-third"
    >
      <div className="object-cover rounded-full mx-auto md:m-0 relative w-14 h-14">
        <img
          src="./images/boy.jpg"
          alt=""
          className="rounded-full object-cover mx-auto w-14 h-14"
        />
      </div>
      <div className="ml-5 hidden md:flex">
        <span className="font-semibold flex items-center dark:text-gray-300">
          Hưởng developer
        </span>
      </div>
    </div>
  );
}

export default ItemFriend;
