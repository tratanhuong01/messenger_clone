import React from "react";

function ItemFeel(props) {
  //
  const { item } = props;

  return (
    <li
      className="px-2 py-2 text-xl cursor-pointer rounded-full hover:bg-gray-300 
        dark:hover:bg-dark-third"
    >
      {item}
    </li>
  );
}

export default ItemFeel;
