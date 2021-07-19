import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useHistory } from "react-router-dom";
import * as relationshipsAction from "../../../../../actions/relationshipusers/index";
import * as Config from "../../../../../constants/Config";
import * as modalsAction from "../../../../../actions/modals/index";
import ButtonSwitch from "./ButtonSwitch/ButtonSwitch";
import api from "../../../../../api/api";

function FriendUser(props) {
  //
  const states = useSelector((state) => {
    return {
      isLogin: state.isLogin,
    };
  });

  const { isLogin } = states;

  const { setShowConnectFriend, profile, user } = props;

  const dispatch = useDispatch();

  const relationship = {
    userSend: isLogin.user,
    userRecivice: user,
  };

  const history = useHistory();

  const [idGroupMessage, setIdGroupMessage] = useState(null);

  useEffect(() => {
    async function chat() {
      const result = await api(
        `getGroupMessage/${isLogin.user.id}/${user.id}`,
        "GET",
        null,
        null
      );
      if (result.data !== "") setIdGroupMessage(result.data.groupMessage.id);
    }
    chat();
  }, []);

  const chat = () => {
    history.push(`${Config.PAGE_MESSENGER}/${idGroupMessage}`);
    dispatch(modalsAction.closeModal());
  };

  return (
    <div className="w-full my-2 relative flex justify-center">
      <button
        type="button"
        onClick={chat}
        className="border-2 border-solid border-indigo-500 text-indigo-500 font-semibold mr-5 bg-white
        py-2 px-8 hover:border-white hover:bg-indigo-500 hover:text-white rounded-full shadow-xl"
      >
        Nhắn tin
      </button>
      <ButtonSwitch
        profile={profile}
        setShowConnectFriend={setShowConnectFriend}
        relationship={relationship}
        dispatch={dispatch}
        relationshipsAction={relationshipsAction}
      />
    </div>
  );
}

export default FriendUser;
