import React from "react";
import { useSelector } from "react-redux";
import ItemGroupChat from "../../../ItemChat/ItemGroupChat/ItemGroupChat";
import ItemSingleChat from "../../../ItemChat/ItemSingleChat/ItemSingleChat";
import * as process from "../../../../functions/process";

CustomChatTop.propTypes = {};

function CustomChatTop(props) {
  //
  const states = useSelector((state) => {
    return {
      messages: state.messages,
      isLogin: state.isLogin,
    };
  });

  const { messages, isLogin } = states;

  const item = messages.data;

  const { user, name } = process.dataUsersChat(item, isLogin.user.id);

  return (
    <div className="w-full mt-2">
      {item[0].typeGroupMessage === "0" ? (
        <ItemSingleChat
          width="w-16"
          height="h-16"
          margin="my-2"
          padding=""
          widthParent=""
          heightParent=""
          user={user}
        />
      ) : (
        <ItemGroupChat
          width="w-10"
          height="h-10"
          margin="mb-1.5"
          padding=""
          widthParent="w-16"
          heightParent="h-16"
          user={user}
        />
      )}
      <p className="font-semibold text-center dark:text-white">{name}</p>
      <p className="font-semibold text-center text-sm text-gray-600 dark:text-gray-300">
        Đang hoạt động
      </p>
    </div>
  );
}

export default CustomChatTop;
