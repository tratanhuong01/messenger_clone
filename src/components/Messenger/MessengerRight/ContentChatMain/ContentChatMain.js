import React from "react";
import TimeChat from "../../../ItemChat/TimeChat/TimeChat";
import ChatRight from "../../../ItemChat/ChatRight/ChatRight";
import ChatCenter from "../../../ItemChat/ChatCenter/ChatCenter";
import FirstSingleChat from "../../../ItemChat/FirstSingleChat/FirstSingleChat";

ContentChatMain.propTypes = {};

function ContentChatMain(props) {
  return (
    <div
      className="w-full p-1 wrapper-content-right overflow-y-auto overflow-x-hidden relative"
      style={{ height: "600px", maxHeight: "600px" }}
    >
      <FirstSingleChat />
      <TimeChat />
      <ChatRight typeMessage={0} />
      <TimeChat />
      <ChatCenter />
      <TimeChat />
      <ChatRight typeMessage={1} />
      <TimeChat />
      <ChatRight typeMessage={2} />
      <ChatCenter />
    </div>
  );
}

export default ContentChatMain;
