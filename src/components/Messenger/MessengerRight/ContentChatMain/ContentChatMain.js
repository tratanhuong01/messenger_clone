import React, { Fragment, useEffect } from "react";
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
  const showChild = (item, typeGroupMessage, user, index, itemMain) => {
    switch (item.type) {
      case -1:
        return typeGroupMessage === "0" ? (
          <FirstSingleChat item={item} key={index} user={user} />
        ) : (
          <FirstGroupChat item={item} key={index} user={user} />
        );
      default:
        return (
          <div key={index + "372183217387"}>
            <TimeChat
              time={itemMain.dateCreated}
              key={index + "372183217387"}
            />
            <ChatCenter
              item={item}
              itemMain={itemMain}
              user={isLogin.user}
              key={index + "372183748217"}
            />
          </div>
        );
    }
  };
  const showAllMessages = item.map((ele, index) => {
    const main = ele.content !== null ? JSON.parse(ele.content) : "";
    let stateSend = 0;
    ele.stateMessageList.forEach((element) => {
      if (ele.idUser === element.userStateMessage.id) {
        stateSend = element.state;
      }
    });
    let stateView = 0;
    ele.stateMessageList.forEach((element) => {
      if (element.userStateMessage.id === isLogin.user.id) {
        stateView = element.state;
      }
    });
    if (
      (stateSend === 2 && stateView === 0) ||
      (stateSend !== 2 && stateView !== 2) ||
      (stateSend === 2 && stateView === 1)
    ) {
      let userStateMessage = ele.stateMessageList.find(
        (ele__) => isLogin.user.id === ele__.userStateMessage.id
      );
      switch (ele.typeMessage) {
        case "1":
          return showChild(main, ele.typeGroupMessage, user, index, ele);
        case "2":
          return isLogin.user.id === ele.idUser ? (
            <Fragment key={index}>
              <TimeChat time={ele.dateCreated} key={index + "jdkhsaj"} />
              <ChatRight
                item={ele}
                key={index}
                index={index}
                state={stateSend === 1 ? 1 : stateView}
                userStateMessage={userStateMessage}
              />
            </Fragment>
          ) : (
            <Fragment key={index}>
              <TimeChat time={ele.dateCreated} key={index + "jdkhsaj"} />
              <ChatLeft
                item={ele}
                key={index}
                index={index}
                state={stateSend === 1 ? 1 : stateView}
                userStateMessage={userStateMessage}
              />
            </Fragment>
          );
        default:
          return "";
      }
    }
  });

  return (
    <div
      className="w-full p-1 wrapper-content-right overflow-y-auto overflow-x-hidden relative"
      style={{ height: "565px", maxHeight: "565px" }}
      id="content__chat"
    >
      {showAllMessages}
    </div>
  );
}

export default ContentChatMain;
