import React from "react";
import { connect } from "react-redux";
import ImageAvatar from "./ImageAvatar/ImageAvatar";
import ImageCover from "./ImageCover/ImageCover";
import ItemProfileChild from "./ItemProfileChild/ItemProfileChild";
import * as actions from "../../../../actions/index";

ModalProfile.propTypes = {};

const mapStateToProps = (state) => {
  return {
    isLogin: state.isLogin,
  };
};

const mapDispatchToProps = (dispatch, props) => {
  return {
    closeModal: () => {
      dispatch(actions.closeModal());
    },
  };
};

function ModalProfile(props) {
  const { closeModal, isLogin } = props;
  const user = isLogin.user;
  return (
    <div
      className="w-11/12 xl:w-1/3 absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 
        rounded-lg z-50 bg-white dark:bg-dark-third shadow-lg rounded-lg "
    >
      <div className="w-full relative">
        <span
          onClick={closeModal}
          className="rounded-full dark:bg-dark-third text-gray-700 z-50 cursor-pointer dark:text-white 
           px-3 py-1 text-2xl font-semibold absolute -right-3 bg-gray-300 -top-3"
        >
          ×
        </span>
        <div
          className="w-full relative border-b-2 border-gray-300 border-solid pb-1"
          style={{ height: "365px" }}
        >
          <ImageCover />
        </div>
        <div className="w-full absolute top-32">
          <div className="w-full">
            <ImageAvatar user={user} />
            <p className="text-center w-full font-bold text-2xl my-2 dark:text-gray-300">
              {`${user.firstName} ${user.lastName}`}
            </p>
            <p className="text-sm text-center font-semibold w-full text-gray-500">
              Try do it !!
            </p>
          </div>
          <ItemProfileChild position="left-10" />
          <ItemProfileChild position="right-10" />
        </div>
        <div className="w-full mt-2">
          <div className="w-full my-2 relative flex justify-center">
            <button
              className="border-2 border-solid border-indigo-500 text-indigo-500 font-semibold mr-5 bg-white
              py-2 px-8 hover:border-white hover:bg-indigo-500 hover:text-white rounded-full shadow-xl"
            >
              Nhắn tin
            </button>
            <button
              className="border-2 border-solid border-white bg-indigo-500 text-white font-semibold rounded-full
              py-2 px-8 hover:border-indigo-500 hover:bg-white hover:text-indigo-500 shadow-xl ml-5"
            >
              Kết bạn
            </button>
          </div>
          <div className="w-full mt-2">
            <div className="w-full flex"></div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default connect(mapStateToProps, mapDispatchToProps)(ModalProfile);
