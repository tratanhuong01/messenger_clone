import React from "react";

FormLogin.propTypes = {};

function FormLogin(props) {
  return (
    <form
      className="w-full bg-white"
      action="http://127.0.0.1:8000/ProcessLogin"
      method="post"
    >
      <input
        type="text"
        name="emailOrPhone"
        className="w-96per p-3 m-2.5 rounded-lg border-2 border-solid 
                                border-gray-200 "
        placeholder="Email Hoặc Số Điện Thoại"
      />
      <p className="py-2 text-left pl-3 font-semibold text-red-600"></p>
      <input
        type="password"
        name="passWord"
        className="w-96per p-3 m-2.5 rounded-lg border-2 border-solid border-gray-200 
                                "
        placeholder="Mật Khẩu"
      />
      <p className="py-2 text-left pl-3 font-semibold text-red-600"></p>
      <button
        className="mx-auto ml-2 w-93per p-3 my-2.5 border-none rounded-lg bg-1877F2 text-sm text-white font-semibold"
        type="submit"
      >
        Đăng Nhập
      </button>
      <p className="text-1877F2 bg-white p-4 bg-white cursor-pointer">
        Quên Tài khoản
      </p>
    </form>
  );
}

export default FormLogin;
