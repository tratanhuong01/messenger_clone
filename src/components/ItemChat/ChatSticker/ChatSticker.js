import React, { useState } from "react";

function ChatSticker(props) {
  //
  const { sticker, margin } = props;

  const data = `stickerAnimation:${sticker.col}:${sticker.row}`;

  const [animation, setAnimation] = useState("");

  return (
    <div
      onMouseMove={() => {
        setAnimation(data);
      }}
      onMouseLeave={() => {
        setAnimation("");
      }}
      className={`mess-right relative rounded-lg relative text-white 
      break-all ${margin} border-none outline-none p-1.5 `}
      style={{ maxWidth: "75%", fontSize: "15px" }}
    >
      <div className="w-28 my-1 cursor-pointer">
        <div
          className={`w-28 h-28 max-w-28 max-h-28 p-1 overflow-hidden bg-size:${sticker.col}:${sticker.row}  
          ${animation} relative`}
          style={{ backgroundImage: `url('${sticker.src}')` }}
        ></div>
      </div>
    </div>
  );
}

export default ChatSticker;
