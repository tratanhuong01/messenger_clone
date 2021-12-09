import React, { useState } from "react";
import { useSelector } from "react-redux";
import ItemChatLeft from "../../../components/Messenger/MessengerLeft/ItemChatLeft/ItemChatLeft";
import MainContentLeft from "../../../components/Messenger/MessengerLeft/MainContentLeft/MainContentLeft";
import MessageWait from "../../../components/Messenger/MessengerLeft/MessageWait/MessageWait";
import UserOnline from "../../../components/Messenger/MessengerLeft/UserOnline/UserOnline";

function MessengerLeft(props) {
  //
  const { slug } = props;

  const states = useSelector((state) => {
    return {
      isLogin: state.isLogin,
      messages: state.messages,
    };
  });

  const [showData, setShowData] = useState({ type: 0, data: "" });

  const { isLogin, messages } = states;

  const handle = (type) => {
    switch (type) {
      case 1:
        setShowData({
          type: 1,
          data: <UserOnline handle={handle} />,
        });
        break;
      case 2:
        setShowData({
          type: 2,
          data: <MessageWait handle={handle} />,
        });
        break;
      case 0:
        setShowData({ type: 0, data: "" });
        break;
      default:
        break;
    }
  };

  const showAllMessagesUser = messages.list.map((item, index) => {
    return (
      <ItemChatLeft
        item={item}
        key={index}
        idUser={isLogin.user.id}
        slug={slug}
      />
    );
  });

  return (
    <div className="w-24 md:w-5/12 xl:w-1/4 shadow-xl overflow-hidden h-full ">
      <MainContentLeft
        isShow={showData.type === 0 ? false : true}
        messages={messages}
        showAllMessagesUser={showAllMessagesUser}
        handle={handle}
      />
      {showData.data}
    </div>
  );
}

export default MessengerLeft;
