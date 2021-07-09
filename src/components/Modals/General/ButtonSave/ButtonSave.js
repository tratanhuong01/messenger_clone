import React from "react";

function ButtonSave(props) {
  //
  const { label, search, onClick, disabled } = props;

  return (
    <button
      type="button"
      onClick={() => onClick(search)}
      className={`py-2 px-8 rounded-full border-white border-2 border-solid 
      mr-1 text-white font-semibold
      ${
        disabled
          ? " bg-gray-500 hover:bg-gray-600"
          : " bg-indigo-500 hover:bg-indigo-600 "
      }`}
      disabled={disabled}
    >
      {label}
    </button>
  );
}

export default ButtonSave;
