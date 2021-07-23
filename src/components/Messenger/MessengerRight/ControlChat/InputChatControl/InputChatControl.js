import React, { useEffect, useRef, useState } from "react";
import ContentEditable from "react-contenteditable";
import { useDispatch, useSelector } from "react-redux";
import * as messagesAction from "../../../../../actions/messages/index";

function InputChatControl(props) {
  //
  const dispatch = useDispatch();

  const states = useSelector((state) => {
    return {
      socket: state.socket,
    };
  });

  const { socket } = states;

  const { isLogin, messages, imagePreview } = props;

  const text = useRef("");

  const group = useRef(messages.group);

  const images = useRef(imagePreview);

  useEffect(() => {
    text.current = "";
    group.current = messages.group;
    images.current = imagePreview;
  }, [imagePreview, messages.idGroup, messages.typing]);

  const enter = (event) => {
    if (event.keyCode === 13) {
      dispatch(
        messagesAction.addMessageRequest({
          content: text.current,
          group: group.current,
          user: isLogin.user,
          type: 0,
          child: [],
          socket: socket,
          members: messages.members,
        })
      );
      dispatch(messagesAction.setTypingMessage(!messages.typing));
    }
  };

  return (
    <div className="three-exten1 w-full relative">
      <ContentEditable
        onClick={() =>
          dispatch(
            messagesAction.seenAllMessageByIdMessage({
              group: group.current,
              user: isLogin.user,
              socket: socket,
              members: messages.members,
            })
          )
        }
        onKeyPress={(event) => {
          var keyCode = event.which || event.keyCode;
          keyCode === 13 && event.preventDefault();
        }}
        onChange={(event) => {
          text.current = event.target.value;
        }}
        onKeyUp={enter}
        className="place-input-type border-none dark:text-white bg-gray-200 dark:bg-dark-third
        rounded-full pl-2 outline-none py-2 break-all w-full"
        style={{ minHeight: "20px" }}
        html={text.current}
        placeholder="Aa"
      />
      <div className="absolute right-3 top-1.5 flex cursor-pointer z-50">
        <i className="far fa-smile dark:text-white text-gray-600 text-2xl"></i>
      </div>
    </div>
  );
}

export default InputChatControl;
