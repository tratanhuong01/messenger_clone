import React from "react";

ImageOrVideoSendMessages.propTypes = {};

function ImageOrVideoSendMessages(props) {
  return (
    <>
      <li
        className="w-full font-semibold py-2.5 px-4 cursor-pointer 
        hover:bg-gray-300 dark:hover:bg-dark-third rounded-lg dark:text-white relative"
      >
        File phương tiện được chia sẽ{" "}
        <i className="fas fa-chevron-down float-right absolute right-5 top-3.5"></i>
      </li>
      <li className="w-full py-1 flex flex-wrap pl-2.5"></li>
    </>
  );
}

export default ImageOrVideoSendMessages;
