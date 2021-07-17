import React, { useState } from "react";
import MessengerLeftSearch from "../MessengerLeftSearch/MessengerLeftSearch";
import MessengerLeftTop from "../MessengerLeftTop/MessengerLeftTop";
import SearchMessengerLeft from "../SearchMessengerLeft/SearchMessengerLeft";

function MainContentLeft(props) {
  //
  const { messages, showAllMessagesUser, handle, isShow } = props;

  const [showAllMessage, setShowAllMessage] = useState(true);

  const [dataSearch, setDataSearch] = useState({
    value: "",
    list: [],
  });

  return (
    <div className={`w-full ${isShow && "hidden"}`}>
      <MessengerLeftTop handle={handle} />
      <MessengerLeftSearch
        setShowAllMessage={setShowAllMessage}
        setDataSearch={setDataSearch}
      />
      <SearchMessengerLeft
        showAllMessage={showAllMessage}
        dataSearch={dataSearch}
        setDataSearch={setDataSearch}
      />
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
