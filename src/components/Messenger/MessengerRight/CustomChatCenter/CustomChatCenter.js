import React from "react";

CustomChatCenter.propTypes = {};

function CustomChatCenter(props) {
  return (
    <>
      <li
        className="w-full font-semibold py-2.5 px-4 cursor-pointer 
        hover:bg-gray-300 dark:hover:bg-dark-third rounded-lg dark:text-white relative"
      >
        Tùy chỉnh đoạn chat{" "}
        <i className="fas fa-chevron-down float-right absolute right-5 top-3.5"></i>
      </li>
      <li className="w-full py-1">
        <ul className="w-full">
          <li
            className="w-full py-2.5 px-4 rounded-lg hover:bg-gray-300 dark:hover:bg-dark-third 
            py-2 px-2 font-semibold cursor-pointer dark:text-white"
          >
            <i className="fab fa-ussunnah text-xm dark:text-white"></i>
            &nbsp;&nbsp; Đổi chủ đề
          </li>
          <li
            className="w-full py-2.5 px-4 rounded-lg hover:bg-gray-300 dark:hover:bg-dark-third 
            py-2 px-2 font-semibold cursor-pointer dark:text-white"
          >
            ✌️&nbsp;&nbsp; Thay đổi biểu tượng cảm xúc
          </li>
          <li
            className="w-full py-2.5 px-4 rounded-lg hover:bg-gray-300 dark:hover:bg-dark-third 
            py-2 px-2 font-semibold cursor-pointer dark:text-white"
          >
            <i className="fas fa-pen text-xm dark:text-white"></i>&nbsp;&nbsp;
            Chỉnh sửa biệt danh
          </li>
          <li
            className="w-full py-2.5 px-4 rounded-lg hover:bg-gray-300 dark:hover:bg-dark-third 
            py-2 px-2 font-semibold cursor-pointer dark:text-white"
          >
            <i className="fas fa-search text-xm dark:text-white"></i>
            &nbsp;&nbsp; Tìm kiếm trong cuộc trò chuyện
          </li>
          <li></li>
        </ul>
      </li>
    </>
  );
}

export default CustomChatCenter;
