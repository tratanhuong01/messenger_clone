import React from "react";

function ItemMember(props) {
  //
  return (
    <li
      className="w-full py-2 px-4 hover:bg-gray-200 dark:hover:bg-dark-third flex 
        cursor-pointer rounded-sm"
    >
      <div className="w-12 flex justiy-center mr-1">
        <img
          src="../images/male/1.jpg"
          className="w-10 h-10 rounded-full object-cover flex items-center"
          alt=""
        />
      </div>
      <div
        className="w-full flex items-center dark:text-gray-300 
      font-semibold"
      >
        Trà Hưởng
      </div>
      <div className="w-10 flex justify-center">
        <span className="bx bx-dots-horizontal-rounded text-2xl flex items-center"></span>
      </div>
    </li>
  );
}

export default ItemMember;
