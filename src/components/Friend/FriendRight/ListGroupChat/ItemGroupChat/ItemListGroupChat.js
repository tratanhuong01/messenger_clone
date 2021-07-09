import React from "react";
import ItemGroupChat from "../../../../ItemChat/ItemGroupChat/ItemGroupChat";
import * as process from "../../../../../functions/process";
import { useSelector } from "react-redux";

function ItemListGroupChat(props) {
  //
  const states = useSelector((state) => {
    return {
      isLogin: state.isLogin,
    };
  });

  const { isLogin } = states;

  const { item } = props;

  const { user, name } = process.dataUsersChat(item, isLogin.user.id);

  return (
    <div
      className="w-22% mx-3 mb-6 flex flex-wrap p-2 bg-white relative py-10 
    dark:bg-dark-second item"
    >
      <span
        className="font-semibold text-xl cursor-pointer absolute top-2 
        right-4 dark:text-gray-300"
      >
        &times;
      </span>
      <div className="w-full flex mb-2 mt-1 h-28 justity-center">
        <ItemGroupChat
          user={user}
          width="w-18"
          height="h-18"
          margin=""
          padding=""
          widthParent="w-28"
          heightParent="w-28"
        />
      </div>
      <p
        className="w-full font-semibold text-center cursor-pointer my-2 
      dark:text-white"
      >
        {name}
      </p>
      <p
        className="w-full font-semibold text-center text-xs cursor-pointer 
        text-gray-500 dark:text-gray-300"
      >
        {item.length} thành viên
      </p>
    </div>
  );
}

export default ItemListGroupChat;
