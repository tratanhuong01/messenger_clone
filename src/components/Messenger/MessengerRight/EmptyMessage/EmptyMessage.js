import React from "react";
import { Link } from "react-router-dom";
import * as Config from "../../../../constants/Config";
import LoadingRight from "../../../UI/LoadingRight/LoadingRight";

function EmptyMessage(props) {
  //
  const { slug } = props;

  return (
    <div className="w-full h-full relative">
      {slug === "" || typeof slug === "undefined" ? (
        <div
          className="w-1/5 absolute top-1/2 left-1/2 transform -translate-x-1/2 
          -translate-y-1/2 "
        >
          <img
            src="/images/logo.png"
            className="w-16 h-16 mx-auto object-cover mb-3"
            alt=""
          />
          <p className="w-full text-center dark:text-gray-300 font-semibold my-3">
            Hiện chưa có tin nhắn nào
          </p>
          <p className="w-full text-center text-blue-500 cursor-pointer font-semibold my-3">
            <Link to={Config.PAGE_FRIEND} className="">
              Tìm bạn bè
            </Link>
          </p>
        </div>
      ) : (
        <LoadingRight />
      )}
    </div>
  );
}

export default EmptyMessage;
