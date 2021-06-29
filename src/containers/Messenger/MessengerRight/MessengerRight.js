import React from "react";
import ContentChat from "./ContentChat/ContentChat";
import CustomChat from "./CustomChat/CustomChat";

MessengerRight.propTypes = {};

function MessengerRight(props) {
  return (
    <div className="w-3/4 flex h-full">
      <ContentChat />
      <CustomChat />
    </div>
  );
}

export default MessengerRight;
