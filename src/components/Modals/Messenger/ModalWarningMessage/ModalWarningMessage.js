import React, { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import CloseModal from "../../../UI/CloseModal/CloseModal";
import * as modalsAction from "../../../../actions/modals/index";
import * as messagesAction from "../../../../actions/messages/index";

function ModalWarningMessage(props) {
  //
  const dispatch = useDispatch();

  const [typeRemove, setTypeRemove] = useState(-1);

  const { messageCurrent, userStateMessage } = props;

  const states = useSelector((state) => {
    return {
      isLogin: state.isLogin,
      messages: state.messages,
      socket: state.socket,
    };
  });

  const { isLogin, messages, socket } = states;

  const data = {
    userStateMessage: userStateMessage,
    user: isLogin.user,
    group: messages.group,
    typeRemove,
    socket: socket,
    members: messages.members,
  };
  console.log(messageCurrent);
  return (
    <div
      className="shadow-sm border border-solid border-gray-500 py-3 pl-1.5 pr-1.5 pt-0
        bg-white w-full fixed z-50 top-1/2 left-1/2 dark:bg-dark-second rounded-lg 
        sm:w-10/12 md:w-2/3 lg:w-2/3 xl:w-5/12"
      style={{ transform: "translate(-50%,-50%)", zIndex: "10" }}
    >
      <div className="w-full text-center py-2">
        <p className="text-xl font-bold py-2.5 pb-4 dark:text-white">
          Bạn muốn ai không nhìn thấy tin nhắn này nữa?
        </p>
        <CloseModal />
        <hr />
      </div>
      <div className="w-full">
        {messageCurrent.idUser === isLogin.user.id &&
        messageCurrent.stateMessageList[0].state !== 1 ? (
          <div className="w-full">
            <div className="w-full p-6 pb-2 inline-block ">
              <input
                onChange={() => {
                  setTypeRemove(1);
                }}
                type="radio"
                className="text-4xl pb-1"
                style={{ transform: "scale(1.5)" }}
                name="state"
                value={"0"}
              />
              &nbsp; &nbsp; &nbsp;
              <span className="font-bold dark:text-white">
                Thu hồi với mọi người
              </span>
            </div>
            <div className="w-11/12 pl-3 ml-auto dark:text-white">
              Bạn sẽ gỡ vĩnh viễn tin nhắn này đối với tất cả các thành viên
              trong đoạn chat. Họ sẽ thấy rằng bạn đã thu hồi tin nhắn và vẫn có
              thể báo cáo tin nhắn đó.
            </div>
          </div>
        ) : (
          ""
        )}

        <div className="w-full">
          <div className="w-full p-6 pb-2 inline-block ">
            <input
              onChange={() => {
                setTypeRemove(2);
              }}
              type="radio"
              className="text-4xl pb-1"
              style={{ transform: "scale(1.5)" }}
              name="state"
              value={"1"}
            />
            &nbsp; &nbsp; &nbsp;
            <span className="font-bold dark:text-white">Gỡ ở phía bạn</span>
          </div>
          <div className="w-11/12 pl-3 ml-auto dark:text-white">
            Chúng tôi sẽ gỡ tin nhắn này cho bạn. Những thành viên khác trong
            đoạn chat vẫn có thể xem được.
          </div>
        </div>
      </div>
      <div className="text-right pt-5">
        <button
          onClick={() => dispatch(modalsAction.closeModal())}
          type="button"
          className="cursor-pointer w-1/5 border-none 
          font-bold text-blue-500 rounded-lg p-2 mx-2"
        >
          Hủy
        </button>
        <button
          onClick={() => dispatch(messagesAction.deleteMessage(data))}
          type="button"
          className={`cursor-pointer w-1/4  border-none 
          font-bold text-white rounded-lg p-2 mx-2 ${
            typeRemove === -1 ? "bg-gray-500 cursor-not-allowed" : "bg-1877F2"
          }`}
          disabled={typeRemove === -1 ? true : false}
        >
          Xóa , gỡ bỏ
        </button>
      </div>
    </div>
  );
}

export default ModalWarningMessage;
