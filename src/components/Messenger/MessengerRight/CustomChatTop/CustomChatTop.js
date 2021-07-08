import React from "react";
import { useSelector } from "react-redux";
import ItemGroupChat from "../../../ItemChat/ItemGroupChat/ItemGroupChat";
import ItemSingleChat from "../../../ItemChat/ItemSingleChat/ItemSingleChat";

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

  const checkMemberChat = () => {
    let newUserChat = [];
    for (let index = 0; index < item.length; index++) {
      const element = item[index];
      if (
        newUserChat.findIndex((item) => item.idUser === element.idUser) === -1
      ) {
        newUserChat.push(element);
      }
    }
    return newUserChat;
  };

  const findUserChating = () => {
    let newData = null;
    item.forEach((element) => {
      if (isLogin.user.id === element.idUser) {
      } else {
        newData = element;
      }
    });
    return newData;
  };

  const generalNameGroup = () => {
    let data = checkMemberChat();
    let name = "";
    data.forEach((element) => {
      name += element.lastName + " , ";
    });
    return name;
  };

  const user = findUserChating();

  const userChat = checkMemberChat();

  return (
    <div className="w-full mt-2">
      {item[0].typeMessage === "0" ? (
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
          user={userChat}
        />
      )}
      <p className="font-semibold text-center dark:text-white">
        {item[0].typeMessage === "0"
          ? `${user.firstName} ${user.lastName}`
          : generalNameGroup()}
      </p>
      <p className="font-semibold text-center text-sm text-gray-600 dark:text-gray-300">
        Đang hoạt động
      </p>
    </div>
  );
}

export default CustomChatTop;
