import React from "react";

ChatText.propTypes = {};

function ChatText(props) {
  const { margin, item, content, messages } = props;
  let style = {
    maxWidth: "75%",
    fontSize: "15px",
    backgroundColor: item.colorChat,
    color: "white",
  };
  if (messages === "left") {
    style.backgroundColor = "#e0dbdb";
    delete style.color;
  }

  return (
    <div
      className={`relative break-all ${margin} border-none outline-none p-1.5 
      rounded-lg relative dark:text-white`}
      style={style}
    >
      {content.data[0].content}
    </div>
  );
}

export default ChatText;
