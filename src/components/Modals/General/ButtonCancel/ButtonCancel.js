import React from "react";

ButtonCancel.propTypes = {};

function ButtonCancel(props) {
  return (
    <button
      className="py-2 px-8 rounded-full border-indigo-500 border-2 border-solid 
        mr-3 font-semibold hover:bg-gray-100 dark:text-gray-300 dark:hover:bg-dark-third"
    >
      Hủy
    </button>
  );
}

export default ButtonCancel;
