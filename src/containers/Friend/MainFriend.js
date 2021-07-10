import React from "react";
import FriendLeft from "./FriendLeft/FriendLeft";
import FriendRight from "./FriendRight/FriendRight";
import Header from "../../components/Header/Header";

function MainFriend(props) {
  //
  return localStorage && localStorage.getItem("user") ? (
    <>
      <div className="w-full dark:bg-dark-main bg-white h-screen relative overflow-hidden">
        <Header id="header" />
        <div
          className="w-full flex pt-16 z-10 bg-white dark:bg-dark-main lg:w-full 
        lg:mx-auto xl:w-full"
          style={{ maxHeight: "798px", height: "798px" }}
        >
          <FriendLeft />
          <FriendRight />
        </div>
      </div>
    </>
  ) : (
    ""
  );
}

export default MainFriend;
