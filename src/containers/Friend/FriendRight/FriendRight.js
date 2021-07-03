import React from "react";
import ListGroupChat from "./ListGroupChat/ListGroupChat";

FriendRight.propTypes = {};

function FriendRight(props) {
  return (
    <div class="w-full md:w-7/12 xl:w-3/4 h-full">
      <ListGroupChat />
    </div>
  );
}

export default FriendRight;
