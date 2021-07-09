import React from "react";

function ItemColor(props) {
  const { item } = props;
  return (
    <li
      className="w-20 h-20 p-8 rounded-full hover:bg-gray-300 
        dark:hover:bg-dark-third relative cursor-pointer"
    >
      <div
        className="mx-auto my-auto w-16 h-16 rounded-full 
        absolute top-2 right-2"
        style={{ backgroundColor: item }}
      ></div>
    </li>
  );
}

export default ItemColor;
