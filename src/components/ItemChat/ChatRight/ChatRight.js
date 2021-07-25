import React, { useRef } from "react";
import ChatText from "../ChatText/ChatText";
import ChatImage from "../ChatImage/ChatImage";
import ChatSticker from "../ChatSticker/ChatSticker";
import ChatGif from "../ChatGif/ChatGif";
import FeelMessage from "../FeelMessage/FeelMessage";
import NumberFeel from "../NumberFeel/NumberFeel";
import ChatReCall from "../ChatRecall/ChatReCall";
import { useSelector } from "react-redux";

function ChatRight(props) {
  //
  const ref = useRef(null);

  const states = useSelector((state) => {
    return {
      isLogin: state.isLogin,
    };
  });

  const { isLogin } = states;

  const { item, index, state, userStateMessage } = props;

  const viewNotIsLogin = item.viewMessageList.filter(
    (data) => data.userViewMessage.id !== isLogin.user.id && data.view === 2
  );

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

  const data = () => {
    if (state === 0) {
      const content = JSON.parse(item.content);
      switch (content.type) {
        case 0:
          return (
            <ChatText
              margin="ml-auto"
              item={item}
              content={content.data[0].content}
            />
          );
        case 1:
          return <ChatImage key={index} />;
        case 2:
          return (
            <ChatSticker
              key={index}
              sticker={JSON.parse(content.data[0].src)}
              margin={"ml-auto"}
            />
          );
        case 3:
          return <ChatGif key={index} />;
        default:
          break;
      }
    } else {
      return <ChatReCall margin="ml-auto" item={item} />;
    }
  };

  return (
    <div className="mess-user chat-rights z-0 w-full py-1 flex relative justify-end">
      <FeelMessage
        item={item}
        data="right"
        postion={ref.current ? ref.current.children[0].offsetWidth + 80 : 0}
        userStateMessage={userStateMessage}
      />
      <div
        ref={ref}
        className="mess-user-r1 pl-2 flex mr-4 relative z-20"
        style={{ width: "inherit" }}
      >
        {data()}
        {item.feelList.length > 0 && (
          <NumberFeel
            data="right"
            item={item.feelList}
            message={item}
            postion={-10}
          />
        )}
      </div>
      <div className=" mess-user-r2 " style={{ width: "4%" }}>
        {viewNotIsLogin.length === 0 ? (
          <div className="w-full clear-both">
            <i className="fas fa-check-circle img-mess-right absolute bottom-1.5 text-gray-300"></i>
          </div>
        ) : (
          <div
            className={`absolute flex z-0 ${
              showUserView.length > 1 ? "-bottom-5" : "bottom-2.5"
            } right-0`}
          >
            {showUserView}
          </div>
        )}
      </div>
    </div>
  );
}

export default ChatRight;
