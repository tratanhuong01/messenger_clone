import React from "react";
import AddFileControl from "../../../../../components/Messenger/MessengerRight/ControlChat/AddFileControl/AddFileControl";
import AddModalControl from "../../../../../components/Messenger/MessengerRight/ControlChat/AddModalControl/AddModalControl";
import StickerControl from "../../../../../components/Messenger/MessengerRight/ControlChat/StickerControl/StickerControl";
import GifControl from "../../../../../components/Messenger/MessengerRight/ControlChat/GifControl/GifControl";
import InputChatControl from "../../../../../components/Messenger/MessengerRight/ControlChat/InputChatControl/InputChatControl";
import SendIconControl from "../../../../../components/Messenger/MessengerRight/ControlChat/SendIconControl/SendIconControl";

ControlChat.propTypes = {};

function ControlChat(props) {
  return (
    <div
      className="w-full bg-white dark:bg-dark-second relative z-20 pt-2 pb-3 px-1 flex 
      dark:border-dark-third border-t-2 border-solid border-gray-300 items-end"
    >
      <AddModalControl />
      <ul className="mr-3 py-1">
        <AddFileControl />
        <StickerControl />
        <GifControl />
      </ul>
      <div className="w-9/12 relative">
        <InputChatControl />
      </div>
      <SendIconControl />
    </div>
  );
}

export default ControlChat;
