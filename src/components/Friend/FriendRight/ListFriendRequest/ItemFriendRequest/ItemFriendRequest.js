import React from "react";
import { useDispatch, useSelector } from "react-redux";
import * as relationshipsActions from "../../../../../actions/relationshipusers/index";
import * as modalsAction from "../../../../../actions/modals/index";

function ItemFriendRequest(props) {
  //
  const states = useSelector((state) => {
    return {
      isLogin: state.isLogin,
    };
  });

  const { isLogin } = states;

  const dispatch = useDispatch();

  const { item } = props;

  const relationship = {
    userSend: isLogin.user,
    userReceive: item,
  };

  return (
    <div className="w-22% mx-3 mb-6 flex flex-wrap p-2 bg-white relative dark:bg-dark-second">
      <span
        className="font-semibold text-xl cursor-pointer absolute top-2 
        right-4 dark:text-gray-300"
      >
        &times;
      </span>
      <div className="w-full flex mb-2 mt-1 justity-center">
        <img
          onClick={() => dispatch(modalsAction.openModalProfile(item))}
          src={item.avatar}
          className="w-24 h-24  object-cover cursor-pointer 
          rounded-full mx-auto"
          alt=""
        />
      </div>
      <p
        onClick={() => dispatch(modalsAction.openModalProfile(item))}
        className="w-full font-semibold text-center cursor-pointer mb-1 dark:text-white"
      >
        {`${item.firstName} ${item.lastName}`}
      </p>
      <p
        className="w-full font-semibold text-center cursor-pointer 
        text-gray-500 text-xs mb-1 dark:text-gray-300"
      >
        Từ hệ thống
      </p>
      <p
        className="w-full font-semibold text-center cursor-pointer 
        text-gray-500 text-xs dark:text-gray-300"
      >
        Chưa có nhóm chung
      </p>
      <div className="w-full mt-2 p-2 flex justify-center dark:bg-dark-second">
        <button
          onClick={() =>
            dispatch(
              relationshipsActions.addRelationsipUserRequest(relationship)
            )
          }
          className="py-1 text-xm px-5 border-2 border-solid border-blue-500 
          text-blue-700 font-semibold hover:bg-blue-200 rounded-lg dark:bg-dark-second"
        >
          Kết bạn
        </button>
      </div>
    </div>
  );
}

export default ItemFriendRequest;
