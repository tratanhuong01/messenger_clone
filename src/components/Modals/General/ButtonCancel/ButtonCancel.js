import React from "react";
import { connect } from "react-redux";
import * as modalsAction from "../../../../actions/modals/index";

ButtonCancel.propTypes = {};

const mapDispatchToProps = (dispatch, props) => {
  return {
    closeModal: () => {
      dispatch(modalsAction.closeModal());
    },
  };
};

function ButtonCancel(props) {
  const { closeModal } = props;
  return (
    <button
      onClick={closeModal}
      className="py-2 px-8 rounded-full border-indigo-500 border-2 border-solid 
        mr-3 font-semibold hover:bg-gray-100 dark:text-gray-300 dark:hover:bg-dark-third"
    >
      Hủy
    </button>
  );
}

export default connect(null, mapDispatchToProps)(ButtonCancel);
