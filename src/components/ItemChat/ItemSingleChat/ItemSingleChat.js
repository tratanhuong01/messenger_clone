import React from "react";

function ItemSingleChat(props) {
  //
  const { width, height, padding, margin, user } = props;
  return (
    <div
      className={`xl:${width} xl:${height} ${margin} ${padding} object-cover rounded-full 
      mx-auto relative w-16 h-16`}
    >
      <img
        src={user.avatar}
        alt=""
        className={`xl:${width} xl:${height} rounded-full object-cover mx-auto 
        w-16 h-16`}
      />
      <span className="w-3.5 h-3.5 rounded-full bg-green-500 absolute bottom-0 right-0.5"></span>
    </div>
  );
}

export default ItemSingleChat;
