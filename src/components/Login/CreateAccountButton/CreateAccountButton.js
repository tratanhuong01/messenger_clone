import React from "react";

CreateAccountButton.propTypes = {};

function CreateAccountButton(props) {
  return (
    <>
      <hr className="w-90% mx-auto mb-4" />
      <div className="w-full">
        <div className="bg-white mb-4">
          <button
            type="button"
            className="outline-none px-8 py-3 bg-36A420 text-15px
            font-semibold text-white rounded-lg cursor-pointer"
          >
            Tạo Tài Khoản
          </button>
        </div>
      </div>
    </>
  );
}

export default CreateAccountButton;
