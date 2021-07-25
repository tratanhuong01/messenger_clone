import React, { useEffect } from "react";
import CloseModal from "../../../UI/CloseModal/CloseModal";
import * as modalsAction from "../../../../actions/modals/index";
import { useDispatch } from "react-redux";

function ModalCall(props) {
  //
  const dispatch = useDispatch();

  const audio = new Audio("../sound/call.mp3");

  const handelAudio = () => {
    audio.loop = true;
    audio.play();
  };

  useEffect(() => {
    //
    handelAudio();
    setTimeout(() => {
      dispatch(modalsAction.closeModal());
      audio.pause();
      audio.remove();
    }, 20000);
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  const y = window.top.outerHeight / 2 + window.top.screenY - 720 / 2;
  const x = window.top.outerWidth / 2 + window.top.screenX - 1200 / 2;

  return (
    <div
      className="shadow-sm  border border-solid border-gray-500 py-3 pl-1.5 pr-1.5 pt-0
      bg-white w-full fixed z-50 top-1/2 left-1/2 dark:bg-dark-second rounded-lg 
      sm:w-10/12 md:w-2/3 lg:w-2/3 xl:w-1/3 transform -translate-x-1/2 -translate-y-1/2"
    >
      <div className="w-full">
        <p className="text-xl pl-3 font-semibold py-2.5 pb-4 dark:text-white text-left">
          Cuộc gọi đến
        </p>
        <CloseModal />
        <hr />
        <div className="w-full p-2 flex">
          <div className="w-24 h-16">
            <img
              src="/images/male/7.jpg"
              className="w-16 h-16 rounded-full object-cover"
              alt=""
            />
          </div>
          <div className="flex items-center p-2 ml-2 flex-wrap">
            <p className="w-full text-xl font-semibold dark:text-white">
              Trà Hưởng đang gọi cho bạn..
            </p>
            <p className="w-full text-sm text-gray-500 dark:text-gray-300">
              Cuộc gọi sẽ được bắt đầu khi bạn trả lời...
            </p>
          </div>
        </div>
        <div className="flex justify-end pt-2.5">
          <button
            onClick={() => {
              dispatch(modalsAction.closeModal());
              audio.pause();
              audio.remove();
            }}
            type="button"
            className="cursor-pointer border-none 
            font-semibold text-blue-500 rounded-lg py-2 mx-2 px-2"
          >
            Hủy
          </button>
          <button
            onClick={() => {
              dispatch(modalsAction.closeModal());
              window.open(
                `../call/videoCall/${"10000"}`,
                "name",
                `toolbar=1,scrollbars=1,location=1,statusbar=0,menubar=1,resizable=1,width=1200,height=720,
                    top=${y},left=${x}`
              );
            }}
            type="button"
            className={`cursor-pointer border-none font-semibold flex justify-center items-center
            text-white rounded-lg py-2 mx-2 px-2 bg-1877F2 hover:bg-blue-400`}
          >
            <i className="bx bxs-phone-call mr-2 text-xl"></i>
            Chấp nhận
          </button>
        </div>
      </div>
    </div>
  );
}

export default ModalCall;
