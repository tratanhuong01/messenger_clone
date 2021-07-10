import React, { useState } from "react";
import CloseModal from "../../../UI/CloseModal/CloseModal";
import * as Types from "../../../../constants/ActionTypes";
import ItemColor from "./ItemColor/ItemColor";
import { useDispatch, useSelector } from "react-redux";
import * as modalsAction from "../../../../actions/modals/index";
import * as groupMessagesAcion from "../../../../actions/groupmessage/index";

function ModalChangeColor(props) {
  //
  const states = useSelector((state) => {
    return {
      messages: state.messages,
      isLogin: state.isLogin,
    };
  });

  const { messages, isLogin } = states;

  const dispatch = useDispatch();

  const [color, setColor] = useState(null);

  const [disabled, setDisabled] = useState(false);

  const showAllColors = Types.COLOR_CHAT.map((item, index) => {
    return (
      <ItemColor item={item} key={index} color={color} setColor={setColor} />
    );
  });

  const change = () => {
    const data = {
      color: color.replaceAll("#", ""),
      group: messages.group,
      user: isLogin.user,
    };
    setDisabled(true);
    dispatch(groupMessagesAcion.updateColorChatRequest(data));
  };

  return (
    <div
      className="shadow-sm border border-solid border-gray-500 py-3 pl-1.5 pr-1.5 pt-0
    bg-white w-full fixed z-50 top-1/2 left-1/2 dark:bg-dark-second rounded-lg 
    sm:w-10/12 md:w-2/3 lg:w-2/3 xl:w-1/3 transform -translate-x-1/2 -translate-y-1/2"
    >
      <div className="w-full text-center">
        <p className="text-xl font-semibold py-2.5 pb-4 dark:text-white">Màu</p>
        <CloseModal />
        <hr />
      </div>
      <div className="w-full py-4">
        <ul className="w-full flex flex-wrap pl-2">{showAllColors}</ul>
      </div>
      <div className="text-right pt-3">
        <button
          onClick={() => dispatch(modalsAction.closeModal())}
          type="button"
          className="cursor-pointer w-1/5  border-none 
          font-semibold text-blue-500 rounded-lg p-2 mx-2"
        >
          Hủy
        </button>
        <button
          onClick={change}
          type="button"
          className={`cursor-pointer w-1/4 border-none font-semibold 
          text-white rounded-lg p-2 mx-2 ${
            disabled === false && color === null ? "bg-gray-500" : " bg-1877F2"
          }`}
          disabled={disabled === false && color === null ? true : false}
        >
          Lưu
        </button>
      </div>
    </div>
  );
}

export default ModalChangeColor;
