import React from "react";

FirstSingleChat.propTypes = {};

function FirstSingleChat(props) {
  const { item } = props;
  return (
    <div className="w-full p-2 text-center">
      <div className="w-16 h-16 relative mx-auto">
        <img
          src={item.avatar}
          className="w-16 h-16 rounded-full object-cover mx-auto"
          alt=""
        />
      </div>
      <p className="text-center text-gray-900 font-semibold dark:text-white">
        <span className="py-1.5 text-sm font-semibold dark:text-gray-300 ">
          Ensonet
        </span>{" "}
        <br />
        <span className="text-sm font-semibold dark:text-gray-300">
          {JSON.parse(item.content).data[0].content}
        </span>
      </p>
    </div>
  );
}

export default FirstSingleChat;
