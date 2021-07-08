import React from "react";
import ContentChatMain from "../../../../components/Messenger/MessengerRight/ContentChatMain/ContentChatMain";
import ContentChatTop from "../../../../components/Messenger/MessengerRight/ContentChatTop/ContentChatTop";
import ControlChat from "./ControlChat/ControlChat";

function ContentChat(props) {
  return (
    <div className="w-full xl:w-2/3 h-full max-h-full overflow-hidden flex flex-col">
      <ContentChatTop />
      <ContentChatMain />
      <ControlChat />
    </div>
  );
}

export default ContentChat;
