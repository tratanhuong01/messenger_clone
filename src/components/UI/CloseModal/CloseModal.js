import React from "react";
import { connect } from "react-redux";
import * as modalsAction from "../../../actions/modals/index";

CloseModal.propTypes = {};

const mapDispatchToProps = (dispatch, props) => {
  return {
    closeModal: () => {
      dispatch(modalsAction.closeModal());
    },
  };
};

function CloseModal(props) {
  const { closeModal } = props;
  return (
    <span
      onClick={closeModal}
      className="rounded-full dark:bg-dark-third text-gray-700 dark:text-white z-50
      px-3 py-1 text-2xl font-bold fixed right-2 bg-gray-300 top-2 cursor-pointer"
    >
      ×
    </span>
  );
}

export default connect(null, mapDispatchToProps)(CloseModal);
