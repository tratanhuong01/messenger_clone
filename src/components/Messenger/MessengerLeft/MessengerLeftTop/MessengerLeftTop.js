import React from "react";

MessengerLeftTop.propTypes = {};

function MessengerLeftTop(props) {
  return (
    <div className="w-full flex py-2">
      <div
        className="w-1/2 font-semibold text-2xl py-0.5 ml-5 dark:text-white 
        flex "
      >
        <span className="flex items-center">Chat</span>
      </div>
      <div className="w-1/2 my-2 ml-auto">
        <ul className="ml-auto flex float-right">
          <li
            className="w-9 h-9 flex ml-2 bg-gray-300 dark:bg-dark-third rounded-full 
            dark:text-gray-300 cursor-pointer flex justify-center"
          >
            <span className="fas fa-ellipsis-h flex items-center"></span>
          </li>
          <li
            className="w-9 h-9 flex ml-2 bg-gray-300 dark:bg-dark-third rounded-full 
            dark:text-gray-300 cursor-pointer flex justify-center"
          >
            <span className="fas fa-video flex items-center"></span>
          </li>
          <li
            className="w-9 h-9 flex mx-2 bg-gray-300 dark:bg-dark-third rounded-full 
            dark:text-gray-300 cursor-pointer flex justify-center"
          >
            <span className="far fa-edit flex items-center"></span>
          </li>
        </ul>
      </div>
    </div>
  );
}

export default MessengerLeftTop;
