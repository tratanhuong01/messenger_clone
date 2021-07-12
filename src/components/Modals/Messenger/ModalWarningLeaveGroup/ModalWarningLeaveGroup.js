import React from "react";
import { useDispatch } from "react-redux";
import CloseModal from "../../../UI/CloseModal/CloseModal";
import * as modalsAction from "../../../../actions/modals/index";
import * as messagesAction from "../../../../actions/messages/index";

function ModalWarningLeaveGroup(props) {
  //
  const dispatch = useDispatch();

  const { data } = props;

  return (
    <div
      className="shadow-sm border border-solid border-gray-500 py-3 pl-1.5 pr-1.5 pt-0
      bg-white w-full fixed z-50 top-1/2 left-1/2 dark:bg-dark-second rounded-lg 
      sm:w-10/12 md:w-2/3 lg:w-2/3 xl:w-1/3 transform -translate-x-1/2 -translate-y-1/2"
    >
      <div className="w-full text-center">
        <p className="text-xl font-semibold py-2.5 pb-4 dark:text-white">
          {data.type === 0 ? "Xóa thành viên" : "Rời khỏi nhóm chat ?"}
        </p>
        <CloseModal />
        <hr />
      </div>
      <div className="w-full p-4">
        {data.type === 0 ? (
          <p className="text-base dark:text-white font-semibold py-2">
            {`${data.userDelete.firstName} ${data.userDelete.lastName}`} sẽ
            không nhận được tin nhắn từ cuộc trò chuyện này nữa và mọi người sẽ
            thấy thông báo{" "}
            {`${data.userDelete.firstName} ${data.userDelete.lastName}`} bị xóa
            khỏi nhóm .
          </p>
        ) : (
          <p className="text-base dark:text-white font-semibold py-2">
            Bạn sẽ không nhận được tin nhắn từ cuộc trò chuyện này nữa và mọi
            người sẽ thấy bạn rời nhóm.
          </p>
        )}
      </div>
      <div className="text-right pt-3">
        <button
          onClick={() => dispatch(modalsAction.closeModal())}
          type="button"
          className="cursor-pointer w-1/5 border-none bg-blue-200 
          font-semibold text-blue-500 rounded-lg p-2 mx-2"
        >
          Hủy
        </button>
        <button
          onClick={() => {
            dispatch(messagesAction.deleteUserOutGroupRequest(data));
          }}
          type="button"
          className="cursor-pointer bg-gray-500 border-none 
          font-semibold text-white rounded-lg p-2 mx-2"
        >
          {data.type === 0 ? "Xóa thành viên" : "Rời khỏi nhóm"}
        </button>
      </div>
    </div>
  );
}

export default ModalWarningLeaveGroup;
