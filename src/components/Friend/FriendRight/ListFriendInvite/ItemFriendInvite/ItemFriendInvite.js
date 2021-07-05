import React from "react";

ItemFriendInvite.propTypes = {};

function ItemFriendInvite(props) {
  const user = props.item.userRelationshipUser;
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
          src={user.avatar}
          className="w-24 h-24  object-cover
          rounded-full mx-auto"
          alt=""
        />
      </div>
      <p className="w-full font-semibold text-center cursor-pointer mb-1 dark:text-white">
        {`${user.firstName} ${user.lastName}`}
      </p>
      <div className="w-full p-2 flex justify-center dark:bg-dark-second">
        <button
          className="py-1 text-xm px-5 border-2 border-solid border-blue-500 text-sm
          text-blue-700 font-semibold hover:bg-blue-200 rounded-lg dark:bg-dark-second"
        >
          Đồng ý
        </button>
      </div>
      <div className="w-full p-2 flex justify-center dark:bg-dark-second">
        <button
          className="py-1 text-xm px-5 border-2 border-solid border-blue-500 text-sm
          text-blue-700 font-semibold hover:bg-blue-200 rounded-lg dark:bg-dark-second"
        >
          Xóa
        </button>
      </div>
    </div>
  );
}

export default ItemFriendInvite;
