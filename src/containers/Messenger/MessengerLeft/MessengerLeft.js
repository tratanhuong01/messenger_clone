import React from "react";
import MessengerLeftTop from "../../../components/Messenger/MessengerLeft/MessengerLeftTop/MessengerLeftTop";
import MessengerLeftSearch from "../../../components/Messenger/MessengerLeft/MessengerLeftSearch/MessengerLeftSearch";
import ItemChatLeft from "../../../components/Messenger/MessengerLeft/ItemChatLeft/ItemChatLeft";

MessengerLeft.propTypes = {};

function MessengerLeft(props) {
  return (
    <div
      className="w-1/4 border-r-2 border-solid dark:border-dark-second
      border-gray-100 shadow-xl overflow-hidden"
    >
      <MessengerLeftTop id="MessengerLeftTop" />
      <MessengerLeftSearch id="MessengerLeftSearch" />
      <div
        className="w-full pt-3 wrapper-scrollbar overflow-y-auto my-1"
        style={{
          height: `620px`,
          maxHeight: `620px`,
        }}
      >
        <ItemChatLeft />
        <ItemChatLeft />
        <ItemChatLeft />
        <ItemChatLeft />
        <ItemChatLeft />
        <ItemChatLeft />
        <ItemChatLeft />
        <ItemChatLeft />
        <ItemChatLeft />
        <ItemChatLeft />
        <ItemChatLeft />
        <ItemChatLeft />
        <ItemChatLeft />
      </div>
    </div>
  );
}

export default MessengerLeft;
