import React from "react";

function ModalViewMemberChat(props) {
  return (
    <div
      className="w-72 absolute hidden border-2 border-solid border-gray-300 
    shadow-lg dark:border-dark-third top-10 right-0 bg-gray-100 dark:bg-dark-second"
    >
      <ul className="w-full">
        <li
          className="w-full px-2.5 py-1.5 hover:bg-gray-300 dark:hover:bg-dark-third  
            cursor-pointer dark:text-white text-xm border-b-2 border-solid border-gray-300 
            dark:border-dark-third font-semibold"
        >
          Tin nhắn
        </li>
        <li
          className="w-full  px-2.5 py-1.5  hover:bg-gray-300 dark:hover:bg-dark-third   
            cursor-pointer dark:text-white text-xm border-b-2 border-solid border-gray-300 
            dark:border-dark-third  font-semibold"
        >
          Xem trang cá nhân
        </li>
        <li
          className="w-full px-2.5 py-1.5  hover:bg-gray-300 dark:hover:bg-dark-third   
            cursor-pointer dark:text-white text-xm border-b-2 border-solid border-gray-300 
            dark:border-dark-third font-semibold"
        >
          Chỉ định làm quản trị viên
        </li>
        <li
          className="w-full  px-2.5 py-1.5  hover:bg-gray-300 dark:hover:bg-dark-third   
            cursor-pointer dark:text-white text-xm border-b-2 border-solid border-gray-300 
            dark:border-dark-third font-semibold text-gray-800"
        >
          Xóa thành viên
        </li>
      </ul>
    </div>
  );
}

export default ModalViewMemberChat;
