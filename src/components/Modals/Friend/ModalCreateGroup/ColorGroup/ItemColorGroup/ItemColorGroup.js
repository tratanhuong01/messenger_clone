import React from "react";

ItemColorGroup.propTypes = {};

function ItemColorGroup(props) {
  const { item, setColorGroup, colorGroup } = props;
  return (
    <div
      onClick={() => setColorGroup(item)}
      className={`w-11 h-11 mr-3 rounded-full cursor-pointer flex-shrink-0 border-4 border-solid  
      ${
        colorGroup === item
          ? "dark:border-white  border-gray-700 "
          : " border-none "
      }`}
      style={{ backgroundColor: item }}
    ></div>
  );
}

export default ItemColorGroup;
