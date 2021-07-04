import React from "react";

ItemMemberChoose.propTypes = {};

function ItemMemberChoose(props) {
  const { index } = props;
  return (
    <div className="p-2.5 flex hover:bg-gray-200 dark:hover:bg-dark-third cursor-pointer">
      <div className="flex relative">
        <div className="top-1/2 transform -translate-y-1/2 absolute roundInputCheckBoxTagMember">
          <input type="checkbox" id={`checkbox_${index}`} />
          <label htmlFor={`checkbox_${index}`}></label>
        </div>
      </div>
      <div className="w-12 h-12 relative ml-10 mr-4">
        <img
          src="./images/male/7.jpg"
          className="w-full h-full rounded-full object-cover"
          alt=""
        />
      </div>
      <div className="flex">
        <span className="flex items-center font-semibold dark:text-gray-300">
          Trà Hưởng
        </span>
      </div>
    </div>
  );
}

export default ItemMemberChoose;
