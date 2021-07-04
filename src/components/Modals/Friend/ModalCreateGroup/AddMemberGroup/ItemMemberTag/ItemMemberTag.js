import React from "react";

ItemMemberTag.propTypes = {};

function ItemMemberTag(props) {
  return (
    <div
      className="px-4 py-2 mr-2 mb-2 rounded-full bg-gray-300 dark:bg-dark-third dark:text-gray-300 
        cursor-pointer flex justify-center w-auto break-all"
    >
      <img
        src="./images/gai.jpg"
        className="w-6 h-6 rounded-full object-cover mr-1"
        alt=""
      />
      <span className="font-semibold text-sm mr-1 flex items-center">
        Trà Hưởng
      </span>
      <span className="ml-2 font-bold flex items-center">&times;</span>
    </div>
  );
}

export default ItemMemberTag;
