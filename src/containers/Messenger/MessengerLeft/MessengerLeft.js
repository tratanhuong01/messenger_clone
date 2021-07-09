import React, { useEffect } from "react";
import MessengerLeftTop from "../../../components/Messenger/MessengerLeft/MessengerLeftTop/MessengerLeftTop";
import MessengerLeftSearch from "../../../components/Messenger/MessengerLeft/MessengerLeftSearch/MessengerLeftSearch";
import { useDispatch, useSelector } from "react-redux";
import * as actions from "../../../actions/index";
import ItemChatLeft from "../../../components/Messenger/MessengerLeft/ItemChatLeft/ItemChatLeft";

MessengerLeft.propTypes = {};

function MessengerLeft(props) {
  //
  const { slug } = props;

  const states = useSelector((state) => {
    return {
      isLogin: state.isLogin,
      messages: state.messages,
    };
  });

  const { isLogin, messages } = states;

  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(actions.loadAllMessageOfUserByIdRequest(isLogin.user.id));
  }, [isLogin, dispatch]);

  const showAllMessagesUser =
    messages.list === null
      ? ""
      : messages.list.map((item, index) => {
          return (
            <ItemChatLeft
              item={item}
              key={index}
              idUser={isLogin.user.id}
              slug={slug}
            />
          );
        });

  return (
    <div
      className="w-24 md:w-5/12 xl:w-1/4 border-r-2 border-solid dark:border-dark-second
      border-gray-100 shadow-xl overflow-hidden "
    >
      <MessengerLeftTop id="MessengerLeftTop" />
      <MessengerLeftSearch id="MessengerLeftSearch" />
      <div
        className="w-full pt-3 wrapper-scrollbar overflow-y-auto my-1 flex flex-wrap 
        justify-center"
        style={{
          maxHeight: `620px`,
        }}
      >
        {messages.length === 0 ? (
          <p className="text-center font-semibold text-gray-700 dark:text-gray-300">
            Không có bất kì tin nhắn nào..
          </p>
        ) : (
          showAllMessagesUser
        )}
      </div>
    </div>
  );
}

export default MessengerLeft;
