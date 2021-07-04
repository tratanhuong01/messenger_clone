import React from "react";
import MessengerLeft from "../../containers/Messenger/MessengerLeft/MessengerLeft";
import MessengerRight from "../../containers/Messenger/MessengerRight/MessengerRight";
import Header from "../../components/Header/Header";

MainMessenger.propTypes = {};

function MainMessenger(props) {
  return (
    <div className="w-full dark:bg-dark-main bg-white h-screen relative overflow-hidden">
      {localStorage && localStorage.getItem("user") ? (
        <>
          <Header id="header" />
          <div
            className="w-full flex pt-16 z-10 bg-white dark:bg-dark-main lg:w-full 
              lg:mx-auto xl:w-full"
            style={{ maxHeight: "798px", height: "798px" }}
          >
            <MessengerLeft />
            <MessengerRight />
          </div>
        </>
      ) : (
        ""
      )}
    </div>
  );
}

export default MainMessenger;
