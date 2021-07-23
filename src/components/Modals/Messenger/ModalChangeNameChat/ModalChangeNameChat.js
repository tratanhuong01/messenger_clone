import React, { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import * as modalsAction from "../../../../actions/modals/index";
import CloseModal from "../../../UI/CloseModal/CloseModal";
import * as groupMessagesAction from "../../../../actions/groupmessage/index";

function ModalChangeNameChat(props) {
  //
  const dispatch = useDispatch();

  const states = useSelector((state) => {
    return {
      messages: state.messages,
      isLogin: state.isLogin,
      socket: state.socket,
    };
  });

  const { messages, isLogin, socket } = states;

  const [disabled, setDisabled] = useState(
    messages.group.nameGroupMessage === null ? true : false
  );

  const [name, setName] = useState(
    messages.group.nameGroupMessage === null
      ? ""
      : messages.group.nameGroupMessage
  );

  const onChange = (e) => {
    setName(e.target.value);
    e.target.value.length > 0 ? setDisabled(false) : setDisabled(true);
  };

  const data = {
    name: name,
    id: messages.group.id,
    group: messages.group,
    user: isLogin.user,
    socket: socket,
    members: messages.members,
  };

  return (
    <div
      className="shadow-sm border border-solid border-gray-500 py-3 pl-1.5 pr-1.5 pt-0
        bg-white w-full fixed z-50 top-1/2 left-1/2 dark:bg-dark-second rounded-lg 
        sm:w-10/12 md:w-2/3 lg:w-2/3 xl:w-1/3 transform -translate-x-1/2 -translate-y-1/2"
    >
      <div className="w-full text-center">
        <p className="text-xl font-semibold py-2.5 pb-4 dark:text-white">
          Đổi tên đoạn chat
        </p>
        <CloseModal />
        <hr />
      </div>
      <div className="w-full p-4">
        <p className="text-xs dark:text-white font-semibold py-2">
          Mọi người đều biết khi tên nhóm chat thay đổi.
        </p>
        <input
          type="text"
          className="w-full p-2.5 border-2 border-solid font-semibold rounded-lg
          border-blue-500 bg-gray-100 dark:bg-dark-third dark:text-white"
          value={name}
          onChange={onChange}
        />
      </div>
      <div className="text-right pt-3">
        <button
          onClick={() => dispatch(modalsAction.closeModal())}
          type="button"
          className="cursor-pointer w-1/5 border-none 
          font-semibold text-blue-500 rounded-lg p-2 mx-2"
        >
          Hủy
        </button>
        <button
          onClick={() =>
            dispatch(groupMessagesAction.updateNameGroupMessageRequest(data))
          }
          type="button"
          className={`w-1/4 border-none font-semibold text-white 
          rounded-lg p-2 mx-2 ${
            disabled ? "bg-gray-500 cursor-not-allowed " : "bg-blue-500"
          }`}
          disabled={name.length > 0 && disabled === false ? false : true}
        >
          Lưu
        </button>
      </div>
    </div>
  );
}

export default ModalChangeNameChat;
