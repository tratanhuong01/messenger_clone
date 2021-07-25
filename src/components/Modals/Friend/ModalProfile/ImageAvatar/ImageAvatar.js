import React, { useState } from "react";
import { useDispatch } from "react-redux";
import api from "../../../../../api/api";
import * as usersAction from "../../../../../actions/users/index";

function ImageAvatar(props) {
  //
  const { user, isLogin } = props;

  const [stateApiAvatar, setStateApiAvatar] = useState(true);

  const [url, setUrl] = useState(user.avatar);

  const dispatch = useDispatch();

  const onChangeFile = async (event) => {
    if (event.target.files.length !== 0) {
      setStateApiAvatar(false);
      const formData = new FormData();
      formData.append("multipartFile", event.target.files[0]);
      formData.append("id", user.id);
      formData.append("publicId", "Messenger/AvatarUpdate/");
      const result = await api(`updateImageSingle`, "POST", formData, null);
      if (localStorage && localStorage.getItem("user")) {
        await api(
          "updateAvatar",
          "PUT",
          {
            avatar: result.data.url,
            id: user.id,
          },
          null
        );
        let userChange = JSON.parse(localStorage.getItem("user"));
        userChange.avatar = result.data.url;
        dispatch(usersAction.login(userChange));
        localStorage.setItem("user", JSON.stringify(userChange));
        setUrl(result.data.url);
        setStateApiAvatar(true);
      }
    }
  };

  return (
    <div className="w-40 h-40 mx-auto relative">
      <div
        className={`w-40 h-40 absolute rounded-full top-0 left-0 bg-white bg-opacity-50 
        ${stateApiAvatar ? "hidden" : ""}`}
      >
        <div className="w-full h-full rounded-full relative flex justify-center">
          <span
            className="fas fa-circle-notch fa-spin text-2xl flex 
            items-center"
          ></span>
        </div>
      </div>
      <img
        src={url}
        className="w-full h-full rounded-full 
        object-cover p-1 border-4 bg-white border-solid border-gray-500"
        alt=""
      />
      <input
        type="file"
        onChange={onChangeFile}
        className="hidden"
        id="avatar__file"
        disabled={!stateApiAvatar}
      />
      {user.id === isLogin.user.id && (
        <label
          htmlFor="avatar__file"
          className="absolute bottom-0 right-0 h-10 w-10"
        >
          <span
            className="bx bxs-camera dark:text-white z-50 dark:bg-dark-main text-2xl flex 
          rounded-full cursor-pointer bg-gray-200 justify-center items-center h-full w-full"
          ></span>
        </label>
      )}
    </div>
  );
}

export default ImageAvatar;
