import React from "react";

ItemFriendRequest.propTypes = {};

function ItemFriendRequest(props) {
  const { item } = props;
  return (
    <div className="w-22% mx-3 mb-6 flex flex-wrap p-2 bg-white relative dark:bg-dark-second">
      <span
        className="font-semibold text-xl cursor-pointer absolute top-2 
        right-4 dark:text-gray-300"
      >
        &times;
      </span>
      <div className="w-full flex mb-2 mt-1 justity-center">
        <img
          src={item.avatar}
          className="w-24 h-24  object-cover 
          rounded-full mx-auto"
          alt=""
        />
      </div>
      <p className="w-full font-semibold text-center cursor-pointer mb-1 dark:text-white">
        {`${item.firstName} ${item.lastName}`}
      </p>
      <p
        className="w-full font-semibold text-center cursor-pointer 
        text-gray-500 text-xs mb-1 dark:text-gray-300"
      >
        Từ hệ thống
      </p>
      <p
        className="w-full font-semibold text-center cursor-pointer 
        text-gray-500 text-xs dark:text-gray-300"
      >
        Chưa có nhóm chung
      </p>
      <div className="w-full mt-2 p-2 flex justify-center dark:bg-dark-second">
        <button
          className="py-1 text-xm px-5 border-2 border-solid border-blue-500 
          text-blue-700 font-semibold hover:bg-blue-200 rounded-lg dark:bg-dark-second"
        >
          Kết bạn
        </button>
      </div>
    </div>
  );
}

export default ItemFriendRequest;
