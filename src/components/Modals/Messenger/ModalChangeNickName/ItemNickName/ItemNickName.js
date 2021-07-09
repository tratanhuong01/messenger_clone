import React from "react";

function ItemNickName(props) {
  return (
    <div
      className="w-full cursor-pointer p-2.5 flex hover:bg-gray-200 
        dark:hover:bg-dark-third rounded-lg"
    >
      <div className="w-1/12">
        <img
          src="http://res.cloudinary.com/tratahuong01/image/upload/v1623289152/Avatar/d5peo862j01zy9btpuee.jpg"
          className="w-12 h-12 object-cover rounded-full"
          alt=""
        />
      </div>
      <div className="w-10/12 pl-3">
        <p className="flex items-center flex-wrap ">
          <span className="w-full font-semibold block dark:text-white">
            Trà Hưởng
          </span>
          <br />
          <span
            className="w-full text-sm text-gray-700 dark:text-white py-0.5 
              flex items-center"
          >
            Đặt biệt danh
          </span>
        </p>
        <input
          type="text"
          className="w-full p-1.5 mt-1 border-2 border-solid 
            border-blue-500 rounded-xl bg-gray-100 dark:bg-dark-third hidden dark:text-white
            flex justify-center items-center"
        />
      </div>
      <div className="w-1/12 text-center flex">
        <i
          className="fas fa-pen-nib cursor-pointer dark:text-white 
          ml-5 text-xl flex items-center"
        ></i>
        <i
          className="fas fa-check cursor-pointer dark:text-white 
          ml-5 text-xl flex items-center hidden"
        ></i>
      </div>
    </div>
  );
}

export default ItemNickName;
