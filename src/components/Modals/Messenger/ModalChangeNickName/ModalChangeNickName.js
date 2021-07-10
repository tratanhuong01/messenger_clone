import React from "react";
import CloseModal from "../../../UI/CloseModal/CloseModal";
import ItemNickName from "./ItemNickName/ItemNickName";
import { useSelector } from "react-redux";

function ModalChangeNickName(props) {
  //
  const states = useSelector((state) => {
    return {
      messages: state.messages,
    };
  });

  const { messages } = states;

  let users = [];

  messages.data.forEach((element) => {
    let index = users.findIndex((item) => item.idUser === element.idUser);
    if (element.typeMessage === "-1" && index === -1) users.push(element);
  });

  const showAllUsers = users.map((item, index) => {
    return <ItemNickName item={item} key={index} />;
  });

  return (
    <div
      className="shadow-sm  border border-solid border-gray-500 py-3 pl-1.5 pr-1.5 pt-0
      bg-white w-full fixed z-50 top-1/2 left-1/2 dark:bg-dark-second rounded-lg 
      sm:w-10/12 md:w-2/3 lg:w-2/3 xl:w-5/12 transform -translate-x-1/2 -translate-y-1/2"
    >
      <div className="w-full text-center">
        <p className="text-xl font-semibold py-2.5 pb-4 dark:text-white">
          Biệt danh
        </p>
        <CloseModal />
        <hr />
      </div>
      <div
        className="w-full dark:bg-dark-second wrapper-content-right 
        overflow-y-auto"
        style={{ maxHeight: "420px" }}
      >
        {showAllUsers}
      </div>
    </div>
  );
}

export default ModalChangeNickName;
