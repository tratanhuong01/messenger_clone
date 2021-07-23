import React, { useState } from "react";
import CloseModal from "../../../UI/CloseModal/CloseModal";
import emojii from "../../../../emoji.json";
import { useDispatch, useSelector } from "react-redux";
import * as modalsAction from "../../../../actions/modals/index";
import * as groupMessagesAction from "../../../../actions/groupmessage/index";

function ModalEmojii(props) {
  //
  const states = useSelector((state) => {
    return {
      isLogin: state.isLogin,
      messages: state.messages,
      socket: state.socket,
    };
  });

  const dispatch = useDispatch();

  const { isLogin, messages, socket } = states;

  const listCategoryFun = () => {
    let listCategory = [];
    emojii.forEach((element) => {
      let index = listCategory.findIndex(
        (item) => element.category === item.category
      );
      if (index === -1)
        listCategory.push({
          thumnail: element.emoji,
          category: element.category,
        });
    });
    return listCategory;
  };

  const listCategory = listCategoryFun();

  const [categoryActive, setCategoryActive] = useState(
    listCategory[0].category
  );

  const showCategoryAll = listCategory.map((item, index) => {
    return (
      <li
        onClick={() => setCategoryActive(item.category)}
        className={`flex justify-center py-2 px-3 mx-0.5 rounded-lg text-xl cursor-pointer 
        ${
          categoryActive === item.category
            ? " bg-gray-300 dark:bg-dark-third"
            : " hover:bg-gray-300 dark:hover:bg-dark-third"
        }`}
        key={index}
      >
        {item.thumnail}
      </li>
    );
  });

  const getEmojiiByCategory = (category) => {
    let listEmojii = [];
    emojii.forEach((element) => {
      if (element.category === category) listEmojii.push(element.emoji);
    });
    return listEmojii;
  };

  const [disabled, setDisabled] = useState(true);

  const [icon, setIcon] = useState("");

  const data = {
    data: {
      icon: icon,
      id: messages.group.id,
    },
    group: messages.group,
    user: isLogin.user,
    socket: socket,
    members: messages.members,
  };

  const showByCategoryAll = getEmojiiByCategory(categoryActive).map(
    (item, index) => {
      return (
        <div
          onClick={() => {
            setIcon(item);
            setDisabled(false);
          }}
          className={`w-12 h-12 flex justify-center text-2xl cursor-pointer items-center 
          ${
            item !== icon
              ? "hover:bg-gray-300 dark:hover:bg-dark-third"
              : "bg-gray-300 dark:bg-dark-third"
          }  `}
          key={index}
        >
          {item}
        </div>
      );
    }
  );

  return (
    <div
      className="shadow-sm  border border-solid border-gray-500 py-3 pl-1.5 pr-1.5 pt-0
    bg-white w-full fixed z-50 top-1/2 left-1/2 dark:bg-dark-second rounded-lg 
    sm:w-10/12 md:w-2/3 lg:w-2/3 xl:w-1/3 transform -translate-x-1/2 -translate-y-1/2"
    >
      <div className="w-full text-center">
        <p className="text-xl font-semibold py-2.5 pb-4 dark:text-white">
          Biểu tượng cảm xúc
        </p>
        <CloseModal />
        <hr />
      </div>
      <ul className="flex w-full m-2 ">{showCategoryAll}</ul>
      <div
        className="w-full dark:bg-dark-second wrapper-content-right flex  
        overflow-y-auto flex-wrap justify-center"
        style={{ maxHeight: "320px" }}
      >
        {showByCategoryAll}
      </div>
      <div className="text-right pt-3">
        <button
          onClick={() => dispatch(modalsAction.closeModal())}
          type="button"
          className="cursor-pointer w-1/5 border-none 
          font-semibold text-blue-500 rounded-lg p-2 mx-2"
        >
          Hủy
        </button>
        <button
          onClick={() =>
            dispatch(groupMessagesAction.updateIonChatMessageRequest(data))
          }
          type="button"
          className={`w-1/4 border-none font-semibold text-white 
          rounded-lg p-2 mx-2 ${
            disabled ? "bg-gray-500 cursor-not-allowed " : "bg-blue-500"
          }`}
          disabled={icon.length > 0 && disabled === false ? false : true}
        >
          Lưu
        </button>
      </div>
    </div>
  );
}

export default ModalEmojii;
