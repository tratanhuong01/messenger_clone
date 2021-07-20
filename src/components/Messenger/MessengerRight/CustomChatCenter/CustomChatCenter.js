import React, { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import * as modalsAction from "../../../../actions/modals/index";
import ChangeImageGroup from "./ChangeImageGroup/ChangeImageGroup";
import ItemCustomChatCenter from "./ItemCustomChatCenter/ItemCustomChatCenter";
import MemberGroupChat from "./MemberGroupChat/MemberGroupChat";

function CustomChatCenter(props) {
  //
  const dispatch = useDispatch();

  const states = useSelector((state) => {
    return {
      messages: state.messages,
    };
  });

  const [show, setShow] = useState(true);

  const { messages } = states;

  return (
    <>
      <li
        onClick={() => setShow(!show)}
        className="w-full font-semibold py-2.5 px-4 cursor-pointer 
        hover:bg-gray-300 dark:hover:bg-dark-third rounded-lg dark:text-white relative"
      >
        Tùy chỉnh đoạn chat{" "}
        <i className="fas fa-chevron-down float-right absolute right-5 top-3.5"></i>
      </li>
      <li className={`w-full py-1 ${show ? "" : "hidden"}`}>
        <ul className="w-full">
          {messages.data[0].typeGroupMessage === "0" ? (
            ""
          ) : (
            <ItemCustomChatCenter
              onClick={() => dispatch(modalsAction.openModalChangeNameGroup())}
              icon={{ icon: "fas fa-users", type: 0 }}
              name={"Đổi tên đoạn chat"}
            />
          )}
          {messages.data[0].typeGroupMessage === "0" ? (
            ""
          ) : (
            <ChangeImageGroup />
          )}
          <ItemCustomChatCenter
            onClick={() => dispatch(modalsAction.openModalChangeColorChat())}
            icon={{ icon: "fab fa-ussunnah", type: 0 }}
            name={"Đổi chủ đề"}
          />
          <ItemCustomChatCenter
            onClick={() => dispatch(modalsAction.openModalChangeIconChat())}
            icon={{ icon: messages.icon, type: 1 }}
            name={"Thay đổi biểu tượng cảm xúc"}
          />
          <ItemCustomChatCenter
            onClick={() => dispatch(modalsAction.openModalChangeNickName())}
            icon={{ icon: "fas fa-pen", type: 0 }}
            name={"Chỉnh sửa biệt danh"}
          />
          <ItemCustomChatCenter
            onClick={() => dispatch(modalsAction.openModalChangeNickName())}
            icon={{ icon: "fas fa-search", type: 0 }}
            name={"Tìm kiếm trong cuộc trò chuyện"}
          />
        </ul>
      </li>
      {messages.data[0].typeGroupMessage === "0" ? "" : <MemberGroupChat />}
    </>
  );
}

export default CustomChatCenter;
