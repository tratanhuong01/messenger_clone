import React from "react";
import { useSelector } from "react-redux";
import ContentChatMain from "../../../../components/Messenger/MessengerRight/ContentChatMain/ContentChatMain";
import ContentChatTop from "../../../../components/Messenger/MessengerRight/ContentChatTop/ContentChatTop";
import ControlChat from "./ControlChat/ControlChat";
import * as process from "../../../../functions/process";

function ContentChat(props) {
  //
  const { showRight, setShowRight } = props;

  const states = useSelector((state) => {
    return {
      messages: state.messages,
      isLogin: state.isLogin,
    };
  });

  const { messages, isLogin } = states;

  const item = messages.data;

  const { user } = process.dataUsersChat(item, isLogin.user.id);

  return (
    <div
      className={`w-full ${
        showRight ? "" : "xl:w-2/3"
      } h-full max-h-full overflow-hidden flex flex-col`}
    >
      <ContentChatTop
        item={item}
        user={user}
        typeGroupMessage={item[0].typeGroupMessage}
        setShowRight={setShowRight}
        showRight={showRight}
      />
      <ContentChatMain item={item} user={user} />
      <ControlChat item={item} messages={messages} isLogin={isLogin} />
    </div>
  );
}

export default ContentChat;
