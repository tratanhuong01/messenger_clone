import React from "react";
import CloseModal from "../../../UI/CloseModal/CloseModal";

ModalRegister.propTypes = {};

function ModalRegister(props) {
  return (
    <div
      id="form-register"
      style={{ height: "600px" }}
      className="overflow-x-auto wrapper-scrollbar w-11/12 fixed 
        top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 opacity-100 bg-white z-50 border-2 
        border-solid border-gray-300 pl-6 sm:w-11/12 sm:mt-12 lg:w-4/5 xl:w-1/3 xl:mt-4"
    >
      <div className="w-full">
        <CloseModal />
        <h1 className="py-2.5 text-3xl font-semibold">Đăng Kí</h1>
      </div>
      <p className="pb-2.5">Nhanh Chóng Dễ Dàng</p>
      <hr />
      <br />
      <form action="">
        <div className="w-full flex">
          <input
            type="text"
            name="firstName"
            className="input_register w-47per p-2 rounded-lg border-2 border-solid border-gray-300 
                  "
            placeholder="Họ"
          />
          &nbsp;
          <input
            type="text"
            name="lastName"
            className="input_register w-47per ml-2.5 p-2 rounded-lg border-2 border-solid border-gray-300 
                  "
            placeholder="Tên"
          />
        </div>
        <div className="w-full flex">
          <ul className="w-1/2 mb-2.5 mt-2.5 ">
            <li className="w-full text-red-600 value_error"></li>
          </ul>
          <ul className="w-1/2 mb-2.5 mt-2.5 ">
            <li className="w-full text-red-600 value_error"></li>
          </ul>
        </div>
        <div className="w-full">
          <input
            type="text"
            name="emailOrPhone"
            className="input_register w-96per p-2 rounded-lg border-2 
              border-solid border-gray-300 "
            id="emailOrPhone"
            placeholder="Số Di Động Hoặc Email"
          />
        </div>
        <ul className="w-full mb-4 mt-4">
          <li className="w-full text-red-600 value_error"></li>
        </ul>
        <div
          className="w-full email_again_one mb-4"
          style={{ display: "none" }}
          id="email-again"
        >
          <input
            type="text"
            name="emailAgain"
            className="
              input_register w-96per p-2 rounded-lg border-2 border-solid border-gray-300 "
            placeholder="Nhập Lại Email"
          />
          <ul className="w-full">
            <li className="w-full text-red-600 value_error mt-4 mb-4"></li>
          </ul>
        </div>
        <div className="w-full">
          <input
            type="password"
            name="passWord"
            className="input_register w-96per p-2 rounded-lg border-2 
              border-solid border-gray-300 "
            placeholder="Mật Khẩu Mới"
          />
        </div>
        <ul className="w-full mb-4 mt-4">
          <li className="w-full text-red-600 value_error "></li>
        </ul>
        <div className="form_4">
          <p className="pb-4">
            <b className="text-sm">Ngày Sinh</b>
          </p>
          <input
            type="date"
            name="NgaySinh"
            className="w-96per border-2 border-solid border-gray-200 p-2 font-semibold"
          />
        </div>
        <div className="w-full mb-2.5 mt-2.5">
          <p className="block">
            <b className="text-sm">Giới Tính</b>
          </p>
          <div className="w-full flex mb-2.5">
            <div
              className="mt-2.5 w-30per mr-4 p-2 border-gray-300 
                  border-solid border-1"
            >
              <label className="mr-16">
                <b>Nam</b>
              </label>
              <input type="radio" name="GioiTinh" />
            </div>
            <div
              className="mt-2.5 w-30per mr-4 p-2 border-gray-300 
                  border-solid border-1"
            >
              <label className="mr-16">
                <b>Nữ</b>
              </label>
              <input type="radio" name="GioiTinh" />
            </div>
            <div
              className="mt-2.5 w-30per mr-4 p-2 border-gray-300 
                  border-solid border-1"
            >
              <label className="mr-16">
                <b>Khác</b>
              </label>
              <input type="radio" name="GioiTinh" />
            </div>
          </div>
        </div>
        <div className="form_5">
          <p style={{ fontSize: "14px", color: "#737373" }}>
            Bằng cách nhấp vào Đăng ký, bạn đồng ý với
            <span style={{ color: "#385989" }}>
              {" "}
              Điều khoản, Chính sách dữ liệu
            </span>{" "}
            và <span style={{ color: "#385989" }}>Chính sách cookie</span> của
            chúng tôi. Bạn có thể nhận được thông báo của chúng tôi qua SMS và
            hủy nhận bất kỳ lúc nào.
          </p>
        </div>
        <div className="form_5 text-center p-4">
          <button
            type="button"
            className="text-xl w-1/2 p-2.5 border rounded-lg 
              text-white cursor-pointer bg-green-500"
            style={{ backgroundColor: "#00a400" }}
          >
            Đăng Kí
          </button>
        </div>
      </form>
    </div>
  );
}

export default ModalRegister;
