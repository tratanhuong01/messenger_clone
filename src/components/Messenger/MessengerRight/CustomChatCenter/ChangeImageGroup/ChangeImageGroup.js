import React from "react";
import { useDispatch, useSelector } from "react-redux";
import * as groupMessagesAction from "../../../../../actions/groupmessage/index";
import api from "../../../../../api/api";

function ChangeImageGroup(props) {
  //
  const dispatch = useDispatch();

  const states = useSelector((state) => {
    return {
      messages: state.messages,
      isLogin: state.isLogin,
    };
  });

  const { messages, isLogin } = states;

  const onChangeFile = async (event) => {
    if (event.target.files.length !== 0) {
      const formData = new FormData();
      formData.append("multipartFile", event.target.files[0]);
      formData.append("id", messages.group.id);
      formData.append("publicId", "Messenger/ImageGroup/");
      const result = await api(`updateImageSingle`, "POST", formData, null);
      dispatch(
        groupMessagesAction.updateImageGroupMessageRequest({
          group: messages.group,
          user: isLogin.user,
          url: result.data.url,
        })
      );
    }
  };

  return (
    <li
      onClick={() => ""}
      className="w-full py-2.5 px-4 rounded-lg hover:bg-gray-300 dark:hover:bg-dark-third 
              py-2 px-2 font-semibold cursor-pointer dark:text-white flex"
    >
      <input
        type="file"
        id="fileChangeImageGroup"
        className="hidden"
        onChange={onChangeFile}
      />
      <label htmlFor="fileChangeImageGroup" className="flex items-center">
        <div className="flex justity-center w-8">
          <span
            className={`bx bx-images text-xm dark:text-white flex items-center`}
          ></span>
        </div>
        <div className="flex items-center">Thay đổi ảnh</div>
      </label>
    </li>
  );
}

export default ChangeImageGroup;
