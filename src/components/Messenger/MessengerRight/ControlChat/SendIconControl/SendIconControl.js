import React, { useEffect, useRef } from "react";
import { useSelector } from "react-redux";
import { useDispatch } from "react-redux";
import * as messagesAction from "../../../../../actions/messages/index";

function SendIconControl(props) {
  //
  const states = useSelector((state) => {
    return {
      messages: state.messages,
      isLogin: state.isLogin,
    };
  });

  const { messages, isLogin } = states;

  const group = useRef(messages.group);

  const dispatch = useDispatch();

  const addMessage = () => {
    dispatch(
      messagesAction.addMessageRequest({
        content: messages.icon,
        group: group.current,
        user: isLogin.user,
        type: 0,
        child: ["icon"],
      })
    );
  };

  useEffect(() => {
    group.current = messages.group;
  }, [messages]);

  return (
    <div className="w-12 pt-1 zoom flex jusitfy-center">
      <span
        onClick={addMessage}
        className="cursor-pointer zoom text-xl flex items-center mb-2"
      >
        {messages.icon}
      </span>
    </div>
  );
}

export default SendIconControl;
