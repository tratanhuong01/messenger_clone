import React, { useRef } from "react";
import ChatText from "../ChatText/ChatText";
import ChatImage from "../ChatImage/ChatImage";
import ChatSticker from "../ChatSticker/ChatSticker";
import ChatGif from "../ChatGif/ChatGif";
import FeelMessage from "../FeelMessage/FeelMessage";
import NumberFeel from "../NumberFeel/NumberFeel";
import ChatReCall from "../ChatRecall/ChatReCall";

function ChatRight(props) {
  //
  const ref = useRef(null);

  const { item, index, state, userStateMessage } = props;

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
        <div className="w-full clear-both hidden">
          <i className="far fa-check-circle img-mess-right absolute bottom-1.5 text-gray-300"></i>
        </div>
      </div>
      <div className="absolute flex z-0 -bottom-3 right-0">
        <img
          src="../images/male/6.jpg"
          alt=""
          className="w-4 h-4 object-cover rounded-full mx-0.5"
        />
      </div>
    </div>
  );
}

export default ChatRight;
