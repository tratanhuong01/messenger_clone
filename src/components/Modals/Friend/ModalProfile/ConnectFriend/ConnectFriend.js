import React, { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import * as relationshipsAction from "../../../../../actions/relationshipusers/index";
import * as groupMessagesAction from "../../../../../actions/groupmessage/index";
import * as modalsAction from "../../../../../actions/modals/index";

function ConnectFriend(props) {
  //
  const states = useSelector((state) => {
    return {
      isLogin: state.isLogin,
    };
  });

  const { isLogin } = states;

  const { user, setShowConnectFriend } = props;

  const dispatch = useDispatch();

  const [hello, setHello] = useState(
    `Xin chào , tôi là ${isLogin.user.firstName} ${isLogin.user.lastName}`
  );

  const relationship = {
    userSend: isLogin.user,
    userReceive: user,
    content: hello,
  };

  return (
    <>
      <div className="w-full my-2 flex justify-center">
        <textarea
          name=""
          placeholder="Nhập lời chào"
          className="w-11/12 mx-auto p-3 rounded-lg border-2 border-solid dark:text-gray-300
            border-blue-500 max-h-32 h-32 resize-none dark:bg-dark-third font-semibold"
          defaultValue={hello}
          onChange={(event) => setHello(event.target.value)}
        ></textarea>
      </div>
      <div className="w-full my-2 relative flex justify-center">
        <button
          onClick={() => {
            setShowConnectFriend(false);
          }}
          className="border-2 border-solid border-indigo-500 text-indigo-500 font-semibold mr-5 bg-white
        py-2 px-8 hover:border-white hover:bg-indigo-500 hover:text-white rounded-full shadow-xl"
        >
          Hủy
        </button>
        <button
          onClick={async () => {
            await dispatch(
              relationshipsAction.addRelationsipUserRequest(relationship)
            );
            await dispatch(
              groupMessagesAction.addGroupMessageWaitRequest(relationship)
            );
            await dispatch(modalsAction.closeModal());
          }}
          className="border-2 border-solid border-white bg-indigo-500 text-white font-semibold rounded-full
        py-2 px-8 hover:border-indigo-500 hover:bg-white hover:text-indigo-500 shadow-xl ml-5"
        >
          Kết bạn
        </button>
      </div>
    </>
  );
}

export default ConnectFriend;
