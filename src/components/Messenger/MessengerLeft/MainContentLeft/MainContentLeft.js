import React, { useEffect, useState } from "react";
import MessengerLeftSearch from "../MessengerLeftSearch/MessengerLeftSearch";
import MessengerLeftTop from "../MessengerLeftTop/MessengerLeftTop";
import SearchMessengerLeft from "../SearchMessengerLeft/SearchMessengerLeft";
import api from "../../../../api/api";

function MainContentLeft(props) {
  //
  const { messages, showAllMessagesUser, handle, isShow } = props;

  const [showAllMessage, setShowAllMessage] = useState(true);

  return (
    <div className={`w-full ${isShow && "hidden"}`}>
      <MessengerLeftTop handle={handle} />
      <MessengerLeftSearch setShowAllMessage={setShowAllMessage} />
      {showAllMessage !== false && <SearchMessengerLeft />}
      <div
        className={`w-full pt-3 wrapper-scrollbar overflow-y-auto my-1 flex flex-wrap 
        justify-center ${showAllMessage ? "" : "hidden"}`}
        style={{
          maxHeight: `575px`,
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

export default MainContentLeft;
