import React from "react";

ItemGroupChat.propTypes = {};

function ItemGroupChat(props) {
  const { width, height, widthParent, heightParent, padding, margin } = props;
  return (
    <div
      className={`${widthParent} ${heightParent} ${margin} ${padding} relative mx-auto`}
    >
      <img
        src="http://res.cloudinary.com/tratahuong01/image/upload/v1623289152/Avatar/d5peo862j01zy9btpuee.jpg"
        className={`${width} ${height} rounded-full object-cover 
        absolute top-0 right-0`}
        alt=""
      />
      <img
        src="http://res.cloudinary.com/tratahuong01/image/upload/v1619959559/Avatar/d2ec0nuvl9fdpufknf12.jpg"
        className={`${width} ${height} rounded-full object-cover 
        absolute bottom-0 left-0`}
        alt=""
      />
    </div>
  );
}

export default ItemGroupChat;
