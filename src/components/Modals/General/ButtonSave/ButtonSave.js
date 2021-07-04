import React from "react";

ButtonSave.propTypes = {};

function ButtonSave(props) {
  const { label, search, searchUserByEmailOrPhone } = props;
  return (
    <button
      onClick={() => searchUserByEmailOrPhone(search)}
      className="py-2 px-8 rounded-full border-white border-2 border-solid 
        mr-1 bg-indigo-500 text-white font-semibold hover:bg-indigo-600"
    >
      {label}
    </button>
  );
}

export default ButtonSave;
