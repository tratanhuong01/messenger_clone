import React from "react";
import { Link } from "react-router-dom";
import ItemGroupChat from "../../../ItemChat/ItemGroupChat/ItemGroupChat";
// import ItemGroupChat from "../../../ItemChat/ItemGroupChat/ItemGroupChat";
import ItemSingleChat from "../../../ItemChat/ItemSingleChat/ItemSingleChat";
import * as Config from "../../../../constants/Config";
import * as process from "../../../../functions/process";

function ItemChatLeft(props) {
  //
  const { item, idUser, slug } = props;

  const { user, name } = process.dataUsersChat(item, idUser);

  const contentChild = (item, main, idUser) => {
    switch (main.type) {
      case 0:
        return `${item.idUser === idUser ? "You : " : item.lastName + " : "} ${
          main.data[0].content
        }`;
      case 1:
        return `${
          item.idUser === idUser ? "Bạn" : item.lastName + " :"
        } đã gửi ${main.data.length} hình ảnh.`;
      case 2:
        return `${
          item.idUser === idUser ? "Bạn" : item.lastName + " :"
        } đã gửi một nhãn dán.`;
      case 3:
        return `${
          item.idUser === idUser ? "Bạn" : item.lastName + " :"
        } đã gửi một gif.`;
      default:
        return `${item.idUser === idUser ? "Bạn" : item.lastName + " : "} ${
          main.data[0].content
        }`;
    }
  };

  const processContent = () => {
    let main = "";
    switch (item[item.length - 1].typeMessage) {
      case "2":
        main = JSON.parse(item[item.length - 1].content);
        return contentChild(item[item.length - 1], main, idUser);
      case "1":
        main =
          item[item.length - 1].content !== null
            ? JSON.parse(item[item.length - 1].content).data[0].content
            : "";
        return main;
      default:
        return "";
    }
  };

  return (
    <>
      {item.length > 0 ? (
        <Link
          to={`${Config.PAGE_MESSENGER}/${item[0].idGroupMessage}`}
          className={`w-full mess-person user__chat__child cursor-pointer flex relative}`}
        >
          <div
            className={`w-full mess-person user__chat__child cursor-pointer flex relative py-2 px-1 
          ${
            item[0].idGroupMessage === slug
              ? " dark:bg-dark-third bg-gray-200 "
              : " dark:hover:bg-dark-third hover:bg-gray-200 "
          } `}
          >
            <div className="w-full flex justify-center md:w-1/5 mr-3">
              {item[0].typeGroupMessage === "0" ? (
                <ItemSingleChat
                  user={user}
                  width="w-14"
                  height="h-14"
                  margin=""
                  padding=""
                  widthParent="w-14"
                  heightParent="w-14"
                />
              ) : (
                <ItemGroupChat
                  user={user}
                  width="w-10"
                  height="h-10"
                  margin=""
                  padding=""
                  widthParent="w-16"
                  heightParent="w-16"
                />
              )}
            </div>
            <div className="w-4/5 hidden md:block">
              <div className="w-full">
                <span className="float-left font-semibold dark:text-gray-300">
                  {name}
                </span>
              </div>
              <div className="w-full flex py-1 text-sm flex  md:pr-3 xl:pr-0">
                <div className="w-full flex dark:text-white font-semibold">
                  <div
                    className="max-w-3/4 inline-block whitespace-nowrap
                  overflow-ellipsis overflow-hidden pr-1 text-gray-500"
                  >
                    {processContent()}
                  </div>
                  <div
                    className="w-1/4 flex pr-3 text-gray-500 inline-block whitespace-nowrap
                  overflow-ellipsis overflow-hidden"
                  >
                    3 ngày
                  </div>
                </div>
              </div>
              <div
                className="mess-edit top-4 right-8 text-center absolute rounded-full
              bg-gray-100 dark:bg-dark-second"
              >
                <i className="fas fa-ellipsis-h edit-mess dark:text-gray-300"></i>
              </div>
            </div>
          </div>
        </Link>
      ) : (
        ""
      )}
    </>
  );
}

export default ItemChatLeft;
