import React from "react";

function FirstGroupChat(props) {
  //
  const { item, user } = props;

  return (
    <div className="w-full p-2 text-center">
      <div className="w-16 h-16 relative mx-auto">
        <img
          src={user[0].avatar}
          className={`w-10 h-10 rounded-full object-cover 
            absolute top-0 right-0`}
          alt=""
        />
        <img
          src={user[1].avatar}
          className={`w-10 h-10 rounded-full object-cover 
            absolute bottom-0 left-0`}
          alt=""
        />
      </div>
      <p className="text-center text-gray-900 font-semibold dark:text-white">
        <span className="py-1.5 text-sm font-semibold dark:text-gray-300 ">
          Ensonet
        </span>
        <br />
        <span className="text-sm font-semibold dark:text-gray-300">
          {item.data[0].content}
        </span>
      </p>
    </div>
  );
}

export default FirstGroupChat;
