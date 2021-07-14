import React from "react";
import { useSelector } from "react-redux";

function SendIconControl(props) {
  //
  const states = useSelector((state) => {
    return {
      messages: state.messages,
    };
  });

  const { messages } = states;

  return (
    <div className="w-12 pt-1 zoom flex jusitfy-center">
      <span className="cursor-pointer zoom text-xl flex items-center mb-2">
        {messages.icon}
      </span>
    </div>
  );
}

export default SendIconControl;
