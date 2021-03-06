import React, { Fragment, useEffect } from "react";
import TimeChat from "../../../ItemChat/TimeChat/TimeChat";
import ChatRight from "../../../ItemChat/ChatRight/ChatRight";
import ChatLeft from "../../../ItemChat/ChatLeft/ChatLeft";
import ChatCenter from "../../../ItemChat/ChatCenter/ChatCenter";
import FirstSingleChat from "../../../ItemChat/FirstSingleChat/FirstSingleChat";
import FirstGroupChat from "../../../ItemChat/FirstGroupChat/FirstGroupChat";
import { useSelector } from "react-redux";

function ContentChatMain(props) {
  //
  const states = useSelector((state) => {
    return {
      isLogin: state.isLogin,
      messages: state.messages,
    };
  });

  const { isLogin, messages } = states;

  const { item, user } = props;

  // const limitOffset = (index) => {
  //   let clone = [...item];
  //   return clone.slice(index);
  // };

  // const [index, setIndex] = useState(
  //   item.length - 15 <= 0 ? 0 : item.length - 15
  // );

  // const [messsageAll, setMessageAll] = useState(limitOffset(index));

  useEffect(() => {
    document.getElementById("content__chat").scrollTop =
      document.getElementById("content__chat").scrollHeight;
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [messages.data.length]);

  useEffect(() => {
    document
      .getElementById("content__chat")
      .addEventListener("scroll", (event) => { });
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

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
                userViewMessage={ele.viewMessageList}
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
                userViewMessage={ele.viewMessageList}
              />
            </Fragment>
          );
        default:
          return "";
      }
    }
    return "";
  });

  return (
    <div
      className="w-full p-1 wrapper-content-right overflow-y-auto overflow-x-hidden relative"
      style={{ height: "calc(100% - 132px)", maxHeight: "calc(100% - 132px)" }}
      id="content__chat"
    >
      {showAllMessages}
    </div>
  );
}

export default ContentChatMain;
