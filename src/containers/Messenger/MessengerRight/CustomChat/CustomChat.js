import React from "react";
import CustomChatCenter from "../../../../components/Messenger/MessengerRight/CustomChatCenter/CustomChatCenter";
import CustomChatTop from "../../../../components/Messenger/MessengerRight/CustomChatTop/CustomChatTop";
import FileSentMessages from "../../../../components/Messenger/MessengerRight/FileSentMessages/FileSentMessages";
import ImageOrVideoSentMessages from "../../../../components/Messenger/MessengerRight/ImageOrVideoSendMessages/ImageOrVideoSendMessages";

function CustomChat(props) {
  return (
    <div
      className="w-1/3 hidden xl:block pr-2 h-full max-h-full wrapper-content-right 
      overflow-y-auto"
    >
      <CustomChatTop />
      <ul className="w-full py-2">
        <CustomChatCenter />
        <FileSentMessages />
        <ImageOrVideoSentMessages />
      </ul>
    </div>
  );
}

export default CustomChat;
