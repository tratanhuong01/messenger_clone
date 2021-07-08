import React from "react";
import { useSelector } from "react-redux";
import ContentChatMain from "../../../../components/Messenger/MessengerRight/ContentChatMain/ContentChatMain";
import ContentChatTop from "../../../../components/Messenger/MessengerRight/ContentChatTop/ContentChatTop";
import ControlChat from "./ControlChat/ControlChat";

function ContentChat(props) {
  //
  const states = useSelector((state) => {
    return {
      messages: state.messages,
      isLogin: state.isLogin,
    };
  });

  const { messages, isLogin } = states;

  const item = messages.data;

  const checkMemberChat = () => {
    let newUserChat = [];
    for (let index = 0; index < item.length; index++) {
      const element = item[index];
      if (
        newUserChat.findIndex((item) => item.idUser === element.idUser) === -1
      ) {
        newUserChat.push(element);
      }
    }
    return newUserChat;
  };

  const findUserChating = () => {
    let newData = null;
    item.forEach((element) => {
      if (isLogin.user.id === element.idUser) {
      } else {
        newData = element;
      }
    });
    return newData;
  };

  const generalNameGroup = () => {
    let data = checkMemberChat();
    let name = "";
    data.forEach((element) => {
      name += element.lastName + " , ";
    });
    return name;
  };

  const user = findUserChating();

  const userChat = checkMemberChat();

  return (
    <div className="w-full xl:w-2/3 h-full max-h-full overflow-hidden flex flex-col">
      <ContentChatTop
        generalNameGroup={generalNameGroup}
        item={item}
        user={item[0].typeGroupMessage === "0" ? user : userChat}
        typeGroupMessage={item[0].typeGroupMessage}
      />
      <ContentChatMain item={item} />
      <ControlChat item={item} />
    </div>
  );
}

export default ContentChat;
