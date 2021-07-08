import React, { useState } from "react";
import CloseModal from "../../../UI/CloseModal/CloseModal";
import ButtonCancel from "../../General/ButtonCancel/ButtonCancel";
import ButtonSave from "../../General/ButtonSave/ButtonSave";
import FormInputSearch from "./FormInputSearch/FormInputSearch";
import * as usersAction from "../../../../actions/users/index";
import { connect } from "react-redux";

ModalAddFriend.propTypes = {};

const mapDispatchToProps = (dispatch, props) => {
  return {
    searchUserByEmailOrPhone: (search) => {
      dispatch(usersAction.searchUserByEmailOrPhone(search));
    },
  };
};

function ModalAddFriend(props) {
  const [search, setSearch] = useState("");
  const { searchUserByEmailOrPhone } = props;
  return (
    <div
      className="w-11/12 xl:w-1/3 absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 
        rounded-lg z-50 bg-white dark:bg-dark-second shadow-lg rounded-lg "
    >
      <div className="w-full relative">
        <p className="m-3 font-semibold text-xl dark:text-gray-300">Thêm bạn</p>
        <CloseModal />
        <hr />
        <FormInputSearch setSearch={setSearch} />
        <div className="w-full">
          <div className="flex my-2 justify-end">
            <ButtonCancel />
            <ButtonSave
              onClick={searchUserByEmailOrPhone}
              search={search}
              label={"Tìm kiếm"}
            />
          </div>
        </div>
      </div>
    </div>
  );
}

export default connect(null, mapDispatchToProps)(ModalAddFriend);
