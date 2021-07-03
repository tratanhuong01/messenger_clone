import React from "react";
import MainFriend from "../../containers/Friend/MainFriend";
import ShowModal from "../../containers/ShowModal/ShowModal";

Friend.propTypes = {};

function Friend(props) {
  return (
    <div className="w-full dark:bg-dark-main h-screen relative">
      <MainFriend />
      <ShowModal />
    </div>
  );
}

export default Friend;
