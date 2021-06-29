import React from "react";
import ItemGroupChat from "../../../ItemChat/ItemGroupChat/ItemGroupChat";
// import ItemSingleChat from "../../../ItemChat/ItemSingleChat/ItemSingleChat";

CustomChatTop.propTypes = {};

function CustomChatTop(props) {
  return (
    <div className="w-full mt-2">
      {/* <ItemSingleChat
        width="w-16"
        height="h-16"
        margin="my-2"
        padding=""
        widthParent=""
        heightParent=""
      /> */}
      <ItemGroupChat
        width="w-10"
        height="h-10"
        margin="mb-1.5"
        padding=""
        widthParent="w-16"
        heightParent="h-16"
      />
      <p className="font-semibold text-center dark:text-white">Phương Thảo</p>
      <p className="font-semibold text-center text-sm text-gray-600 dark:text-gray-300">
        Đang hoạt động
      </p>
    </div>
  );
}

export default CustomChatTop;
