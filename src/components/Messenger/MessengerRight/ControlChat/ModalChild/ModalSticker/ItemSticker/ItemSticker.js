import React, { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import * as messagesAction from "../../../../../../../actions/messages/index";

function ItemSticker(props) {
  //
  const { sticker, setShow } = props;

  const dispatch = useDispatch();

  const states = useSelector((state) => {
    return {
      isLogin: state.isLogin,
      messages: state.messages,
    };
  });

  const { isLogin, messages } = states;

  const data = `stickerAnimation:${sticker.col}:${sticker.row}`;

  const [animation, setAnimation] = useState("");

  return (
    <div
      onClick={() => {
        dispatch(
          messagesAction.addMessageRequest({
            content: "",
            group: messages.group,
            user: isLogin.user,
            type: 2,
            child: sticker,
          })
        );
        setShow(false);
      }}
      onMouseMove={() => {
        setAnimation(data);
      }}
      onMouseLeave={() => {
        setAnimation("");
      }}
      className="w-20 mr-1 cursor-pointer"
    >
      <div
        className={`w-20 h-20 max-w-20 max-h-20 p-1 overflow-hidden bg-size:${sticker.col}:${sticker.row}  
        ${animation} relative`}
        style={{ backgroundImage: `url('${sticker.src}')` }}
      ></div>
    </div>
  );
}

export default ItemSticker;
