import React from "react";

function ItemCustomChatCenter(props) {
  //
  const { onClick, name, icon } = props;

  return (
    <li
      onClick={() => onClick()}
      className="w-full py-2.5 px-4 rounded-lg hover:bg-gray-300 dark:hover:bg-dark-third 
        py-2 px-2 font-semibold cursor-pointer dark:text-white flex"
    >
      <div className="flex justity-center w-8">
        <span
          className={`${
            icon.type === 0 ? icon.icon : ""
          } text-xm dark:text-white flex items-center`}
        >
          {icon.type === 0 ? "" : icon.icon}
        </span>
      </div>
      <div className="flex items-center">{name}</div>
    </li>
  );
}

export default ItemCustomChatCenter;
