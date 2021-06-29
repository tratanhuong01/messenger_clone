import React from "react";

FirstSingleChat.propTypes = {};

function FirstSingleChat(props) {
  return (
    <div className="w-full p-2 text-center">
      <div className="w-16 h-16 relative mx-auto">
        <img
          src="http://res.cloudinary.com/tratahuong01/image/upload/v1622792457/Avatar/ohr7yxb89srga7aoggdr.jpg"
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
          Các bạn là bạn bè trên Ensonet
        </span>
      </p>
    </div>
  );
}

export default FirstSingleChat;
