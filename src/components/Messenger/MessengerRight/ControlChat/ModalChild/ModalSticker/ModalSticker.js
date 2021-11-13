import React, { useState } from "react";
import ItemSticker from "./ItemSticker/ItemSticker";
import sticker from "../../../../../../sticker";

function ModalSticker(props) {
  //

  const { setShow } = props;

  const generalListSticker = () => {
    let list = [];
    sticker.forEach((element) => {
      let index = list.findIndex((item) => item.group === element.group);
      if (index === -1) list.push(element);
    });
    return list;
  };

  const stickerByGroup = (dt) => {
    let list = [];
    sticker.forEach((element) => {
      if (element.group === dt) {
        let index = list.findIndex((item) => item.id === element.id);
        if (index === -1) list.push(element);
      }
    });
    return list;
  };

  const [categoryItem, setCategoryItem] = useState("001");

  const showAllStickers = stickerByGroup(categoryItem).map((item, index) => {
    return <ItemSticker sticker={item} key={index} setShow={setShow} />;
  });

  const showCategory = generalListSticker(categoryItem).map((item, index) => {
    return (
      <li
        onClick={() => setCategoryItem(item.group)}
        className={`w-10 mr-2 flex flex-shrink-0 items-center dark:text-white justify-center 
        cursor-pointer ${
          item.group === categoryItem &&
          "border-b-4 border-solid border-blue-500 "
        }`}
        key={index}
      >
        <div
          className={`w-10 h-10 max-w-10 max-h-10 overflow-hidden animation__sticker bg-size:${item.col}:${item.row} relative`}
          style={{ backgroundImage: `url('${item.src}')` }}
        ></div>
      </li>
    );
  });

  return (
    <div
      className="z-50 bg-white my-2 absolute w-72 dark:border-dark-second shadow-lg border-gray-300 p-1 border-2 border-solid rounded-lg dark:bg-dark-second"
      style={{ bottom: "100%", maxHeight: "365px", height: "360px" }}
    >
      <ul className="w-full flex max-w-full overflow-x-auto">
        {/* <li
          className="w-10 h-10 flex flex-shrink-0 mr-2 flex items-center 
            dark:text-white justify-center cursor-pointer"
        >
          <i className="bx bx-search text-2xl"></i>
        </li> */}
        {showCategory}
        {/* <li
          className="w-10 h-10 flex flex-shrink-0 items-center dark:text-white justify-center 
            cursor-pointer"
        >
          <i className="bx bx-plus text-3xl"></i>
        </li> */}
      </ul>
      <div className="w-full py-2 px-3 text-center">
        <input
          type="text"
          className="w-full mx-auto dark:border-dark-second 
            border-gray-200 border-solid border-2 my-1
            px-2.5 py-2 rounded-3xl dark:bg-dark-third "
          placeholder="Tìm kiếm"
        />
      </div>
      <div
        className="w-full h-60 overflow-y-auto flex flex-wrap
        wrapper-content-right px-2"
        style={{ maxHeight: "300px" }}
      >
        {showAllStickers}
      </div>
    </div>
  );
}

export default ModalSticker;
