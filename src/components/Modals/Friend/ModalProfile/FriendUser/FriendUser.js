import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { useHistory } from "react-router-dom";
import * as relationshipsAction from "../../../../../actions/relationshipusers/index";
import * as Config from "../../../../../constants/Config";
import * as modalsAction from "../../../../../actions/modals/index";

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
    idSend: isLogin.user.id,
    idRecivice: user.id,
  };

  const ButtonSwitch = () => {
    switch (profile.statusFriend) {
      case 0:
        return (
          <button
            onClick={() => setShowConnectFriend(true)}
            className="border-2 border-solid border-white bg-indigo-500 text-white font-semibold rounded-full
          py-2 px-8 hover:border-indigo-500 hover:bg-white hover:text-indigo-500 shadow-xl ml-5"
          >
            Kết bạn
          </button>
        );

      case 1:
        return (
          <button
            onClick={() =>
              dispatch(
                relationshipsAction.deleteRelationShipRequest(relationship)
              )
            }
            className="border-2 border-solid border-white bg-indigo-500 text-white font-semibold rounded-full
          py-2 px-8 hover:border-indigo-500 hover:bg-white hover:text-indigo-500 shadow-xl ml-5"
          >
            Hủy kết bạn
          </button>
        );

      case 2:
        return (
          <button
            onClick={() =>
              dispatch(
                relationshipsAction.updateStatusRelationShipRequest(
                  relationship
                )
              )
            }
            className="border-2 border-solid border-white bg-indigo-500 text-white font-semibold rounded-full
            py-2 px-8 hover:border-indigo-500 hover:bg-white hover:text-indigo-500 shadow-xl ml-5"
          >
            Đồng ý
          </button>
        );
      default:
        return "";
    }
  };

  const history = useHistory();

  const chat = () => {
    history.push(Config.PAGE_MESSENGER);
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
      <ButtonSwitch />
    </div>
  );
}

export default FriendUser;
