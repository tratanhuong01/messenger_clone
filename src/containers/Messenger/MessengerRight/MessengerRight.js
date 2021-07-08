import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import EmptyMessage from "../../../components/Messenger/MessengerRight/EmptyMessage/EmptyMessage";
import ContentChat from "./ContentChat/ContentChat";
import CustomChat from "./CustomChat/CustomChat";
import * as messagesAction from "../../../actions/messages/index";

function MessengerRight(props) {
  //
  const dispatch = useDispatch();

  const states = useSelector((state) => {
    return {
      messages: state.messages,
    };
  });

  const { slug } = props;

  const { messages } = states;

  let index = -1;
  if (messages.list === null) {
  } else {
    index = messages.list.findIndex((item) => item[0].idGroupMessage === slug);
  }

  useEffect(() => {
    if (messages.list !== null) {
      dispatch(messagesAction.getAllMessageByGroup(messages.list[index]));
    }
  }, [dispatch, index, messages.list]);

  return (
    <div className="w-full md:w-7/12 xl:w-3/4 flex h-full">
      {messages.list === null || index === -1 || messages.data === null ? (
        <EmptyMessage />
      ) : (
        <>
          <ContentChat />
          <CustomChat />
        </>
      )}
    </div>
  );
}

export default MessengerRight;
