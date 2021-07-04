import React from "react";
import { connect } from "react-redux";
import * as modalsAction from "../../../../actions/modals/index";

AddFriendByEmailPhone.propTypes = {};

const mapDispatchToProps = (dispatch, props) => {
  return {
    openModalAddFriend: () => {
      dispatch(modalsAction.openModalAddFriend());
    },
  };
};

function AddFriendByEmailPhone(props) {
  const { openModalAddFriend } = props;
  return (
    <div className="w-full my-2.5 flex">
      <div
        onClick={openModalAddFriend}
        className="w-full flex items-center font-semibold cursor-pointer py-2 
        hover:bg-gray-200 px-6 dark:text-gray-300 dark:hover:bg-dark-third"
      >
        <span
          className="bx bx-user-plus text-2xl text-blue-500 
          cursor-pointer mr-2"
        ></span>
        <span className="hidden md:block">
          Thêm bạn bằng email hoặc số điện thoại
        </span>
      </div>
    </div>
  );
}

export default connect(null, mapDispatchToProps)(AddFriendByEmailPhone);
