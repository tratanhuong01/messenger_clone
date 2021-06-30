import React from "react";

ItemSingleChat.propTypes = {};

function ItemSingleChat(props) {
  const { width, height, padding, margin } = props;
  return (
    <div
      className={`xl:${width} xl:${height} ${margin} ${padding} object-cover rounded-full 
      mx-auto relative w-16 h-16`}
    >
      <img
        src="./images/avatar.jpg"
        alt=""
        className={`xl:${width} xl:${height} rounded-full object-cover mx-auto 
        w-16 h-16`}
      />
    </div>
  );
}

export default ItemSingleChat;
