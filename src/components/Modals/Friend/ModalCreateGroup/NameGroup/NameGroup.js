import React from "react";

NameGroup.propTypes = {};

function NameGroup(props) {
  return (
    <div className="m-2 w-full pl-2 pr-6">
      <label
        className="w-full text-sm text-gray-700 dark:text-gray-300 
        font-semibold"
      >
        Tên nhóm
      </label>
      <input
        type="text"
        placeholder="Tên nhóm"
        className="w-full dark:bg-dark-third dark:border-dark-third shadow-lg my-2 dark:text-gray-300 
        py-2 px-3.5 rounded-full border-2 border-solid border-gray-300"
      />
    </div>
  );
}

export default NameGroup;
