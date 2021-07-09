import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import ImageAvatar from "./ImageAvatar/ImageAvatar";
import ImageCover from "./ImageCover/ImageCover";
import ItemProfileChild from "./ItemProfileChild/ItemProfileChild";
import * as modalsAction from "../../../../actions/modals/index";
import FriendUser from "./FriendUser/FriendUser";
import ConnectFriend from "./ConnectFriend/ConnectFriend";
import * as relationshipUsersAction from "../../../../actions/relationshipusers/index";

function ModalProfile(props) {
  //
  const states = useSelector((state) => {
    return {
      isLogin: state.isLogin,
      profile: state.profile,
    };
  });

  const dispatch = useDispatch();

  const { isLogin, profile } = states;

  const { user } = props;

  const [showConnectFriend, setShowConnectFriend] = useState(false);

  useEffect(() => {
    dispatch(
      relationshipUsersAction.loadInformationProfile(isLogin.user.id, user.id)
    );
  }, [dispatch, isLogin, user]);

  return (
    <div
      className="w-11/12 xl:w-1/3 absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 
        rounded-lg z-50 bg-white dark:bg-dark-third shadow-lg rounded-lg "
    >
      <div className="w-full relative">
        <span
          onClick={() => dispatch(modalsAction.closeModal())}
          className="rounded-full dark:bg-dark-third text-gray-700 z-50 cursor-pointer dark:text-white 
           px-3 py-1 text-2xl font-semibold absolute -right-3 bg-gray-300 -top-3"
        >
          ×
        </span>
        <div
          className="w-full relative border-b-2 border-gray-300 border-solid pb-1"
          style={{ height: "365px" }}
        >
          <ImageCover />
        </div>
        <div className="w-full absolute top-32">
          <div className="w-full">
            <ImageAvatar user={user} isLogin={isLogin} />
            <p className="text-center w-full font-bold text-2xl my-2 dark:text-gray-300">
              {`${user.firstName} ${user.lastName}`}
            </p>
            <p className="text-sm text-center font-semibold w-full text-gray-500">
              Try do it !!
            </p>
          </div>
          <ItemProfileChild position="left-10" />
          <ItemProfileChild position="right-10" />
        </div>
        <div className="w-full mt-2">
          {showConnectFriend ? (
            <ConnectFriend
              setShowConnectFriend={setShowConnectFriend}
              user={user}
            />
          ) : (
            <div className="">
              {isLogin.user.id === user.id ? (
                ""
              ) : (
                <FriendUser
                  profile={profile}
                  user={user}
                  setShowConnectFriend={setShowConnectFriend}
                />
              )}
            </div>
          )}

          <div className="w-full mt-2">
            <div className="w-full flex"></div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default ModalProfile;
