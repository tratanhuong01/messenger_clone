import React, { useEffect } from "react";
import TimeChat from "../../../ItemChat/TimeChat/TimeChat";
import ChatRight from "../../../ItemChat/ChatRight/ChatRight";
import ChatLeft from "../../../ItemChat/ChatLeft/ChatLeft";
import ChatCenter from "../../../ItemChat/ChatCenter/ChatCenter";
import FirstSingleChat from "../../../ItemChat/FirstSingleChat/FirstSingleChat";
import FirstGroupChat from "../../../ItemChat/FirstGroupChat/FirstGroupChat";
import { useSelector } from "react-redux";

ContentChatMain.propTypes = {};

function ContentChatMain(props) {
  //
  const states = useSelector((state) => {
    return {
      isLogin: state.isLogin,
    };
  });

  const { isLogin } = states;

  const { item, user } = props;

  useEffect(() => {
    document.getElementById("content__chat").scrollTop =
      document.getElementById("content__chat").scrollHeight;
  });
  const showChild = (item, typeGroupMessage, user, index) => {
    switch (item.type) {
      case -1:
        return typeGroupMessage === "0" ? (
          <FirstSingleChat item={item} key={index} user={user} />
        ) : (
          <FirstGroupChat item={item} key={index} user={user} />
        );
      case 0:
        return <ChatCenter key={index} item={item} />;
      default:
        return "";
    }
  };
  const showAllMessages = item.map((ele, index) => {
    const main = JSON.parse(ele.content);
    switch (ele.typeMessage) {
      case "1":
        return showChild(main, ele.typeGroupMessage, user, index);
      case "2":
        return isLogin.user.id === ele.idUser ? (
          <ChatRight item={ele} key={index} />
        ) : (
          <ChatLeft item={ele} key={index} />
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
