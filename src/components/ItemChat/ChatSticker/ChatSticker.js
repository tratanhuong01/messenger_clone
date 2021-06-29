import React from "react";

ChatSticker.propTypes = {};

function ChatSticker(props) {
  return (
    <div
      className="mess-right relative rounded-lg relative text-white 
      break-all ml-auto border-none outline-none p-1.5 "
      style={{ maxWidth: "75%", fontSize: "15px" }}
    >
      <div className="w-28 my-1">
        <div
          className="w-28 z-0 h-28 max-w-28 max-h-28 p-1 overflow-hidden bg-size:4:4 
          stickerAnimation:4:4 relative"
          style={{
            backgroundImage:
              "url('https://res.cloudinary.com/tratahuong01/image/upload/v1619952761/Sticker/ND10000007_z7jmnf.png')",
          }}
        ></div>
      </div>{" "}
    </div>
  );
}

export default ChatSticker;
