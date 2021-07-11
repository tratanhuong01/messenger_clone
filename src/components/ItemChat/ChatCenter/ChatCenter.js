import React from "react";
import * as process from "../../../functions/process";

function ChatCenter(props) {
  //
  const { item, itemMain, user } = props;

  const data = () => {
    switch (item.type) {
      case 0:
        return `${itemMain.idUser === user.id ? "Bạn" : itemMain.lastName} ${
          item.data[0].content
        } `;
      case 1:
        return process.gereral(
          user,
          itemMain,
          JSON.parse(item.data[0].src),
          item
        );

      default:
        return "";
    }
  };
  return (
    <p
      className="w-11/12 z-0 mx-auto font-semibold text-sm py-2 dark:text-gray-300 
    text-gray-700 text-center"
    >
      {data()}
    </p>
  );
}

export default ChatCenter;
