import React from "react";

AddFriendByEmailPhone.propTypes = {};

function AddFriendByEmailPhone(props) {
  return (
    <div className="w-full my-2.5 flex">
      <div
        className="w-full flex items-center font-semibold cursor-pointer py-2 
        hover:bg-gray-200 px-6"
      >
        <span
          className="bx bx-user-plus text-2xl text-blue-500 
      cursor-pointer mr-2"
        ></span>
        Thêm bạn bằng email hoặc số điện thoại
      </div>
    </div>
  );
}

export default AddFriendByEmailPhone;
