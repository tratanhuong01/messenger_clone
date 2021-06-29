import React from "react";

ItemSingleChat.propTypes = {};

function ItemSingleChat(props) {
  const { width, height, padding, margin } = props;
  return (
    <div
      className={`${width} ${height} ${margin} ${padding} object-cover rounded-full 
      mx-auto relative`}
    >
      <img
        src="./images/avatar.jpg"
        alt=""
        className={`${width} ${height} rounded-full object-cover mx-auto`}
      />
    </div>
  );
}

export default ItemSingleChat;
