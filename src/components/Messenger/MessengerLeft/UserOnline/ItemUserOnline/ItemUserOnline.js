import React from "react";

function ItemUserOnline(props) {
  return (
    <div
      className="w-full py-2 hover:bg-gray-300 dark:hover:bg-dark-third px-4 
    rounded-lg flex"
    >
      <div className="w-12 h-12 relative">
        <img
          src="/images/male/11.jpg"
          className="w-full p-0.5 h-full object-cover rounded-full"
          alt=""
        />
        <span className="w-3 h-3 rounded-full bg-green-500 absolute bottom-0 -right-0.5"></span>
      </div>
      <div className="flex items-center pl-4 font-semibold cursor-pointer text-gray-800 dark:text-gray-300">
        Trà Hưởng
      </div>
    </div>
  );
}

export default ItemUserOnline;
