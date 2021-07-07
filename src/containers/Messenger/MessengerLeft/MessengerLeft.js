import React, { useEffect } from "react";
import MessengerLeftTop from "../../../components/Messenger/MessengerLeft/MessengerLeftTop/MessengerLeftTop";
import MessengerLeftSearch from "../../../components/Messenger/MessengerLeft/MessengerLeftSearch/MessengerLeftSearch";
import { connect } from "react-redux";
import * as actions from "../../../actions/index";
import ItemChatLeft from "../../../components/Messenger/MessengerLeft/ItemChatLeft/ItemChatLeft";

MessengerLeft.propTypes = {};

const mapStateToProps = (state) => {
  return {
    messages: state.messages,
    isLogin: state.isLogin,
  };
};

const mapDispatchToProps = (dispatch, prop) => {
  return {
    loadAllMessageOfUserByIdRequest: (id) => {
      dispatch(actions.loadAllMessageOfUserByIdRequest(id));
    },
  };
};

function MessengerLeft(props) {
  const { loadAllMessageOfUserByIdRequest, isLogin, messages } = props;
  useEffect(() => {
    loadAllMessageOfUserByIdRequest(isLogin.user.id);
  }, [loadAllMessageOfUserByIdRequest, isLogin]);
  const showAllMessagesUser = messages.list.map((item, index) => {
    return <ItemChatLeft item={item} key={index} idUser={isLogin.user.id} />;
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

export default connect(mapStateToProps, mapDispatchToProps)(MessengerLeft);
