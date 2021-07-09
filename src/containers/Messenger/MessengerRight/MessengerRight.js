import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import EmptyMessage from "../../../components/Messenger/MessengerRight/EmptyMessage/EmptyMessage";
import ContentChat from "./ContentChat/ContentChat";
import CustomChat from "./CustomChat/CustomChat";
import * as messagesAction from "../../../actions/messages/index";

function MessengerRight(props) {
  //
  const dispatch = useDispatch();

  const [showRight, setShowRight] = useState(false);

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
      dispatch(
        messagesAction.getAllMessageByGroup(
          messages.list[index === -1 ? 0 : index]
        )
      );
    }
  }, [dispatch, index, messages.list]);

  return (
    <div className="w-full md:w-7/12 xl:w-3/4 flex h-full">
      {messages.list === null ||
      index === -1 ||
      messages.data === null ||
      typeof slug === "undefined" ? (
        <EmptyMessage />
      ) : (
        <>
          <ContentChat showRight={showRight} setShowRight={setShowRight} />
          <CustomChat showRight={showRight} />
        </>
      )}
    </div>
  );
}

export default MessengerRight;
