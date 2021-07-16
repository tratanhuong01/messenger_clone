import React from "react";
import ItemFeel from "./ItemFeel/ItemFeel";

function Feel(props) {
  //
  return (
    <ul
      className="-left-32 mb-2 absolute bottom-full flex flex-column dark:bg-dark-second bg-white 
      rounded-lg border-solid dark:border-dark-third border-gray-300 border rounded-3xl"
    >
      <ItemFeel item={"👍"} />
      <ItemFeel item={"❤️"} />
      <ItemFeel item={"😆"} />
      <ItemFeel item={"😥"} />
      <ItemFeel item={"😮"} />
      <ItemFeel item={"😡"} />
    </ul>
  );
}

export default Feel;
