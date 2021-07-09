import React from "react";

ChatCenter.propTypes = {};

function ChatCenter(props) {
  const { item } = props;
  return (
    <p
      className="w-11/12 z-0 mx-auto font-semibold text-sm py-2 dark:text-gray-300 
    text-gray-700 text-center"
    >
      {item.data[0].content}
    </p>
  );
}

export default ChatCenter;
