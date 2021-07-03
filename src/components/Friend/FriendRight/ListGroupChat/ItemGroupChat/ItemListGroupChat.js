import React from "react";

ItemListGroupChat.propTypes = {};

function ItemListGroupChat(props) {
  return (
    <div className="w-22% mx-3 mb-6 flex flex-wrap p-2 bg-white relative py-10">
      <span
        className="font-semibold text-xl cursor-pointer absolute top-2 
        right-4 "
      >
        &times;
      </span>
      <div className="w-full flex mb-2 mt-1 justity-center">
        <img
          src="./images/boy.jpg"
          className="w-28 h-28 object-cover 
          rounded-full mx-auto"
          alt=""
        />
      </div>
      <p className="w-full font-semibold text-center cursor-pointer my-2">
        Lớp chính trị
      </p>
      <p
        className="w-full font-semibold text-center text-xs cursor-pointer 
        text-gray-500"
      >
        38 thành viên
      </p>
    </div>
  );
}

export default ItemListGroupChat;
