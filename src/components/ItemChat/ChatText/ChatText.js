import React from "react";

function ChatText(props) {
  //
  const { margin, item, content, messages } = props;

  let style = {
    maxWidth: "75%",
    fontSize: "15px",
    backgroundColor: item.colorChat,
    color: "white",
  };

  if (messages === "left") {
    style.backgroundColor = "bg-gray-300 dark:bg-dark-third";
    delete style.color;
  }

  return JSON.parse(JSON.parse(item.content).data[0].src).length > 0 ? (
    <div
      className={`relative break-all ${margin} border-none outline-none p-1.5 
      rounded-lg relative dark:text-white text-3xl bg-opacity-80 cursor-pointer`}
    >
      {content}
    </div>
  ) : (
    <div
      className={`relative break-all ${margin} border-none outline-none p-1.5 
      rounded-lg relative dark:text-white ${style.backgroundColor} bg-opacity-80`}
      style={style}
    >
      {content}
    </div>
  );
}

export default ChatText;
