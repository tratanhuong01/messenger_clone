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

  const { user, image } = process.dataUsersChat(messages.data, isLogin.user.id);

  return (
    <div
      className={`w-full z-50 ${
        showRight ? "" : "xl:w-2/3"
      } h-full max-h-full overflow-hidden flex flex-col`}
    >
      <ContentChatTop
        item={messages.data}
        user={user}
        image={image}
        typeGroupMessage={messages.data[0].typeGroupMessage}
        setShowRight={setShowRight}
        showRight={showRight}
      />
      <ContentChatMain item={messages.data} user={user} />
      <ControlChat item={messages.data} messages={messages} isLogin={isLogin} />
    </div>
  );
}

export default ContentChat;
