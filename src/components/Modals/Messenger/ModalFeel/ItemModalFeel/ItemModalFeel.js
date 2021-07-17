import React from "react";
import { useSelector } from "react-redux";

function ItemModalFeel(props) {
  //
  const { item, message } = props;

  const states = useSelector((state) => {
    return {
      isLogin: state.isLogin,
    };
  });

  const { isLogin } = states;

  return (
    <div className="w-full py-2 flex">
      <div className="w-3/5 flex">
        <div className="w-14 h-14 relative">
          <img
            src={item.feelUser.avatar}
            className="w-12 h-12 object-cover rounded-full border-2 border-solid border-gray-300"
            alt=""
          />
          <span className="absolute bottom-2 right-1">{item.iconFeel}</span>
        </div>
        {message.idUser === isLogin.user.id ? (
          <div className="px-3 cursor-pointer">
            <p className="pb-1 dark:text-white font-semibold">
              {`${item.feelUser.firstName} ${item.feelUser.lastName}`}
            </p>
            <p className="text-sm font-semibold dark:text-white">Nhấn để gỡ</p>
          </div>
        ) : (
          <div className="px-3 cursor-pointer flex">
            <p className="pb-1 dark:text-white font-semibold flex items-center">
              {`${item.feelUser.firstName} ${item.feelUser.lastName}`}
            </p>
          </div>
        )}
      </div>
      <div className=" w-2/5 text-right relative">
        <span className="absolute py-2 text-3xl right-3">{item.iconFeel}</span>
      </div>
    </div>
  );
}

export default ItemModalFeel;
