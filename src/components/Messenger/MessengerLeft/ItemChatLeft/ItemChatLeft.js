import React from "react";
import { useHistory } from "react-router-dom";
import ItemGroupChat from "../../../ItemChat/ItemGroupChat/ItemGroupChat";
import ItemSingleChat from "../../../ItemChat/ItemSingleChat/ItemSingleChat";
import * as Config from "../../../../constants/Config";
import * as process from "../../../../functions/process";
import { useDispatch, useSelector } from "react-redux";
import * as messagesActions from "../../../../actions/messages/index";

function ItemChatLeft(props) {
  //
  const { item, idUser, slug } = props;

  const { user, name, image } = process.dataUsersChat(item, idUser);

  const states = useSelector((state) => {
    return {
      isLogin: state.isLogin,
    };
  });

  const { isLogin } = states;

  let clone = [...item];
  clone.reverse();

  let itemNew = clone.find((ele) => {
    let stateSend = 0;
    ele.stateMessageList.forEach((element) => {
      if (ele.idUser === element.userStateMessage.id) {
        stateSend = element.state;
      }
    });
    let stateView = 0;
    ele.stateMessageList.forEach((element) => {
      if (element.userStateMessage.id === isLogin.user.id) {
        stateView = element.state;
      }
    });
    if (
      (stateSend === 2 && stateView === 0) ||
      (stateSend !== 2 && stateView !== 2) ||
      (stateSend === 2 && stateView === 1)
    ) {
      return item.findIndex((dt) => dt.idMessage === ele.idMessage);
    }
  });

  let index =
    itemNew === null
      ? item.length - 1
      : item.findIndex((ele) => ele.idMessage === itemNew.idMessage);

  let userViewMessage = item[index].viewMessageList.find(
    (ele__) => isLogin.user.id === ele__.userViewMessage.id
  );

  let userStateMessage = item[index].stateMessageList.find(
    (ele__) => item[index].idUser === ele__.userStateMessage.id
  );

  const contentChild = (item, main, idUser) => {
    switch (main.type) {
      case 0:
        return `${item.idUser === idUser ? "You : " : item.lastName + " : "} ${
          main.data[0].content
        } · `;
      case 1:
        return `${
          item.idUser === idUser ? "Bạn" : item.lastName + " : "
        } đã gửi ${main.data.length} hình ảnh · `;
      case 2:
        return `${
          item.idUser === idUser ? "Bạn" : item.lastName + " : "
        } đã gửi một nhãn dán · `;
      case 3:
        return `${
          item.idUser === idUser ? "Bạn" : item.lastName + " : "
        } đã gửi một gif · `;
      default:
        return `${item.idUser === idUser ? "Bạn" : item.lastName + " : "}${
          main.data[0].content + " · "
        }`;
    }
  };

  const processContent = () => {
    let main = "";
    if (userStateMessage.state === 0)
      switch (item[index].typeMessage) {
        case "2":
          main = JSON.parse(item[index].content);
          return contentChild(item[index], main, idUser);
        case "1":
          main = "";
          if (item[index].content !== null) {
            switch (JSON.parse(item[index].content).type) {
              case 1:
                main = process.gereral(
                  isLogin.user,
                  item[index],
                  JSON.parse(JSON.parse(item[index].content).data[0].src),
                  JSON.parse(item[index].content)
                );
                break;
              case -1:
                main = JSON.parse(item[index].content).data[0].content;
                break;
              case 3:
                let dt = JSON.parse(item[index].content);
                let string =
                  JSON.parse(dt.data[0].src).id === isLogin.user.id
                    ? "bạn"
                    : JSON.parse(dt.data[0].src).firstName +
                      " " +
                      JSON.parse(dt.data[0].src).lastName;
                main = `${
                  item[index].idUser === isLogin.user.id
                    ? "Bạn"
                    : item[index].lastName
                } ${dt.data[0].content} ${string} vào nhóm .`;
                break;
              case 4:
                let res = JSON.parse(item[index].content);
                let strings =
                  JSON.parse(res.data[0].src).id === isLogin.user.id
                    ? "bạn"
                    : JSON.parse(res.data[0].src).user.firstName +
                      " " +
                      JSON.parse(res.data[0].src).user.lastName;
                main = `${
                  item[index].idUser === isLogin.user.id
                    ? "Bạn"
                    : item[index].lastName
                } ${res.data[0].content} ${strings} vào nhóm .`;
                break;
              default:
                main =
                  (item[index].idUser === idUser
                    ? "Bạn "
                    : item[index].lastName) +
                  " " +
                  JSON.parse(item[index].content).data[0].content;
                break;
            }
          }
          return main;
        default:
          return "";
      }
    else {
      return `${
        item[index].idUser === idUser ? "Bạn" : item[index].lastName + " : "
      } đã thu hồi một tin nhắn· `;
    }
  };

  const history = useHistory();

  const dispatch = useDispatch();

  return (
    <>
      {item.length > 0 ? (
        <div
          onClick={() => {
            history.push(`${Config.PAGE_MESSENGER}/${item[0].idGroupMessage}`);
            dispatch(
              messagesActions.seenAllMessageByIdMessage({
                group: userViewMessage.groupMessageViewMessage,
                user: isLogin.user,
              })
            );
          }}
          className={`w-full mess-person user__chat__child cursor-pointer flex relative py-2 px-1 
          ${
            item[0].idGroupMessage === slug
              ? " dark:bg-dark-third bg-gray-200 "
              : " dark:hover:bg-dark-third hover:bg-gray-200 "
          } `}
        >
          <div className="w-full flex justify-center md:w-1/5 mr-3">
            {item[0].typeGroupMessage === "0" ||
            item[0].typeGroupMessage === "-1" ||
            image !== null ? (
              <ItemSingleChat
                image={image}
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
            <div className="w-full text-left">
              <span
                className="w-full font-semibold dark:text-gray-300 inline-block whitespace-nowrap
                overflow-ellipsis overflow-hidden max-w-full pr-4"
              >
                {name}
              </span>
            </div>
            <div className="w-full flex py-1 text-sm flex  md:pr-3 xl:pr-0">
              <div
                className={`w-full flex text-left ${
                  typeof userViewMessage !== "undefined"
                    ? userViewMessage.view !== 2
                      ? "text-blue-500"
                      : "dark:text-white text-gray-500"
                    : ""
                } font-semibold`}
              >
                <div
                  className="max-w-3/4 inline-block whitespace-nowrap text-left 
                  overflow-ellipsis overflow-hidden pr-1"
                >
                  {processContent()}
                </div>
                <div
                  className="w-1/4 flex pr-3 inline-block whitespace-nowrap
                  overflow-ellipsis overflow-hidden"
                >
                  {process.timeGeneralLeft(item[index].dateCreated)}
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
      ) : (
        ""
      )}
    </>
  );
}

export default ItemChatLeft;
