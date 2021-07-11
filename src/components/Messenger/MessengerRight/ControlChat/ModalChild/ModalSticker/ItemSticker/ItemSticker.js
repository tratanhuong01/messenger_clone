import React from "react";

function ItemSticker(props) {
  //
  const { sticker } = props;

  return (
    <div className="w-20 mr-1 cursor-pointer">
      <div
        className={`w-20 h-20 max-w-20 max-h-20 p-1 overflow-hidden bg-size:${sticker.col}:${sticker.row}  
        stickerAnimation:${sticker.col}:${sticker.row} relative`}
        style={{ backgroundImage: `url('${sticker.src}')` }}
      ></div>
    </div>
  );
}

export default ItemSticker;
