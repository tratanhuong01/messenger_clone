import React from "react";

FriendLeftList.propTypes = {};

function FriendLeftList(props) {
  const { label, bgColor, icon } = props;
  return (
    <div className="w-full flex p-2.5 cursor-pointer hover:bg-gray-200 dark:hover:bg-dark-third">
      <div className="w-20">
        <div
          className={`w-14 h-14 rounded-full flex justify-center 
          ${bgColor}`}
        >
          <span
            className={`${icon} text-4xl text-white flex items-center`}
          ></span>
        </div>
      </div>
      <div className="w-full flex ml-4 dark:text-gray-300 hidden md:flex">
        <span className="flex items-center text-xm font-semibold">{label}</span>
      </div>
    </div>
  );
}

export default FriendLeftList;
