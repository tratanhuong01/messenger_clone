import React, { useRef } from "react";
import ChatGif from "../ChatGif/ChatGif";
import ChatImage from "../ChatImage/ChatImage";
import ChatSticker from "../ChatSticker/ChatSticker";
import ChatText from "../ChatText/ChatText";
import FeelMessage from "../FeelMessage/FeelMessage";
import NumberFeel from "../NumberFeel/NumberFeel";

function ChatLeft(props) {
  //
  const ref = useRef(null);

  const { item, index } = props;

  const data = () => {
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
        return <ChatImage margin="" key={index} />;
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
  };

  return (
    <div className="mess-user z-0 chat-lefts w-full py-2 flex relative">
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
          <NumberFeel item={item.feelList} message={item} />
        )}
      </div>
      <FeelMessage
        item={item}
        data="left"
        postion={ref.current ? ref.current.children[0].offsetWidth + 65 : 0}
      />
    </div>
  );
}

export default ChatLeft;
