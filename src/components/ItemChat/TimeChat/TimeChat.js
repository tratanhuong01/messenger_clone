import React from "react";
import * as process from "../../../functions/process";

function TimeChat(props) {
  //
  const { time } = props;

  return (
    <div
      className="mess-user z-0 chat-rights w-full pt-3 pb-1.5 text-gray-500 font-semibold 
      flex relative text-center justify-center text-sm dark:text-gray-300 "
    >
      {process.timeGeneral(time)}
    </div>
  );
}

export default TimeChat;
