import React from "react";

ItemFriend.propTypes = {};

function ItemFriend(props) {
  return (
    <div className="w-full py-2 px-4 hover:bg-gray-200 flex cursor-pointer ">
      <div className="object-cover rounded-full relative w-14 h-14">
        <img
          src="./images/boy.jpg"
          alt=""
          className="rounded-full object-cover mx-auto w-14 h-14"
        />
      </div>
      <div className="ml-5 flex">
        <span className="font-semibold flex items-center">Hưởng developer</span>
      </div>
    </div>
  );
}

export default ItemFriend;
