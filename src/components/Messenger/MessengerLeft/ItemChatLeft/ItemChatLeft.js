import React from "react";
// import ItemGroupChat from "../../../ItemChat/ItemGroupChat/ItemGroupChat";
import ItemSingleChat from "../../../ItemChat/ItemSingleChat/ItemSingleChat";

ItemChatLeft.propTypes = {};

function ItemChatLeft(props) {
  const { item, idUser } = props;

  const findUserChating = () => {
    let newData = null;
    item.forEach((element) => {
      if (idUser === element.idUser) {
      } else {
        newData = element;
      }
    });
    return newData;
  };
  const user = item.length > 0 ? findUserChating() : null;
  return (
    <>
      {item.length > 0 ? (
        <div
          className="w-full mess-person user__chat__child cursor-pointer flex relative dark:hover:bg-dark-third
        hover:bg-gray-200 py-2 px-1"
        >
          <div className="w-full flex justify-center md:w-1/5 mr-3">
            <ItemSingleChat
              user={user}
              width="w-14"
              height="h-14"
              margin=""
              padding=""
              widthParent="w-14"
              heightParent="w-14"
            />
          </div>
          <div className="w-4/5 hidden md:block">
            <div className="w-full">
              <span className="float-left font-semibold dark:text-gray-300">
                {`${user.firstName} ${user.lastName}`}
              </span>
            </div>
            <div className="w-full flex py-1 text-sm flex  md:pr-3 xl:pr-0">
              <div className="w-full flex dark:text-white font-semibold">
                <div
                  className="max-w-3/4 inline-block whitespace-nowrap
                  overflow-ellipsis overflow-hidden pr-1 text-gray-500"
                >
                  {JSON.parse(item[item.length - 1].content).data[0].content}
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
      ) : (
        ""
      )}
    </>
  );
}

export default ItemChatLeft;
