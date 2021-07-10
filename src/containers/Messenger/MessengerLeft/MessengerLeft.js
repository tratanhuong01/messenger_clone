import React from "react";
import MessengerLeftTop from "../../../components/Messenger/MessengerLeft/MessengerLeftTop/MessengerLeftTop";
import MessengerLeftSearch from "../../../components/Messenger/MessengerLeft/MessengerLeftSearch/MessengerLeftSearch";
import { useSelector } from "react-redux";

import ItemChatLeft from "../../../components/Messenger/MessengerLeft/ItemChatLeft/ItemChatLeft";

function MessengerLeft(props) {
  //
  const { slug } = props;

  const states = useSelector((state) => {
    return {
      isLogin: state.isLogin,
      messages: state.messages,
    };
  });

  const { isLogin, messages } = states;

  const showAllMessagesUser = messages.list.map((item, index) => {
    return (
      <ItemChatLeft
        item={item}
        key={index}
        idUser={isLogin.user.id}
        slug={slug}
      />
    );
  });

  return (
    <div className="w-24 md:w-5/12 xl:w-1/4 shadow-xl overflow-hidden ">
      <MessengerLeftTop id="MessengerLeftTop" />
      <MessengerLeftSearch id="MessengerLeftSearch" />
      <div
        className="w-full pt-3 wrapper-scrollbar overflow-y-auto my-1 flex flex-wrap 
          justify-center"
        style={{
          maxHeight: `570px`,
        }}
      >
        {messages.list.length === 0 ? (
          <p className="text-center font-semibold text-gray-700 dark:text-gray-300">
            Không có bất kì tin nhắn nào..
          </p>
        ) : (
          showAllMessagesUser
        )}
      </div>
    </div>
  );
}

export default MessengerLeft;
