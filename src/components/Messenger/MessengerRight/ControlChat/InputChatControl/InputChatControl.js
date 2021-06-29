import React from "react";

InputChatControl.propTypes = {};

function InputChatControl(props) {
  return (
    <div className="three-exten1 w-full relative">
      <div
        className="place-input-type border-none dark:text-white bg-gray-200 dark:bg-dark-third
        rounded-2xl pl-2 outline-none py-2 break-all w-full"
        style={{ minHeight: "20px" }}
        contentEditable="true"
        placeholder="Aa"
      ></div>
      <div className="absolute right-3 top-0.5 flex cursor-pointer z-50">
        <i className="far fa-smile dark:text-white text-gray-600 text-2xl"></i>
      </div>
    </div>
  );
}

export default InputChatControl;
