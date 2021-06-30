import React, { useEffect } from "react";
import TimeChat from "../../../ItemChat/TimeChat/TimeChat";
import ChatRight from "../../../ItemChat/ChatRight/ChatRight";
import ChatCenter from "../../../ItemChat/ChatCenter/ChatCenter";
import FirstSingleChat from "../../../ItemChat/FirstSingleChat/FirstSingleChat";

ContentChatMain.propTypes = {};

function ContentChatMain(props) {
  useEffect(() => {
    document.getElementById("content__chat").scrollTop =
      document.getElementById("content__chat").scrollHeight;
  });
  return (
    <div
      className="w-full p-1 wrapper-content-right overflow-y-auto overflow-x-hidden relative"
      style={{ height: "550px", maxHeight: "550px" }}
      id="content__chat"
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
