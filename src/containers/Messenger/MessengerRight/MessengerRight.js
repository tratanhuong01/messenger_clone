import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import EmptyMessage from "../../../components/Messenger/MessengerRight/EmptyMessage/EmptyMessage";
import ContentChat from "./ContentChat/ContentChat";
import CustomChat from "./CustomChat/CustomChat";
import * as messagesAction from "../../../actions/messages/index";
import api from "../../../api/api";

function MessengerRight(props) {
  //
  const states = useSelector((state) => {
    return {
      isLogin: state.isLogin,
      messages: state.messages,
    };
  });

  const dispatch = useDispatch();

  const { isLogin, messages } = states;

  const [showRight, setShowRight] = useState(false);

  const { slug } = props;

  let index = messages.list.findIndex(
    (item) => item[0].idGroupMessage === slug
  );

  useEffect(() => {
    api(`groupmessage/${slug}`, "GET", null, null)
      .then((res) => {
        dispatch(
          messagesAction.getAllMessageByGroup(
            messages.list[index],
            isLogin.user.id,
            res.data
          )
        );
      })
      .catch((err) => {
        console.log(err);
      });
  }, [index, slug, dispatch, messages.list, isLogin]);

  return (
    <div
      className="w-full md:w-7/12 xl:w-3/4 flex h-full border-x-2 border-solid border-gray-100 
    dark:border-dark-second "
    >
      {index === -1 ? (
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
