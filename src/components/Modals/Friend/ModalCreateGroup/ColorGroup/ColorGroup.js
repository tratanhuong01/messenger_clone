import React from "react";
import ItemColorGroup from "./ItemColorGroup/ItemColorGroup";

ColorGroup.propTypes = {};

function ColorGroup(props) {
  return (
    <div className="m-2 w-full pl-2 pr-6">
      <label
        className="w-full text-sm text-gray-700 dark:text-gray-300 
        font-semibold"
      >
        Màu sắc :
      </label>
      <div
        className="w-full dark:bg-dark-third dark:border-dark-third shadow-lg my-2 dark:text-gray-300 
        p-2 rounded-lg border-2 border-solid border-gray-300 flex overflow-x-scroll wrapper-content-right"
      >
        <ItemColorGroup />
        <ItemColorGroup />
        <ItemColorGroup />
        <ItemColorGroup />
        <ItemColorGroup />
        <ItemColorGroup />
        <ItemColorGroup />
        <ItemColorGroup />
        <ItemColorGroup />
        <ItemColorGroup />
        <ItemColorGroup />
        <ItemColorGroup />
      </div>
    </div>
  );
}

export default ColorGroup;
