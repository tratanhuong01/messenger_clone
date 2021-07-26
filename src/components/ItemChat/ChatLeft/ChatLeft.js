import React, { useRef } from "react";
import { useSelector } from "react-redux";
import ChatGif from "../ChatGif/ChatGif";
import ChatImage from "../ChatImage/ChatImage";
import ChatReCall from "../ChatRecall/ChatReCall";
import ChatSticker from "../ChatSticker/ChatSticker";
import ChatText from "../ChatText/ChatText";
import FeelMessage from "../FeelMessage/FeelMessage";
import NumberFeel from "../NumberFeel/NumberFeel";

function ChatLeft(props) {
  //

  const states = useSelector((state) => {
    return {
      messages: state.messages,
    };
  });

  const { messages } = states;

  const ref = useRef(null);

  const { item, index, state, userStateMessage } = props;

  const getUser = messages.data.find(
    (data) => data.typeMessage === "-1" && data.idUser === item.idUser
  );

  const data = () => {
    if (state === 0) {
      const content = JSON.parse(item.content);
      switch (content.type) {
        case 0:
          return (
            <ChatText
              margin=""
              item={item}
              content={content.data[0].content}
              key={index}
              messages="left"
            />
          );
        case 1:
          return <ChatImage margin="" key={index} item={item} />;
        case 2:
          return (
            <ChatSticker
              key={index}
              sticker={JSON.parse(content.data[0].src)}
              margin={"mr-auto"}
            />
          );
        case 3:
          return <ChatGif margin="" key={index} />;
        default:
          return "";
      }
    } else {
      return <ChatReCall margin="" item={item} key={index} messages="left" />;
    }
  };

  const viewNotIsLogin = item.viewMessageList.filter((data) => data.view === 2);

  const showUserView = viewNotIsLogin.map((data, index) => {
    return (
      <img
        src={data.userViewMessage.avatar}
        alt=""
        className="w-4 h-4 object-cover rounded-full mx-0.5"
        key={index}
      />
    );
  });
  const nickName = () => {
    if (typeof getUser === "undefined") {
      return `${item.firstName} ${item.lastName}`;
    } else {
      if (getUser.nickName === null)
        return `${getUser.firstName} ${getUser.lastName}`;
      else return getUser.nickName;
    }
  };
  return (
    <div className="mess-user z-0 chat-lefts w-full py-2 flex relative">
      {item.typeGroupMessage === "1" && (
        <div
          className="absolute text-xs text-gray-500 dark:text-gray-300 font-semibold 
          -top-4 left-14"
        >
          {nickName()}
        </div>
      )}
      <div className="w-12 relative">
        <img
          className="absolute bottom-1 w-9 h-9 object-cover rounded-full"
          src={item.avatar}
          alt=""
        />
      </div>
      <div
        ref={ref}
        className="mess-user-r1 pl-2 flex z-50 relative"
        style={{ width: "inherit" }}
      >
        {data()}
        {item.feelList.length > 0 && (
          <NumberFeel
            data="left"
            item={item.feelList}
            message={item}
            postion={ref.current ? ref.current.children[0].offsetWidth - 10 : 0}
          />
        )}
      </div>
      <div className={`absolute flex z-0 bottom-2.5 right-0`}>
        {showUserView}
      </div>
      <FeelMessage
        item={item}
        data="left"
        postion={ref.current ? ref.current.children[0].offsetWidth + 65 : 0}
        userStateMessage={userStateMessage}
      />
    </div>
  );
}

export default ChatLeft;
