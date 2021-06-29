import React from "react";

ItemAccount.propTypes = {};

function ItemAccount(props) {
  return (
    <div
      className="w-1/4 mr-5 mt-5 relative border-2 border-solid border-gray-300 
              shadow-lg cursor-pointer"
    >
      <img
        src="http://res.cloudinary.com/tratahuong01/image/upload/v1623289152/Avatar/d5peo862j01zy9btpuee.jpg"
        className="w-full mx-auto object-cover h-40"
        alt=""
      />
      <p className="font-semibold my-3 text-center text-xm">Trà Hưởng</p>
      <span
        className="absolute top-0 left-0 cursor-pointer 
                  px-1.5 flex  items-center hover:bg-white hover:-left-2 rounded-full bg-gray-300 font-semibold
                  justify-center transform hover:scale-125 hover:-top-2 "
      >
        ×
      </span>
    </div>
  );
}

export default ItemAccount;
