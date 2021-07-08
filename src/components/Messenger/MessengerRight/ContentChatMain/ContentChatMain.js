import React, { useEffect } from "react";
import TimeChat from "../../../ItemChat/TimeChat/TimeChat";
import ChatRight from "../../../ItemChat/ChatRight/ChatRight";
import ChatCenter from "../../../ItemChat/ChatCenter/ChatCenter";
import FirstSingleChat from "../../../ItemChat/FirstSingleChat/FirstSingleChat";
import FirstGroupChat from "../../../ItemChat/FirstGroupChat/FirstGroupChat";

ContentChatMain.propTypes = {};

function ContentChatMain(props) {
  //

  const { item } = props;

  useEffect(() => {
    document.getElementById("content__chat").scrollTop =
      document.getElementById("content__chat").scrollHeight;
  });
  const showAllMessages = item.map((ele, index) => {
    switch (ele.typeMessage) {
      case "0":
        return ele.typeGroupMessage === "0" ? (
          <FirstSingleChat item={ele} key={index} />
        ) : (
          <FirstGroupChat item={ele} key={index} />
        );
      default:
        return "";
    }
  });

  return (
    <div
      className="w-full p-1 wrapper-content-right overflow-y-auto overflow-x-hidden relative"
      style={{ height: "570px", maxHeight: "570px" }}
      id="content__chat"
    >
      {showAllMessages}
      {/* <FirstSingleChat />
      <TimeChat />
      <ChatRight typeMessage={0} />
      <TimeChat />
      <ChatCenter />
      <TimeChat />
      <ChatRight typeMessage={1} />
      <TimeChat />
      <ChatRight typeMessage={2} />
      <ChatCenter /> */}
    </div>
  );
}

export default ContentChatMain;
