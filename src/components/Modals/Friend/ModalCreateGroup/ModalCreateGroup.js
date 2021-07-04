import React from "react";
import CloseModal from "../../../UI/CloseModal/CloseModal";
import ButtonCancel from "../../General/ButtonCancel/ButtonCancel";
import ButtonSave from "../../General/ButtonSave/ButtonSave";
import AddMemberGroup from "./AddMemberGroup/AddMemberGroup";
import ColorGroup from "./ColorGroup/ColorGroup";
import ItemMemberChoose from "./ItemMemberChoose/ItemMemberChoose";
import NameGroup from "./NameGroup/NameGroup";

ModalCreateGroup.propTypes = {};

function ModalCreateGroup(props) {
  return (
    <div
      className="w-11/12 xl:w-1/3 absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 
      rounded-lg z-50 bg-white dark:bg-dark-second shadow-lg rounded-lg "
    >
      <div className="w-full relative">
        <p className="m-3 font-semibold text-xl dark:text-gray-300">Tạo nhóm</p>
        <CloseModal />
        <hr />
        <NameGroup />
        <ColorGroup />
        <AddMemberGroup />
        <div className="m-2 w-full mt-4 pl-2 pr-6">
          <span
            className="px-5 py-2 rounded-full bg-blue-200 text-blue-600 font-semibold 
            cursor-pointer mr-4 text-sm"
          >
            Tất cả
          </span>
          <span
            className="px-5 py-2 rounded-full bg-gray-200  font-semibold 
            cursor-pointer mr-4 text-sm"
          >
            Đã chọn
          </span>
        </div>
        <div
          className="my-2 w-full mt-4 h-52 max-h-52 overflow-y-auto 
          wrapper-scrollbar"
        >
          <ItemMemberChoose index={0} />
          <ItemMemberChoose index={1} />
          <ItemMemberChoose index={2} />
          <ItemMemberChoose index={3} />
        </div>
        <div className="w-full">
          <div className="flex my-2 justify-end">
            <ButtonCancel />
            <ButtonSave label={"Tạo nhóm"} />
          </div>
        </div>
      </div>
    </div>
  );
}

export default ModalCreateGroup;
