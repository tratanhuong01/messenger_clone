import React from "react";

function FeelMessage(props) {
  //
  return (
    <div className="mess-user-feel z-50 hidden h-auto relative mr-10">
      <div
        className="cursor-pointer color-word absolute top-1/2 pl-2"
        style={{ transform: "translateY(-50%)" }}
      >
        <ul className="w-full flex relative">
          <ul className="-left-2 absolute bottom-full flex flex-column dark:bg-dark-second bg-white rounded-lg border-solid dark:border-dark-third border-gray-300 border rounded-3xl hidden">
            <li
              className="px-2 py-2 text-xl cursor-pointer rounded-full hover:bg-gray-300 
              dark:hover:bg-dark-third"
            >
              👍
            </li>
            <li
              className="px-2 py-2 text-xl cursor-pointer rounded-full hover:bg-gray-300 
              dark:hover:bg-dark-third"
            >
              ❤️
            </li>
            <li
              className="px-2 py-2 text-xl cursor-pointer rounded-full hover:bg-gray-300 
              dark:hover:bg-dark-third"
            >
              😆
            </li>
            <li
              className="px-2 py-2 text-xl cursor-pointer rounded-full hover:bg-gray-300 
              dark:hover:bg-dark-third"
            >
              😥
            </li>
            <li
              className="px-2 py-2 text-xl cursor-pointer rounded-full hover:bg-gray-300 
              dark:hover:bg-dark-third"
            >
              😮
            </li>
            <li
              className="px-2 py-2 text-xl cursor-pointer rounded-full hover:bg-gray-300 
              dark:hover:bg-dark-third"
            >
              😡
            </li>
          </ul>
          <li className="feel-mess px-1 mr-1 rounded-full hover:bg-gray-300 dark:hover:bg-dark-third">
            <i className="far fa-smile text-xm"></i>
          </li>
          <li className="px-1.5 rounded-full hover:bg-gray-300 dark:hover:bg-dark-third">
            <i className="far fa-trash-alt text-xm"></i>
          </li>
        </ul>
      </div>
    </div>
  );
}

export default FeelMessage;
