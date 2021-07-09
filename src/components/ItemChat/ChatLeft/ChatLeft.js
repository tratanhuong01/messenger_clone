import React from "react";
import { useDispatch } from "react-redux";
import ChatGif from "../ChatGif/ChatGif";
import ChatImage from "../ChatImage/ChatImage";
import ChatSticker from "../ChatSticker/ChatSticker";
import ChatText from "../ChatText/ChatText";
import * as modalsAction from "../../../actions/modals/index";

ChatLeft.propTypes = {};

function ChatLeft(props) {
  //
  const { item } = props;

  const dispatch = useDispatch();

  const data = () => {
    const content = JSON.parse(item.content);
    switch (content.type) {
      case 0:
        return (
          <ChatText margin="" item={item} content={content} messages="left" />
        );
      case 1:
        return <ChatImage margin="" />;
      case 2:
        return <ChatSticker margin="" />;
      case 3:
        return <ChatGif margin="" />;
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
      <div className=" pl-2 flex z-50" style={{ width: "inherit" }}>
        {data()}
        <div className="mess-user-feel hidden h-auto relative ml-2">
          <div
            className="cursor-pointer color-word absolute top-1/2 pl-2"
            style={{ transform: "translateY(-50%)" }}
          >
            <ul className="w-full flex relative">
              <li className="feel-mess px-1 mr-1 rounded-full hover:bg-gray-300 dark:hover:bg-dark-third">
                <i className="far fa-smile text-xm"></i>
              </li>
              <li className="px-1.5 rounded-full hover:bg-gray-300 dark:hover:bg-dark-third">
                <i
                  onClick={() =>
                    dispatch(modalsAction.openModalWarningLeaveGroup())
                  }
                  className="far fa-trash-alt text-xm"
                ></i>
              </li>
            </ul>
          </div>
        </div>
      </div>
    </div>
  );
}

export default ChatLeft;
