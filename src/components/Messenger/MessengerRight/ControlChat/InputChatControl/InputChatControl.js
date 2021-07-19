import React, { useEffect, useRef } from "react";
import ContentEditable from "react-contenteditable";
import { useDispatch } from "react-redux";
import * as messagesAction from "../../../../../actions/messages/index";

function InputChatControl(props) {
  //
  const dispatch = useDispatch();

  const { isLogin, messages, imagePreview } = props;

  const text = useRef("");

  const group = useRef(messages.group);

  const images = useRef(imagePreview);

  useEffect(() => {
    text.current = "";
    group.current = messages.group;
    images.current = imagePreview;
  }, [messages, imagePreview]);

  const enter = (event) => {
    if (event.keyCode === 13) {
      console.log("Data : ", images);
      dispatch(
        messagesAction.addMessageRequest({
          content: text.current,
          group: group.current,
          user: isLogin.user,
          type: 0,
          child: [],
        })
      );
    }
  };

  return (
    <div className="three-exten1 w-full relative">
      <ContentEditable
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
