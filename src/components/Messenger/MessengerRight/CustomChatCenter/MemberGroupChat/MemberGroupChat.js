import React, { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import ItemMember from "./ItemMember/ItemMember";
import * as process from "../../../../../functions/process";
import * as modalsAction from "../../../../../actions/modals/index";

function MemberGroupChat(props) {
  //
  const [show, setShow] = useState(false);

  const states = useSelector((state) => {
    return {
      messages: state.messages,
      isLogin: state.isLogin,
    };
  });

  const dispatch = useDispatch();

  const { messages, isLogin } = states;

  let { user } = process.dataUsersChat(messages.data, isLogin.user.id);

  const getLeader = () => {
    let data = null;
    messages.data.forEach((element) => {
      if (element.typeMessage === "1")
        if (JSON.parse(element.content).type === -1) data = element;
    });
    return data;
  };
  const showMembers = user.map((item, index) => {
    return <ItemMember item={item} key={index} leader={getLeader()} />;
  });

  return (
    <>
      <li
        onClick={() => setShow(!show)}
        className="w-full font-semibold py-2.5 px-4 cursor-pointer 
        hover:bg-gray-300 dark:hover:bg-dark-third rounded-lg dark:text-white relative"
      >
        Thành viên trong đoạn chat{" "}
        <i className="fas fa-chevron-down float-right absolute right-5 top-3.5"></i>
      </li>
      <li className={`w-full py-1 ${show ? "" : "hidden"}`}>
        <ul className="w-full">
          {showMembers}
          <li
            className="w-full py-3 px-4 hover:bg-gray-200 dark:hover:bg-dark-third flex 
            cursor-pointer rounded-sm"
          >
            <div className="w-12 flex justiy-center mr-3">
              <span
                className="bx bx-plus w-10 h-10 flex items-center justify-center rounded-full 
              bg-gray-400 dark:bg-dark-second text-2xl cursor-pointer dark:text-gray-300 text-gray-700"
              ></span>
            </div>
            <div
              onClick={() => dispatch(modalsAction.openModalMemberGroupChat())}
              className="w-full flex items-center dark:text-gray-300 flex-wrap"
            >
              <p className="mb-0.5 w-full font-semibold">Thêm người</p>
            </div>
          </li>
        </ul>
      </li>
    </>
  );
}

export default MemberGroupChat;
