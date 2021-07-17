import React, { useRef } from "react";
import ChatText from "../ChatText/ChatText";
import ChatImage from "../ChatImage/ChatImage";
import ChatSticker from "../ChatSticker/ChatSticker";
import ChatGif from "../ChatGif/ChatGif";
import FeelMessage from "../FeelMessage/FeelMessage";
import NumberFeel from "../NumberFeel/NumberFeel";

function ChatRight(props) {
  //
  const ref = useRef(null);

  const { item, index } = props;

  const data = () => {
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
  };

  return (
    <div className="mess-user chat-rights z-0 w-full py-1 flex relative justify-end">
      <FeelMessage
        item={item}
        data="right"
        postion={ref.current ? ref.current.children[0].offsetWidth + 100 : 0}
      />
      <div
        ref={ref}
        className="mess-user-r1 pl-2 flex mr-4 relative"
        style={{ width: "inherit" }}
      >
        {data()}
        {item.feelList.length > 0 && (
          <NumberFeel item={item.feelList} message={item} />
        )}
      </div>
      <div className=" mess-user-r2 mess-user-r210045 " style={{ width: "4%" }}>
        <div className="w-full clear-both">
          <i className="far fa-check-circle img-mess-right absolute bottom-1.5 text-gray-300"></i>
        </div>
      </div>
    </div>
  );
}

export default ChatRight;
