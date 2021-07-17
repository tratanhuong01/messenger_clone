import React from "react";
import { useDispatch, useSelector } from "react-redux";
import * as feelsAction from "../../../../../actions/feels/index";

function ItemModalFeel(props) {
  //
  const { item, message, dataFeel, setDataCurrent } = props;

  const states = useSelector((state) => {
    return {
      isLogin: state.isLogin,
      messages: state.messages,
    };
  });

  const { isLogin, messages } = states;

  const data = {
    group: messages.group,
    userFeel: isLogin.user,
    message: message,
  };

  const dispatch = useDispatch();

  const removeListFeel = () => {
    let dataFeelClone = { ...dataFeel };
    let index = dataFeelClone.listFeel.findIndex(
      (item) => item.feelUser.id === isLogin.user.id
    );
    dataFeelClone.listFeel.splice(index, 1);
    return dataFeelClone.listFeel;
  };

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
        {item.feelUser.id === isLogin.user.id ? (
          <div
            onClick={() => {
              dispatch(feelsAction.deleteFeel(data));
              setDataCurrent(removeListFeel());
            }}
            className="px-3 cursor-pointer"
          >
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
