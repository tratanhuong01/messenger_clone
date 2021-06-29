import React, { Component } from "react";
import { Link } from "react-router-dom";
import * as Config from "../../constants/Config";
class NotFound extends Component {
  render() {
    return (
      <div className="w-full h-screen dark:bg-dark-main bg-gray-100">
        <div
          className="w-1/3 absolute top-1/2 left-1/2 text-center bg-gray-100
          dark:bg-dark-main transform -translate-y-1/2 -translate-x-1/2"
        >
          <div className="w-full text-center py-4">
            <i className="bx bx-block text-8xl text-red-600"></i>
          </div>
          <p className="font-bold text-xl text-center dark:text-white">
            Trang này không hiển thị
          </p>
          <p className="text-gray-600 text-xm dark:text-white">
            Có thể liên kết đã hỏng hoặc trang đã bị gỡ. Hãy kiểm tra xem liên
            kết mà bạn đang cố mở có chính xác không.
          </p>
          <p className="text-center my-6">
            <Link
              to={Config.PAGE_MESSENGER}
              className="px-3 py-3 rounded-lg 
              font-semibold text-blue-500"
            >
              Vào messenger
            </Link>
          </p>
        </div>
      </div>
    );
  }
}

export default NotFound;
