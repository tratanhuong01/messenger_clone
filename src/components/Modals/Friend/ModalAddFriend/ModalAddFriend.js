import React from "react";
import CloseModal from "../../../UI/CloseModal/CloseModal";
import ButtonCancel from "../../General/ButtonCancel/ButtonCancel";
import ButtonSave from "../../General/ButtonSave/ButtonSave";
import FormInputSearch from "./FormInputSearch/FormInputSearch";
ModalAddFriend.propTypes = {};

function ModalAddFriend(props) {
  return (
    <div
      className="w-11/12 xl:w-1/3 absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 
        rounded-lg z-50 bg-white dark:bg-dark-third shadow-lg rounded-lg "
    >
      <div className="w-full relative">
        <p className="m-3 font-semibold text-xl">Thêm bạn</p>
        <CloseModal />
        <hr />
        <FormInputSearch />
        <div className="w-full">
          <div className="flex my-2 justify-end">
            <ButtonCancel />
            <ButtonSave label={"Tìm kiếm"} />
          </div>
        </div>
      </div>
    </div>
  );
}

export default ModalAddFriend;
