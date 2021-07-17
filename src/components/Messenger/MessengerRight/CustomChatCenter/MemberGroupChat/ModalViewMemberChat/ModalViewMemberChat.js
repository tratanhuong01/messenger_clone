import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import ChildEditMember from "./ChildEditMember/ChildEditMember";
import * as modalsAction from "../../../../../../actions/modals/index";
import api from "../../../../../../api/api";
import { useHistory } from "react-router-dom";
import * as Config from "../../../../../../constants/Config";

function ModalViewMemberChat(props) {
  //
  const dispatch = useDispatch();

  const states = useSelector((state) => {
    return {
      isLogin: state.isLogin,
      messages: state.messages,
    };
  });

  const { isLogin, messages } = states;

  const { data, setShow, leader } = props;

  let datas = { ...data };

  datas.id = data.idUser;

  const history = useHistory();

  const [idGroupMessage, setIdGroupMessage] = useState(null);

  const chat = async () => {
    const result = await api(
      `getGroupMessage/${isLogin.user.id}/${datas.id}`,
      "GET",
      null,
      null
    );
    if (result.data === "" || result.data === null) setIdGroupMessage("");
    else setIdGroupMessage(result.data.groupMessage.id);
  };

  useEffect(() => {
    chat();
  }, []);

  return (
    <div
      className="w-72 absolute border-2 border-solid border-gray-300 z-50 shadow-lg 
      shadow-lg dark:border-dark-third top-10 right-0 bg-gray-100 dark:bg-dark-second"
    >
      {idGroupMessage !== null && (
        <ul className="w-full">
          {isLogin.user.id !== datas.idUser ? (
            <ChildEditMember
              onClick={() => {
                history.push(`${Config.PAGE_MESSENGER}/${idGroupMessage}`);
              }}
              label="Tin nhắn"
              id={idGroupMessage}
              link={true}
            />
          ) : (
            ""
          )}
          <ChildEditMember
            data={datas}
            onClick={(item) => {
              dispatch(modalsAction.openModalProfile(item));
              setShow(false);
            }}
            label="Xem trang cá nhân"
          />
          {datas.idUser !== leader.idUser &&
          isLogin.user.id === leader.idUser ? (
            <ChildEditMember label="Chỉ định làm quản trị viên" />
          ) : (
            ""
          )}
          {datas.idUser !== leader.idUser &&
          isLogin.user.id === leader.idUser ? (
            <ChildEditMember
              onClick={() => {
                dispatch(
                  modalsAction.openModalWarningLeaveGroup({
                    userDelete: datas,
                    user: isLogin.user,
                    group: messages.group,
                    type: 0,
                  })
                );
              }}
              label="Xóa thành viên"
            />
          ) : (
            ""
          )}
          {datas.idUser === isLogin.user.id && (
            <ChildEditMember
              onClick={() => {
                dispatch(
                  modalsAction.openModalWarningLeaveGroup({
                    userDelete: datas,
                    user: isLogin.user,
                    group: messages.group,
                    type: 1,
                  })
                );
              }}
              label="Rời khỏi nhóm"
              id={idGroupMessage}
              link={false}
            />
          )}
        </ul>
      )}
    </div>
  );
}

export default ModalViewMemberChat;
