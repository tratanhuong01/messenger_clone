import React, { useState } from "react";
import AddFileControl from "../../../../../components/Messenger/MessengerRight/ControlChat/AddFileControl/AddFileControl";
import AddModalControl from "../../../../../components/Messenger/MessengerRight/ControlChat/AddModalControl/AddModalControl";
import StickerControl from "../../../../../components/Messenger/MessengerRight/ControlChat/StickerControl/StickerControl";
import GifControl from "../../../../../components/Messenger/MessengerRight/ControlChat/GifControl/GifControl";
import InputChatControl from "../../../../../components/Messenger/MessengerRight/ControlChat/InputChatControl/InputChatControl";
import SendIconControl from "../../../../../components/Messenger/MessengerRight/ControlChat/SendIconControl/SendIconControl";
import ModalSticker from "../../../../../components/Messenger/MessengerRight/ControlChat/ModalChild/ModalSticker/ModalSticker";
import ModalImage from "../../../../../components/Messenger/MessengerRight/ControlChat/ModalChild/ModalImage/ModalImage";

function ControlChat(props) {
  //
  const { item, messages, isLogin } = props;

  const [show, setShow] = useState(false);

  const [imagePreview, setImagePreview] = useState([]);

  return (
    <div
      className="w-full bg-white dark:bg-dark-second relative z-20 pt-2 pb-3 px-1 flex 
      dark:border-dark-third border-t-2 border-solid border-gray-300 items-end relative"
    >
      {show && <ModalSticker setShow={setShow} />}
      {imagePreview.length > 0 && (
        <ModalImage
          imagePreview={imagePreview}
          setImagePreview={setImagePreview}
        />
      )}
      <div className="w-32 flex">
        <ul className="mr-3 w-full flex py-2">
          <AddModalControl />
          <AddFileControl
            setImagePreview={setImagePreview}
            imagePreview={imagePreview}
          />
          <StickerControl onClick={() => setShow(!show)} />
          <GifControl />
        </ul>
      </div>
      <div className="w-9/12 relative">
        <InputChatControl messages={messages} isLogin={isLogin} />
      </div>
      <SendIconControl item={item} />
    </div>
  );
}

export default ControlChat;
