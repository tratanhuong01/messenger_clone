import React from "react";
import ChatText from "../ChatText/ChatText";
import ChatImage from "../ChatImage/ChatImage";
import ChatSticker from "../ChatSticker/ChatSticker";
import ChatGif from "../ChatGif/ChatGif";
import FeelMessageRight from "../FeelMessageRight/FeelMessageRight";

ChatRight.propTypes = {};

function ChatRight(props) {
  const { typeMessage } = props;
  const data = (typeMessage) => {
    switch (typeMessage) {
      case 0:
        return <ChatText />;
      case 1:
        return <ChatImage />;
      case 2:
        return <ChatSticker />;
      case 3:
        return <ChatGif />;
      default:
        break;
    }
  };
  return (
    <div className="mess-user chat-rights z-0 w-full py-1 flex relative">
      <div className="mess-user-feel z-50 hidden h-auto relative">
        <div
          className="cursor-pointer color-word absolute top-1/2 pl-2"
          style={{ transform: "translateY(-50%)" }}
        >
          <ul className="w-full flex relative">
            <FeelMessageRight />
          </ul>
        </div>
      </div>
      <div className="mess-user-r1 pl-2 flex mr-4" style={{ width: "inherit" }}>
        {data(typeMessage)}
        <span
          className="z-10 absolute cursor-pointer"
          style={{
            borderRadius: " 20px",
            bottom: "-13px",
            left: "82%",
            whiteSpace: "nowrap",
          }}
        ></span>
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