import React, { useEffect } from "react";
import MessengerLeft from "../../containers/Messenger/MessengerLeft/MessengerLeft";
import MessengerRight from "../../containers/Messenger/MessengerRight/MessengerRight";
import Header from "../../components/Header/Header";
import { useDispatch, useSelector } from "react-redux";
import * as actions from "../../actions/index";
import EmptyMessage from "../../components/Messenger/MessengerRight/EmptyMessage/EmptyMessage";
import * as relationshipUsersAction from "../../actions/relationshipusers/index";

function MainMessenger(props) {
  //
  const states = useSelector((state) => {
    return {
      messages: state.messages,
      isLogin: state.isLogin,
    };
  });

  const { messages, isLogin } = states;

  const dispatch = useDispatch();

  const { match } = props;

  useEffect(() => {
    dispatch(
      actions.loadAllMessageOfUserByIdRequest(
        isLogin.user.id,
        match.params.slug
      )
    );
    dispatch(relationshipUsersAction.loadListFriendRequest(isLogin.user.id));
  }, [isLogin, dispatch, match]);

  return (
    <div className="w-full dark:bg-dark-main bg-white h-screen relative overflow-hidden">
      {localStorage && localStorage.getItem("user") ? (
        messages.list !== null ? (
          <>
            <Header id="header" />
            <div
              className="w-full flex pt-16 z-10 bg-white dark:bg-dark-main lg:w-full 
              lg:mx-auto xl:w-full"
              style={{ maxHeight: "798px", height: "798px" }}
            >
              <MessengerLeft slug={match.params.slug} />
              {messages.data === null ? (
                <div
                  className="w-full md:w-7/12 xl:w-3/4 flex h-full border-x-2 border-solid border-gray-100 
                  dark:border-dark-second "
                >
                  <EmptyMessage />)
                </div>
              ) : (
                <MessengerRight slug={match.params.slug} />
              )}
            </div>
          </>
        ) : (
          ""
        )
      ) : (
        ""
      )}
    </div>
  );
}

export default MainMessenger;
