import React from "react";

CloseModal.propTypes = {};

function CloseModal(props) {
  return (
    <span
      className="rounded-full dark:bg-dark-third text-gray-700 
        px-3 py-1 text-2xl font-bold absolute right-2 bg-gray-300 top-2 cursor-pointer 
        dark:text-white"
    >
      ×
    </span>
  );
}

export default CloseModal;
