import React from "react";

AddFriendByEmailPhone.propTypes = {};

function AddFriendByEmailPhone(props) {
  return (
    <div className="w-full my-2.5 flex">
      <div
        className="w-full flex items-center font-semibold cursor-pointer py-2 
        hover:bg-gray-200 px-6 dark:text-gray-300 dark:hover:bg-dark-third"
      >
        <span
          className="bx bx-user-plus text-2xl text-blue-500 
          cursor-pointer mr-2"
        ></span>
        <span className="hidden md:block">
          Thêm bạn bằng email hoặc số điện thoại
        </span>
      </div>
    </div>
  );
}

export default AddFriendByEmailPhone;
