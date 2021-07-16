import React from "react";
import ItemUserOnline from "./ItemUserOnline/ItemUserOnline";

function UserOnline(props) {
  //
  const { handle } = props;

  return (
    <div className="w-full">
      <div className="w-full flex px-4 pt-6 pb-3">
        <span
          onClick={() => handle(0)}
          className="w-10 h-10 rounded-full bx bxs-left-arrow-alt flex text-2xl cusor-pointer mr-4 
        items-center dark:text-gray-300 cursor-pointer hover:bg-gray-300 dark:hover:bg-dark-third 
        flex justify-center"
        ></span>
        <span className="text-2xl font-semibold flex items-center dark:text-white">
          Mọi người
        </span>
      </div>
      <p className="text-gray-700 dark:text-gray-300 font-semibold my-2 text-sm px-4">
        Người liên hệ hoạt động(<span>10</span>)
      </p>
      <div
        className="w-full overflow-y-auto py-2"
        style={{ maxHeight: "600px" }}
      >
        <ItemUserOnline />
        <ItemUserOnline />
        <ItemUserOnline />
        <ItemUserOnline />
        <ItemUserOnline />
        <ItemUserOnline />
        <ItemUserOnline />
        <ItemUserOnline />
        <ItemUserOnline />
        <ItemUserOnline />
        <ItemUserOnline />
        <ItemUserOnline />
      </div>
    </div>
  );
}

export default UserOnline;
