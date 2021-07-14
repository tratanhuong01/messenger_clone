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
      case 3:
        let string =
          JSON.parse(item.data[0].src).id === user.id
            ? "bạn"
            : JSON.parse(item.data[0].src).firstName +
              " " +
              JSON.parse(item.data[0].src).lastName;
        return `${itemMain.idUser === user.id ? "Bạn" : itemMain.lastName} ${
          item.data[0].content
        } ${string} vào nhóm .`;
      case 4:
        let dt =
          JSON.parse(item.data[0].src).id === user.id
            ? "bạn"
            : JSON.parse(item.data[0].src).user.firstName +
              " " +
              JSON.parse(item.data[0].src).user.lastName;
        return `${itemMain.idUser === user.id ? "Bạn" : itemMain.lastName} ${
          item.data[0].content
        } ${dt} khỏi nhóm .`;
      case 1:
        return process.gereral(
          user,
          itemMain,
          JSON.parse(item.data[0].src),
          item
        );

      default:
        return `${itemMain.idUser === user.id ? "Bạn" : itemMain.lastName} ${
          item.data[0].content
        } `;
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
