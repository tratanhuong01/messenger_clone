import React from "react";
import CloseModal from "../../../UI/CloseModal/CloseModal";
import ItemMemberChat from "./ItemMemberChat/ItemMemberChat";

function ModalMemberChat(props) {
  return (
    <div
      className="w-11/12 fixed top-50per left-50per dark:bg-dark-second transform-translate-50per 
      pb-2 pt-2 opacity-100 bg-white z-50 border-2 border-solid border-gray-300 sm:w-4/5 sm:mt-12 
      lg:w-3/5 xl:w-5/12 xl:mt-4 dark:border-dark-main shadow-1 rounded-lg"
    >
      <div className="w-full bg-white dark:bg-dark-second pl-2 pr-4 fixed top-2 block z-10">
        <CloseModal />
        <ul className="w-full flex mb-2">
          <li
            className="font-semibold text-blue-500 px-4 py-3 border-b-4 border-solid
              border-blue-500 cursor-pointer"
          >
            Tất cả
          </li>
          <li
            className="font-semibold text-gray-700 px-4 py-3 cursor-pointer dark:text-white 
              hover:bg-gray-200 dark:hover:bg-dark-third"
          >
            Quản trị viên
          </li>
        </ul>
      </div>
      <div
        className="w-full dark:bg-dark-second pt-16 wrapper-content-right 
      overflow-y-auto"
        style={{ maxHeight: "420px", height: "420px" }}
      >
        <ItemMemberChat />
        <ItemMemberChat />
        <ItemMemberChat />
      </div>
    </div>
  );
}

export default ModalMemberChat;
