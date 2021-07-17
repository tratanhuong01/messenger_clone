import React from "react";

function ItemGroupChat(props) {
  //
  const { width, height, widthParent, heightParent, padding, margin, user } =
    props;

  return (
    <div
      className={`${widthParent} ${heightParent} ${margin} ${padding} relative mx-auto`}
    >
      <img
        src={user[0].avatar}
        className={`${width} ${height} rounded-full object-cover 
        absolute top-0 right-0`}
        alt=""
      />
      <img
        src={user[1].avatar}
        className={`${width} ${height} rounded-full object-cover 
        absolute bottom-0 left-0`}
        alt=""
      />
      <span className="w-3.5 h-3.5 rounded-full bg-green-500 absolute bottom-0 right-0.5"></span>
    </div>
  );
}

export default ItemGroupChat;
