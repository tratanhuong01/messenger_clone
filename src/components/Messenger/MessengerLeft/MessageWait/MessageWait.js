import React from "react";
import ItemMessageWait from "./ItemMessageWait/ItemMessageWait";

function MessageWait(props) {
  //
  const { handle } = props;

  return (
    <div className="w-full">
      <div className="w-full flex px-4 pt-6 pb-3">
        <span
          onClick={() => handle(0)}
          className="w-10 h-10 rounded-full bx bxs-left-arrow-alt flex text-2xl cusor-pointer mr-4 
        items-center dark:text-gray-300 cursor-pointer hover:bg-gray-300 dark:hover:bg-dark-third 
        flex justify-center"
        ></span>
        <span className="text-2xl font-semibold flex items-center dark:text-white">
          Tin nhắn đang chờ
        </span>
      </div>
      <p className="text-gray-700 dark:text-gray-300 font-semibold my-1 text-sm px-4">
        Mở tin nhắn chờ để xem thông tin về người nhắn tin cho bạn. Nếu bạn
        không trả lời thì họ sẽ không biết là bạn đã xem đâu.
      </p>
      <div
        className="w-full overflow-y-auto py-2"
        style={{ maxHeight: "585px" }}
      >
        <ItemMessageWait />
        <ItemMessageWait />
        <ItemMessageWait />
        <ItemMessageWait />
      </div>
    </div>
  );
}

export default MessageWait;
