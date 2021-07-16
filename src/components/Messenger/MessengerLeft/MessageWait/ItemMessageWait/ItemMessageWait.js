import React from "react";

function ItemMessageWait(props) {
  return (
    <div
      className="w-full mess-person user__chat__child cursor-pointer flex relative py-2 px-1 
        dark:hover:bg-dark-third hover:bg-gray-200  "
    >
      <div className="w-full flex justify-center md:w-1/5 mr-3">
        <div
          className="xl:w-14 xl:h-14   object-cover rounded-full 
            mx-auto relative w-16 h-16"
        >
          <img
            src="/images/male/6.jpg"
            alt=""
            className="xl:w-14 xl:h-14 rounded-full object-cover mx-auto 
            w-16 h-16"
          />
        </div>
      </div>
      <div className="w-4/5 hidden md:block">
        <div className="w-full text-left">
          <span
            className="w-full font-semibold dark:text-gray-300 inline-block whitespace-nowrap
            overflow-ellipsis overflow-hidden max-w-full pr-4"
          >
            Vinh Râu
          </span>
        </div>
        <div className="w-full flex py-1 text-sm flex  md:pr-3 xl:pr-0">
          <div className="w-full flex text-left dark:text-white font-semibold">
            <div
              className="max-w-3/4 inline-block whitespace-nowrap text-left 
                overflow-ellipsis overflow-hidden pr-1 text-gray-500"
            >
              Các bạn hiện là bạn bè trên Ensonet
            </div>
            <div
              className="w-1/4 flex pr-3 text-gray-500 inline-block whitespace-nowrap
                overflow-ellipsis overflow-hidden"
            >
              3 giờ
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default ItemMessageWait;
