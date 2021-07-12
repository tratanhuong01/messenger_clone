import React from "react";
import ItemSticker from "./ItemSticker/ItemSticker";
import * as Types from "../../../../../../constants/ActionTypes";

function ModalSticker(props) {
  //
  const { setShow } = props;

  const showAllStickers = Types.STICKER.map((item, index) => {
    return <ItemSticker sticker={item} key={index} setShow={setShow} />;
  });

  return (
    <div
      className="z-40 bg-white my-2 absolute w-72 dark:border-dark-second shadow-lg border-gray-300 p-1 border-2 border-solid rounded-lg dark:bg-dark-second"
      style={{ bottom: "100%", maxHeight: "365px", height: "360px" }}
    >
      <ul className="w-full flex">
        <li
          className="w-10 h-10 mr-2 border-b-4 border-solid border-blue-500 flex items-center 
            dark:text-white justify-center cursor-pointer"
        >
          <i className="bx bx-search text-2xl"></i>
        </li>
        <li
          className="w-10 h-10 mr-2  flex items-center dark:text-white justify-center 
            cursor-pointer"
        >
          <i className="fas fa-history text-xl"></i>
        </li>
        <li
          className="w-10 h-10 mr-2  flex items-center dark:text-white justify-center 
            cursor-pointer"
        >
          <i className="bx bxs-virus text-green-500 text-3xl"></i>
        </li>
        <li
          className="w-10 h-10 mr-2  flex items-center dark:text-white justify-center 
            cursor-pointer"
        >
          <i className="bx bxl-spring-boot text-red-500 text-3xl"></i>
        </li>
        <li
          className="w-10 h-10 mr-2  flex items-center dark:text-white justify-center 
            cursor-pointer"
        >
          <i className="bx bx-wine text-indigo-500 text-3xl"></i>
        </li>
        <li
          className="w-10 h-10 flex items-center dark:text-white justify-center 
            cursor-pointer"
        >
          <i className="bx bx-plus text-3xl"></i>
        </li>
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
