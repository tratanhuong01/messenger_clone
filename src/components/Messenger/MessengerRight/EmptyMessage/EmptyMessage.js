import React from "react";

EmptyMessage.propTypes = {};

function EmptyMessage(props) {
  return (
    <div className="w-full h-full relative">
      <div
        className="w-1/5 absolute top-1/2 left-1/2 transform -translate-x-1/2 
        -translate-y-1/2 "
      >
        <img
          src="/images/logo.png"
          className="w-16 h-16 mx-auto object-cover mb-3"
          alt=""
        />
        <p className="w-full text-center dark:text-gray-300 font-semibold my-3">
          Hiện chưa có tin nhắn nào
        </p>
        <p className="w-full text-center text-blue-500 cursor-pointer font-semibold my-3">
          Tìm bạn bè
        </p>
      </div>
    </div>
  );
}

export default EmptyMessage;
