import React from "react";

function ModalLeftTop(props) {
  //
  const { handle } = props;

  return (
    <div
      className="w-72 absolute top-full z-50 shadow-lg border-2 border-solid 
    border-gray-300 dark:border-dark-third -right-24 mt-2"
    >
      <div
        onClick={() => handle(1)}
        className="w-full p-2 hover:bg-gray-200 dark:hover:bg-dark-third flex bg-gray-200 
      dark:bg-dark-main"
      >
        <span
          className="bx bxs-user-check flex items-center text-xl dark:text-gray-300 
        mr-3"
        ></span>
        <span className="flex items-center font-semibold">
          Người liên hệ hoạt đông
        </span>
      </div>
      <div
        onClick={() => handle(2)}
        className="w-full p-2 hover:bg-gray-200 dark:hover:bg-dark-third flex bg-gray-200 
      dark:bg-dark-main"
      >
        <span
          className="bx bxs-message-rounded-detail flex items-center text-xl dark:text-gray-300 
            mr-3"
        ></span>
        <span className="flex items-center font-semibold">
          Tin nhắn đang chờ
        </span>
      </div>
      <div
        className="w-full p-2 hover:bg-gray-200 dark:hover:bg-dark-third flex bg-gray-200 
      dark:bg-dark-main"
      >
        <span
          className="bx bxs-help-circle flex items-center text-xl dark:text-gray-300 
        mr-3"
        ></span>
        <span className="flex items-center font-semibold">Trợ giúp</span>
      </div>
    </div>
  );
}

export default ModalLeftTop;
