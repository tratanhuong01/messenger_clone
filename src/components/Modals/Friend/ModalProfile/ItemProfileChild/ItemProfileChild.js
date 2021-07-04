import React from "react";

ItemProfileChild.propTypes = {};

function ItemProfileChild(props) {
  const { position } = props;
  return (
    <div
      className={`w-20 h-20 rounded-full border-2 border-solid border-indigo-500 shadow-lg 
      absolute bottom-8 bg-white ${position} flex justify-center cursor-pointer text-gray-700 
      hover:text-white hover:border-white hover:bg-indigo-500`}
    >
      <p className="flex items-center">
        <i className="bx bxs-user text-xl mr-0.5"></i>
        <span className="font-semibold">340k</span>
      </p>
    </div>
  );
}

export default ItemProfileChild;
