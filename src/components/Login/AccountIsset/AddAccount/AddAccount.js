import React from "react";

AddAccount.propTypes = {};

function AddAccount(props) {
  return (
    <div
      className="w-1/4 mr-5 relative border-2 mt-5 border-solid border-gray-300 
    shadow-lg cursor-pointer"
    >
      <div className="w-full mx-auto relative h-40 bg-gray-300">
        <div
          className="w-10 h-10 rounded-full bg-blue-500 flex justify-center top-1/2
            left-1/2 transform -translate-y-1/2 -translate-x-1/2 absolute"
        >
          <i className="bx bx-plus text-3xl text-white my-1"></i>
        </div>
      </div>
      <p className="font-semibold my-3 text-center text-blue-500 text-xm">
        Thêm tài khoản
      </p>
    </div>
  );
}

export default AddAccount;
