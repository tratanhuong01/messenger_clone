import React from "react";
import { useDispatch, useSelector } from "react-redux";
import * as feelsAction from "../../../../../actions/feels/index";

function ItemFeel(props) {
  //
  const states = useSelector((state) => {
    return {
      isLogin: state.isLogin,
      messages: state.messages,
    };
  });

  const { isLogin, messages } = states;

  const { item, setShow, message } = props;

  const dispatch = useDispatch();

  const data = {
    group: messages.group,
    userFeel: isLogin.user,
    icon: item.icon,
    type: item.type,
    message: message,
  };

  return (
    <li
      onClick={() => {
        setShow(false);
        dispatch(feelsAction.addFeelRequest(data));
      }}
      className="px-2 py-2 text-xl cursor-pointer rounded-full hover:bg-gray-300 
        dark:hover:bg-dark-third"
    >
      {item.icon}
    </li>
  );
}

export default ItemFeel;
