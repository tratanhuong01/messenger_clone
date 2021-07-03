import React from "react";
import MessengerLeftTop from "../../../components/Messenger/MessengerLeft/MessengerLeftTop/MessengerLeftTop";
import MessengerLeftSearch from "../../../components/Messenger/MessengerLeft/MessengerLeftSearch/MessengerLeftSearch";
import ItemChatLeft from "../../../components/Messenger/MessengerLeft/ItemChatLeft/ItemChatLeft";

MessengerLeft.propTypes = {};

function MessengerLeft(props) {
  return (
    <div
      className="w-24 md:w-5/12 xl:w-1/4 border-r-2 border-solid dark:border-dark-second
      border-gray-100 shadow-xl overflow-hidden "
    >
      <MessengerLeftTop id="MessengerLeftTop" />
      <MessengerLeftSearch id="MessengerLeftSearch" />
      <div
        className="w-full pt-3 wrapper-scrollbar overflow-y-auto my-1 flex flex-wrap 
        justify-center"
        style={{
          height: `620px`,
          maxHeight: `620px`,
        }}
      >
        <p className="text-center font-semibold text-gray-700 dark:text-gray-300">
          Không có bất kì tin nhắn nào..
        </p>
      </div>
    </div>
  );
}

export default MessengerLeft;
